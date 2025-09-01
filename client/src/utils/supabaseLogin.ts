import supabase from './supabase.ts'
import { AuthTokenResponsePassword } from 'npm:@supabase/auth-js@2.69.1'

export function supabaseLogin(): Promise<AuthTokenResponsePassword> {
  return supabase.auth.signInWithPassword({
    email: 'anton.kriuchkov@beetroot.se',
    password: 'hunter666s'
  })
}
