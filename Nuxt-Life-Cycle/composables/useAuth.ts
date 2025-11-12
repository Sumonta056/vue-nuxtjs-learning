// Reusable authentication composable
export const useAuth = () => {
  const user = useState('user', () => ({
    name: '',
    email: '',
    isAuthenticated: false,
  }))

  const login = async (email: string, password: string) => {
    // Simulate API call
    console.log('🔐 [useAuth] Logging in...', email)
    
    // In real app, call your API
    // const { data } = await $fetch('/api/login', { method: 'POST', body: { email, password } })
    
    // Simulate success
    user.value = {
      name: 'John Doe',
      email: email,
      isAuthenticated: true,
    }
    
    return { success: true }
  }

  const logout = () => {
    console.log('🚪 [useAuth] Logging out...')
    user.value = {
      name: '',
      email: '',
      isAuthenticated: false,
    }
  }

  return {
    user: readonly(user),
    login,
    logout,
  }
}

