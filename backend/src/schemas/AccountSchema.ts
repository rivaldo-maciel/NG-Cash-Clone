import { z } from 'zod';

const accountSchema = z.object({
  id: z.number().optional(),
  balance: z.number()
});

export default accountSchema;
