'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const alphabet = [
  { lettre: 'A', mot: 'Arbre', emoji: '🌳' },
  { lettre: 'B', mot: 'Ballon', emoji: '⚽' },
  { lettre: 'C', mot: 'Chat', emoji: '🐱' },
  { lettre: 'D', mot: 'Dauphin', emoji: '🐬' },
  { lettre: 'E', mot: 'Étoile', emoji: '⭐' },
  { lettre: 'F', mot: 'Fleur', emoji: '🌸' },
  { lettre: 'G', mot: 'Gâteau', emoji: '🎂' },
  { lettre: 'H', mot: 'Hérisson', emoji: '🦔' },
  { lettre: 'I', mot: 'Igloo', emoji: '🧊' },
  { lettre: 'J', mot: 'Jungle', emoji: '🌴' },
  { lettre: 'K', mot: 'Koala', emoji: '🐨' },
  { lettre: 'L', mot: 'Lion', emoji: '🦁' },
  { lettre: 'M', mot: 'Maison', emoji: '🏠' },
  { lettre: 'N', mot: 'Nuage', emoji: '☁️' },
  { lettre: 'O', mot: 'Orange', emoji: '🍊' },
  { lettre: 'P', mot: 'Papillon', emoji: '🦋' },
  { lettre: 'Q', mot: 'Quatre', emoji: '4️⃣' },
  { lettre: 'R', mot: 'Robot', emoji: '🤖' },
  { lettre: 'S', mot: 'Soleil', emoji: '☀️' },
  { lettre: 'T', mot: 'Tigre', emoji: '🐯' },
  { lettre: 'U', mot: 'Uniforme', emoji: '👕' },
  { lettre: 'V', mot: 'Voiture', emoji: '🚗' },
  { lettre: 'W', mot: 'Wagon', emoji: '🚃' },
  { lettre: 'X', mot: 'Xylophone', emoji: '🎼' },
  { lettre: 'Y', mot: 'Yaourt', emoji: '🍦' },
  { lettre: 'Z', mot: 'Zèbre', emoji: '🦓' }
]


export default function Lettres() {
  const [index, setIndex] = useState(0)
  const [points, setPoints] = useState(0)
  const router = useRouter()

  const { lettre, mot, emoji } = alphabet[index]

  useEffect(() => {
    const saved = localStorage.getItem('points')
    if (saved) setPoints(Number(saved))
  }, [])

  const jouerSon = () => {
    const audio = new Audio(`/audio/${lettre}.mp3`)
    audio.play()
  }

  const suivant = () => {
    const newPoints = points + 1
    setPoints(newPoints)
    localStorage.setItem('points', newPoints.toString())

    if (index < alphabet.length - 1) {
      setIndex(index + 1)
    } else {
      alert('Bravo ! Tu as fini toutes les lettres 🎉')
      router.push('/')
    }
  }

  return (
    <main className="min-h-screen bg-pink-100 flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-3xl font-bold mb-4">📚 Apprenons les lettres</h1>

      {/* Image */}
      <img
        src={`/images/${lettre}.png`}
        alt={mot}
        className="w-40 h-40 object-contain mb-4"
      />

      {/* Lettre */}
      <div className="text-8xl font-bold text-blue-600 mb-2">{lettre}</div>

      {/* Phrase */}
      <div className="text-xl font-semibold text-gray-700 mb-4">
        {lettre} comme {mot} {emoji}
      </div>

      {/* Bouton son */}
      <button
        onClick={jouerSon}
        className="bg-green-400 hover:bg-green-500 text-white px-6 py-3 rounded-full text-xl shadow mb-4"
      >
        🔊 Écouter
      </button>

      {/* Suivant */}
      <button
        onClick={suivant}
        className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full text-xl shadow"
      >
        ✅ Lettre suivante
      </button>

      {/* Points */}
      <div className="mt-6 bg-white px-4 py-2 rounded-full shadow text-lg">
        🪙 Points : {points}
      </div>
    </main>
  )
}
