import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  // SERVER_PORT: z.number().int(),
  API_URL: z.string(),
  // API_PORT: z.number().int(),
  USUARIO_VEEAM_ONE: z.string(),
  PASSWORD_VEEAM_ONE: z.string(),
  TYPE_ACESSO_VEEAM_ONE: z.string(),
  TOKEN_VEEAM_ONE: z.string(),
})

export const env = envSchema.parse(process.env)
