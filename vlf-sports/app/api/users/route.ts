import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET - Obtener todos los usuarios
export async function GET() {
  try {
    const users = await prisma.user.findMany({
      include: {
        playerRankings: true,
        pairsAsPlayer1: {
          include: {
            player2: true
          }
        },
        pairsAsPlayer2: {
          include: {
            player1: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json({
      success: true,
      data: users,
      count: users.length
    })
  } catch (error) {
    console.error('Error fetching users:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error al obtener usuarios' 
      },
      { status: 500 }
    )
  }
}

// POST - Crear nuevo usuario
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name, level } = body

    // Validación básica
    if (!email || !name || !level) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Email, nombre y nivel son requeridos' 
        },
        { status: 400 }
      )
    }

    // Verificar si el email ya existe
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'El email ya está registrado' 
        },
        { status: 409 }
      )
    }

    const user = await prisma.user.create({
      data: {
        email,
        name,
        level
      }
    })

    return NextResponse.json({
      success: true,
      data: user,
      message: 'Usuario creado exitosamente'
    })
  } catch (error) {
    console.error('Error creating user:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error al crear usuario' 
      },
      { status: 500 }
    )
  }
} 