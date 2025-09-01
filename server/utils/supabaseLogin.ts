import supabase from './supabase.ts'

export function supabaseLogin() {
  return supabase.auth.signInWithPassword({
    email: 'anton.kriuchkov@beetroot.se',
    password: 'hunter666s'
  })
}
