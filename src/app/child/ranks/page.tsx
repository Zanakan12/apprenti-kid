'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface Enfant {
  id: number
  nom: string
  avatar: string
  points: number
}

export default function ChoisirEnfant() {
  const [enfants, setEnfants] = useState<Enfant[]>([])
  const router = useRouter()

  useEffect(() => {
    const fetchEnfants = async () => {
      const res = await fetch('/api/enfants/classement')
      const data = await res.json()
      setEnfants(data)
    }
    fetchEnfants()
  }, [])

  const choisir = (id: number) => {
    localStorage.setItem('enfantId', id.toString())
    router.push('/')
  }

  return (
    <main className="min-h-screen flex flex-col items-center bg-yellow-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Qui va jouer ?</h1>

      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        {enfants.map((e) => (
          <button
            key={e.id}
            onClick={() => choisir(e.id)}
            className="bg-white rounded-xl p-4 flex flex-col items-center shadow hover:bg-blue-100 transition"
          >
            <div className="text-5xl mb-2">{e.avatar}</div>
            <div className="font-bold">{e.nom}</div>
            <div className="text-sm text-gray-500">{e.points} 🪙</div>
          </button>
        ))}
      </div>
    </main>
  )
}
