import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
  const classement = await prisma.enfant.findMany({
    orderBy: { points: 'desc' },
    select: {
      id: true,
      nom: true,
      avatar: true,
      points: true,
    },
  })

  return NextResponse.json(classement)
}
