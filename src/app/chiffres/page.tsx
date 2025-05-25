'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const chiffres = [
  { nombre: 1, mot: 'Un', emoji: '🍎' },
  { nombre: 2, mot: 'Deux', emoji: '🐱' },
  { nombre: 3, mot: 'Trois', emoji: '🚗' },
  { nombre: 4, mot: 'Quatre', emoji: '🐶' },
  { nombre: 5, mot: 'Cinq', emoji: '⭐' },
  { nombre: 6, mot: 'Six', emoji: '🎈' },
  { nombre: 7, mot: 'Sept', emoji: '🧸' },
  { nombre: 8, mot: 'Huit', emoji: '🍪' },
  { nombre: 9, mot: 'Neuf', emoji: '🦋' },
  { nombre: 10, mot: 'Dix', emoji: '🧁' }
]

export default function Chiffres() {
  const [index, setIndex] = useState(0)
  const [points, setPoints] = useState(0)
  const router = useRouter()

  const { nombre, mot, emoji } = chiffres[index]

  useEffect(() => {
    const saved = localStorage.getItem('points')
    if (saved) setPoints(Number(saved))
  }, [])

  const jouerSon = () => {
    const audio = new SpeechSynthesisUtterance(mot)
    audio.lang = 'fr-FR'
    speechSynthesis.speak(audio)
  }

  const suivant = () => {
    const newPoints = points + 1
    setPoints(newPoints)
    localStorage.setItem('points', newPoints.toString())

    if (index < chiffres.length - 1) {
      setIndex(index + 1)
    } else {
      alert('Bravo ! Tu sais compter jusqu’à 10 🎉')
      router.push('/')
    }
  }

  return (
    <main className="min-h-screen bg-yellow-100 flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-3xl font-bold mb-4">🔢 Apprenons les chiffres</h1>

      {/* Le chiffre */}
      <div className="text-8xl font-bold text-red-600 mb-2">{nombre}</div>

      {/* Quantité visuelle */}
      <div className="text-4xl mb-4">
        {Array(nombre).fill(emoji).join(' ')}
      </div>

      {/* Nom du chiffre */}
      <div className="text-xl font-semibold text-gray-800 mb-4">{mot}</div>

      {/* Écouter */}
      <button
        onClick={jouerSon}
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full mb-4"
      >
        🔊 Écouter
      </button>

      {/* Suivant */}
      <button
        onClick={suivant}
        className="bg-orange-400 hover:bg-orange-500 text-black px-6 py-3 rounded-full"
      >
        ✅ Chiffre suivant
      </button>

      {/* Points */}
      <div className="mt-6 bg-white px-4 py-2 rounded-full shadow text-lg">
        🪙 Points : {points}
      </div>
    </main>
  )
}
