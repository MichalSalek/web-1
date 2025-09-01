// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiResponse }   from 'next'
import { reportIssue }            from '../../../../../application/debugger/errorHandler.possibilities.api'
import { getValidatedStatusCode } from '../../../../../READONLY-shared-kernel/application/http/http.api'




type Data = {
  date: string
}

const creationDate = new Date()
const ID = creationDate.toLocaleString() + Math.random()

export const handler = (_: undefined, res: NextApiResponse<Data>) => {
  try {
    res.status(getValidatedStatusCode(200))
       .json({date: ID})
  } catch (e) {
    reportIssue(
      'get-current-access get endpoint',
      e)
    res.status(getValidatedStatusCode(500))
       .end()
  }
}

export default handler

