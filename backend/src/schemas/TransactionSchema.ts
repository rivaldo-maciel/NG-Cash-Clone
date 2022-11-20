import { z } from 'zod';

const transactionSchema = z.object({
  id: z.number().optional(),
  debitedAccountId: z.number(),
  creditedAccountId: z.number(),
  value: z.number(),
  createdAt: z.date()
})

export default transactionSchema;