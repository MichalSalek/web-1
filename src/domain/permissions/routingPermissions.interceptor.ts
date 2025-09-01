import {ROUTES_FRONT_PATH} from "../../READONLY-shared-kernel/domain/routing/routing.types";
import {PERMISSIONS_POLICY} from "../../READONLY-shared-kernel/policies/permissions.policy";
import {
  getInfoEventWithPayloadDTO,
  getValidatedStatusCode
} from "../../READONLY-shared-kernel/application/http/http.api";
import {SESSION_DTO_API_V1} from "../../READONLY-shared-kernel/models/session/session.dto";
import {NextApiWithOptionalPayload} from "../http/http.types";
import {CurrentUser} from "../../READONLY-shared-kernel/models/user/user.types";

export const isUserShouldBeOnThisRoutePermissionsInterceptor = (
  {
    req,
    res,
    payload: currentUser
  }: NextApiWithOptionalPayload<CurrentUser>): boolean => {

  const currentPathname = req.headers.pathname as ROUTES_FRONT_PATH

  return PERMISSIONS_POLICY.utils.GET_PERMISSION_APPROVAL_FOR_ROUTE_WITH_CALLBACKS({
    currentPathname,
    currentUser,
    userExistsIsStaticPageCallback: (currentUser) => {
      // Not permitted route (for logged user):
      //
      res.status(getValidatedStatusCode(200))
        .json(getInfoEventWithPayloadDTO<SESSION_DTO_API_V1['GET_CURRENT']['RESPONSE']>({
          event: 'ALREADY_LOGGED',
          data: currentUser
        }))
    },
    userExistsIsNotStaticPageCallback: (currentUser) => {
      // Not permitted route, but another than static page - general auth error:
      //
      res.status(getValidatedStatusCode(401))
        .json(getInfoEventWithPayloadDTO<SESSION_DTO_API_V1['GET_CURRENT']['RESPONSE_ERROR']>({
          event: 'UNAUTHORIZED',
          data: currentUser
        }))
    },
    userNotExistsCallback: () => {
      // Not logged and cannot be there:
      //
      res.status(getValidatedStatusCode(401))
        .json(getInfoEventWithPayloadDTO<SESSION_DTO_API_V1['GET_CURRENT']['RESPONSE_ERROR']>({
          event: 'LOGIN_FIRST',
          data: undefined
        }))
    },
  })
}
