'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const formes = [
  { nom: 'Carré', emoji: '⬛', couleur: 'bg-blue-400', style: 'w-32 h-32' },
  { nom: 'Cercle', emoji: '⚪', couleur: 'bg-red-400 rounded-full', style: 'w-32 h-32' },
  { nom: 'Triangle', emoji: '🔺', couleur: '', style: '' }, // Triangle via image ou emoji
  { nom: 'Rectangle', emoji: '⬛', couleur: 'bg-green-400', style: 'w-40 h-24' },
  { nom: 'Étoile', emoji: '⭐', couleur: '', style: '' },
]

export default function Formes() {
  const [index, setIndex] = useState(0)
  const [points, setPoints] = useState(0)
  const router = useRouter()

  const { nom, emoji, couleur, style } = formes[index]

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

    if (index < formes.length - 1) {
      setIndex(index + 1)
    } else {
      alert('Bravo ! Tu connais toutes les formes 🎉')
      router.push('/')
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center bg-green-100 p-4">
      <h1 className="text-2xl font-bold mb-4">🔷 Apprenons les formes</h1>

      {/* Représentation de la forme */}
      <div className={`mb-6 ${couleur} ${style}`}></div>

      {/* Alternative emoji si pas de style */}
      {!style && <div className="text-7xl mb-4">{emoji}</div>}

      <div className="text-xl font-semibold mb-4">{nom}</div>

      <button
        onClick={jouerSon}
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full mb-4"
      >
        🔊 Écouter
      </button>

      <button
        onClick={suivant}
        className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-full text-black"
      >
        ✅ Forme suivante
      </button>

      <div className="mt-6 bg-white px-4 py-2 rounded-full shadow text-lg">
        🪙 Points : {points}
      </div>
    </main>
  )
}
