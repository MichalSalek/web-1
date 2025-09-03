import {deleteCookie, getCookie, setCookie} from 'cookies-next/server'
import {NextApiWithOptionalPayload} from '../../domain/http/http.types'
import {__debuggerGate} from '../debugger/debugger.utils.api'
import {reportIssue} from '../debugger/errorHandler.possibilities.api'
import {SET_COOKIE_OPTIONS} from './cookies.config'
import {CookiePayload} from './cookies.types'


export const setClientCookie = async <T>(props: NextApiWithOptionalPayload<CookiePayload<T>>) => {
  const {
    req,
    res,
    payload
  } = props


  if (!payload) {
    reportIssue(
      'setClientCookie, no payload.',
      payload)
    return void undefined
  }


  await setCookie(
    payload.key,
    payload.data,
    {
      req,
      res, ...SET_COOKIE_OPTIONS, ...payload.options
    })
}


export const deleteClientCookie = async (props: NextApiWithOptionalPayload<string>) => {
  const {
    req,
    res,
    payload
  } = props

  if (!payload) {
    return void undefined
  }

  await deleteCookie(
    payload,
    {
      req,
      res
    })
}


export const getClientCookie = async (props: NextApiWithOptionalPayload<string>) => {
  const {
    req,
    res,
    payload
  } = props

  if (!payload) {
    return null
  }

  const cookie = await getCookie(
    payload,
    {
      req,
      res
    }) as string | undefined ?? null

  __debuggerGate(() => console.log(
    'getClientCookie type: ',
    typeof cookie))

  return cookie
}
