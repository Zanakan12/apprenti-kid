'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [points, setPoints] = useState(0)

  useEffect(() => {
    const saved = localStorage.getItem('points')
    if (saved) setPoints(Number(saved))
  }, [])

  return (
      <main className=" flex flex-col items-center py-6">
      {/* Avatar + Points */}
      <div className='border-amber-50 border-2 rounded-xl bg-sky-200 p-7 items-center flex flex-col'>
      <div className="flex items-center justify-between w-11/12 max-w-md mb-4">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-orange-200 rounded-full border-4 border-orange-400 flex items-center justify-center text-3xl">
            👦
          </div>
        </div>
        <div className="bg-yellow-300 px-4 py-2 rounded-full shadow text-xl font-bold flex items-center gap-2">
          🪙 {points}
        </div>
      </div>

      {/* Bouton JOUER */}
      <button className="bg-green-500 hover:bg-green-600 text-white text-2xl font-bold px-10 py-4 rounded-full shadow mb-6">
        JOUER
      </button>

      {/* Grille des modules */}
      <div className="grid grid-cols-2 gap-6 w-11/12 max-w-md">
        <Link href="/lettres">
          <div className="bg-yellow-300 rounded-xl p-6 shadow hover:scale-105 transition cursor-pointer text-center">
            <div className="text-4xl">🔤</div>
            <div className="mt-2 font-semibold text-lg">Lettres</div>
          </div>
        </Link>
        <Link href="/chiffres">
          <div className="bg-red-300 rounded-xl p-6 shadow hover:scale-105 transition cursor-pointer text-center">
            <div className="text-4xl">🔢</div>
            <div className="mt-2 font-semibold text-lg">Chiffres</div>
          </div>
        </Link>
        <Link href="/formes">
          <div className="bg-blue-300 rounded-xl p-6 shadow hover:scale-105 transition cursor-pointer text-center">
            <div className="text-4xl">🟠</div>
            <div className="mt-2 font-semibold text-lg">Formes</div>
          </div>
        </Link>
        <Link href="/corps">
          <div className="bg-purple-300 rounded-xl p-6 shadow hover:scale-105 transition cursor-pointer text-center">
            <div className="text-4xl">🧍</div>
            <div className="mt-2 font-semibold text-lg">Corps</div>
          </div>
        </Link>
      </div>
      </div>
    </main>
    
    
  )
}
