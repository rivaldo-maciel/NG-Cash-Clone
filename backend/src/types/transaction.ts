export type FormattedTransaction = {
  creditedUserName: Promise<string>,
  debitedUserName: Promise<string>,
  value: number,
  createdAt: string
}