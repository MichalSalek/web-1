import type {NextApiRequest, NextApiResponse} from "next";
import {re_set_active_accounts} from "../../prisma-script-migrations/re-set-active-accounts";

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {


  // // // Pobierz wszystkie rekordy z brakującym account_id
  //
  // const accounts = await DB_CLIENT.use.account.findMany({
  //   select: {id: true}
  // });
  //
  // // Zaktualizuj każdy rekord z unikalnym cuid()
  // for (const account of accounts) {
  //   await DB_CLIENT.use.account.update({
  //     where: {id: account.id},
  //     data: {account_id: account.id}
  //   });
  // }
  //
  // // // Pobierz wszystkie rekordy z brakującym account_id
  // const eventLogs = await DB_CLIENT.use.eventLog.findMany({
  //   where: {event_log_id: null},
  //   select: {id: true}
  // });
  //
  // // Zaktualizuj każdy rekord z unikalnym cuid()
  // for (const eventLog of eventLogs) {
  //   await DB_CLIENT.use.eventLog.update({
  //     where: {id: eventLog.id},
  //     data: {event_log_id: eventLog.id}
  //   });
  // }
  //
  //
  //
  await re_set_active_accounts()

  res.send("ok")

  // res.send("wut?")
}

export default handler;