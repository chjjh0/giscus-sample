import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from './supabase'

export const authConfig = {
  supabaseClient: supabase,
  appearance: {
    theme: ThemeSupa,
    variables: {
      default: {
        colors: {
          brand: '#404040',
          brandAccent: '#52525b',
        },
      },
    },
  },
  providers: ['google', 'github', 'kakao'],
  redirectTo: `${window.location.origin}/auth/callback`,
}
