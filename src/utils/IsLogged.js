import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'

import { auth } from '../services/firebase'

const IsLogged = () => {
  const [user, loading] = useAuthState(auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (loading) return
    if (!user) navigate('/')
  }, [user, loading])

  return [user, loading]
}

export default IsLogged