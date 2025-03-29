import { useState, useEffect } from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { authConfig } from '../lib/authConfig'
import { supabase } from '../lib/supabase'

export default function AuthTest() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    // 초기 세션 확인
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    // 세션 변경 감지
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log('Auth State Changed:', session)
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (
      <div className="auth-container">
        <Auth {...authConfig} />
      </div>
    )
  }

  return (
    <div className="auth-container">
      <div>로그인된 사용자: {session.user.email}</div>
      <button onClick={() => supabase.auth.signOut()}>로그아웃</button>
    </div>
  )
}
