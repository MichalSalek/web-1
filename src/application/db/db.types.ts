export type DBError = Record<string, string>

export type DBCallProps<REQ> = {
  payload: REQ,
  error?: (error: DBError) => void
}
