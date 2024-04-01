import { object, string } from 'zod'
import { getXataClient } from '@/libs/xata'
import { XataError } from '@xata.io/client'

export async function createEmail(email: string): Promise<{
  success: string
  error: string
}> {
  let userSchema = object({
    email: string().email().min(1),
  })
  const parsedUserSchema = userSchema.parse({
    email: email,
  })
  const xata = getXataClient()
  try {
    await xata.db.registrations.create({ email: email })
    return { success: 'You have been succesfully registered!', error: '' }
  } catch (error: any) {
    return { success: '', error: (error as XataError).message }
  }
}
