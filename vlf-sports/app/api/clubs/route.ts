import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET - Obtener todos los clubes
export async function GET() {
  try {
    const clubs = await prisma.club.findMany({
      include: {
        tournaments: true,
        _count: {
          select: {
            tournaments: true
          }
        }
      },
      orderBy: {
        rating: 'desc'
      }
    })

    return NextResponse.json({
      success: true,
      data: clubs,
      count: clubs.length
    })
  } catch (error) {
    console.error('Error fetching clubs:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error al obtener clubes' 
      },
      { status: 500 }
    )
  }
}

// POST - Crear nuevo club
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, location, courts, rating, members, facilities, type } = body

    // Validación básica
    if (!name || !location || !courts || !type) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Nombre, ubicación, número de canchas y tipo son requeridos' 
        },
        { status: 400 }
      )
    }

    const club = await prisma.club.create({
      data: {
        name,
        location,
        courts: parseInt(courts),
        rating: rating ? parseFloat(rating) : 0,
        members: members ? parseInt(members) : 0,
        facilities: facilities || [],
        type
      }
    })

    return NextResponse.json({
      success: true,
      data: club,
      message: 'Club creado exitosamente'
    })
  } catch (error) {
    console.error('Error creating club:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error al crear club' 
      },
      { status: 500 }
    )
  }
} 