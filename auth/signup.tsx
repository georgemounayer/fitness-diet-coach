'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function SignupPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [language, setLanguage] = useState('sv')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSignup = async () => {
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { language }
      }
    })

    setLoading(false)

    if (error) {
      setError(error.message)
    } else {
      router.push('/onboarding')
    }
  }

  return (
    <main className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Skapa konto</h1>

      <input
        type="email"
        placeholder="E-post"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />

      <input
        type="password"
        placeholder="Lösenord"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      >
        <option value="sv">Svenska</option>
        <option value="en">English</option>
      </select>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <button
        onClick={handleSignup}
        className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Skapar konto...' : 'Skapa konto'}
      </button>
    </main>
  )
}
