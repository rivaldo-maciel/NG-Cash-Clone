import { z } from 'zod';

const transferSchema = z.object({
  value: z.number(),
  creditedUserName: z.string()
});

export default transferSchema;
