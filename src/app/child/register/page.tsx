'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const avatars = ['🐻', '🐶', '🐱', '🦊', '🐼', '🐯', '🐵', '🐸']

export default function InscriptionEnfant() {
  const [nom, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!nom || !avatar) return alert('Choisis un nom et un avatar !')

    const res = await fetch('/api/child/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nom, avatar }),
    })

    const data = await res.json()
    localStorage.setItem('enfantId', data.id)
    router.push('/')
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-purple-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Créer un compte enfant</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow w-full max-w-sm">
        <label className="block mb-2">Prénom de l’enfant :</label>
        <input
          value={nom}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Ex : Amine"
        />

        <label className="block mb-2">Choisis un avatar :</label>
        <div className="grid grid-cols-4 gap-2 mb-4">
          {avatars.map((a) => (
            <button
              key={a}
              type="button"
              className={`p-2 text-3xl rounded-full ${avatar === a ? 'bg-blue-200' : 'bg-gray-100'}`}
              onClick={() => setAvatar(a)}
            >
              {a}
            </button>
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Créer le compte
        </button>
      </form>
    </main>
  )
}
