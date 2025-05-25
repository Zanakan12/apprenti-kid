'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const parties = [
  { nom: 'Tête', emoji: '🧠', zone: 'top-[10%] left-[45%]' },
  { nom: 'Yeux', emoji: '👀', zone: 'top-[15%] left-[46%]' },
  { nom: 'Oreilles', emoji: '👂', zone: 'top-[18%] left-[40%]' },
  { nom: 'Nez', emoji: '👃', zone: 'top-[18%] left-[49%]' },
  { nom: 'Bouche', emoji: '👄', zone: 'top-[22%] left-[47%]' },
  { nom: 'Bras', emoji: '💪', zone: 'top-[35%] left-[25%]' },
  { nom: 'Mains', emoji: '👐', zone: 'top-[60%] left-[15%]' },
  { nom: 'Ventre', emoji: '🧍‍♂️', zone: 'top-[45%] left-[47%]' },
  { nom: 'Jambes', emoji: '🦵', zone: 'top-[65%] left-[45%]' },
  { nom: 'Pieds', emoji: '🦶', zone: 'top-[85%] left-[45%]' },
]

export default function Corps() {
  const [index, setIndex] = useState(0)
  const [points, setPoints] = useState(0)
  const router = useRouter()

  const { nom, emoji, zone } = parties[index]

  useEffect(() => {
    const saved = localStorage.getItem('points')
    if (saved) setPoints(Number(saved))
  }, [])

  const jouerSon = () => {
    const audio = new SpeechSynthesisUtterance(nom)
    audio.lang = 'fr-FR'
    speechSynthesis.speak(audio)
  }

  const suivant = () => {
    const newPoints = points + 1
    setPoints(newPoints)
    localStorage.setItem('points', newPoints.toString())

    if (index < parties.length - 1) {
      setIndex(index + 1)
    } else {
      alert('Bravo ! Tu connais ton corps 🎉')
      router.push('/')
    }
  }

  return (
    <main className="min-h-screen bg-blue-50 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">🧍‍♂️ Apprenons les parties du corps</h1>

      {/* Zone interactive */}
      <div className="relative w-[300px] h-[600px] mb-6">
        <img src="/images/silhouette.png" alt="corps humain cartoon" className="w-full h-full" />
        <div
          className={`absolute ${zone} w-10 h-10 bg-yellow-300 opacity-70 rounded-full animate-ping`}
        ></div>
      </div>

      <div className="text-4xl mb-2">{emoji}</div>
      <div className="text-xl mb-4 font-semibold">{nom}</div>

      <button
        onClick={jouerSon}
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full mb-3"
      >
        🔊 Écouter
      </button>

      <button
        onClick={suivant}
        className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full"
      >
        ✅ Suivant
      </button>

      <div className="mt-6 bg-white px-4 py-2 rounded-full shadow text-lg">
        🪙 Points : {points}
      </div>
    </main>
  )
}
