import {NextApiRequest, NextApiResponse} from 'next'


export type NextApiWithOptionalPayload<T = unknown> = {
  payload?: T,
  req: NextApiRequest,
  res: NextApiResponse
}
