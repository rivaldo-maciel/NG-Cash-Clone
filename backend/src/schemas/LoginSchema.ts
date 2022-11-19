import { z } from 'zod';

const loginSchema = z.object({
  userName: z
    .string()
    .min(1, { message: 'user name must be at least 3 characters' })
    .max(18, { message: 'user name must be a maximum of 18 characters' }),
  password: z
    .string()
    .min(8, { message: 'password must be at least 8 characters' })
    .max(30, { message: 'password must be a maximum of 30 characters' })
    .regex(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$'), {
      message: 'password must have at least one number and one capital letter'
    })
});

export default loginSchema;
