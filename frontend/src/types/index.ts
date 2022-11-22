export type User = {
  userName: string;
  accountId: string;
  token: string;
};

export type Transaction = {
  creditedUserName: string,
  debitedUserName: string,
  value: number,
  createdAt: string
}