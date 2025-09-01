import {CORS_ALLOWED_ORIGINS, CORS_HEADERS_KEYS, CORS_HEADERS_VALUES} from "./controlCORS.config";
import {NextApiWithOptionalPayload} from "../../domain/http/http.types";

export const isAllowedOrigin = ({req}: NextApiWithOptionalPayload): boolean => {
  const origin = req.headers?.origin ?? ''
  return CORS_ALLOWED_ORIGINS.includes(origin)
}

export const setCORSHeaders = ({req, res}: NextApiWithOptionalPayload) => {
  const origin = req.headers?.origin ?? ''
  res.setHeader(
    'Access-Control-Allow-Origin',
    origin)
  for (let i = 0; i < CORS_HEADERS_KEYS.length; i++) {
    res.setHeader(
      CORS_HEADERS_KEYS[i],
      CORS_HEADERS_VALUES[i])
  }
}
