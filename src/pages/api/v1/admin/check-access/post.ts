// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios, { AxiosResponse }                 from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { reportIssue }                          from '../../../../../application/debugger/errorHandler.possibilities.api'
import { getValidatedStatusCode }               from '../../../../../READONLY-shared-kernel/application/http/http.api'




export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const payload = req.body
  try {
    const url = payload.url
    if (url) {
      const response: AxiosResponse = await axios(url)
      res.status(getValidatedStatusCode(200))
         .json(response.data)
    } else {
      res.status(getValidatedStatusCode(400))
         .json({
           info: 'No URL provided.',
           payload
         })
    }

  } catch (e) {
    reportIssue(
      'get-current-access post endpoint',
      e)
    res.status(getValidatedStatusCode(500))
       .end()
  }
}

export default handler
