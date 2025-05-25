import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  const data = await req.json()

  const enfant = await prisma.enfant.create({
    data: {
      nom: data.nom,
      avatar: data.avatar || '',
    },
  })

  return NextResponse.json(enfant)
}
