import { verify } from 'jsonwebtoken'
import { Context } from '../context'

export const APP_SECRET = 'appsecret321'

interface AuthPayload {
  userId: string
}

export function getUser(context: Context): AuthPayload {
  const Authorization = context.request.get('Authorization')
  if (!Authorization) throw new Error('no Authorization token')
  const token = Authorization.replace('Bearer ', '')
  const verifiedToken = verify(token, APP_SECRET) as AuthPayload
  if (!verifiedToken) throw new Error('Authorization falied')
  return verifiedToken
}
