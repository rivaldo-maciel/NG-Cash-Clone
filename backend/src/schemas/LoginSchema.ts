import { z } from 'zod';

const loginSchema = z.object({
  userName: z
    .string(),
  password: z
    .string(),
});

export default loginSchema;
