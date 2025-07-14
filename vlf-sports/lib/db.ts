import { Pool, PoolClient } from 'pg'

// Configuración del pool de conexiones
const pool = new Pool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  max: 20, // máximo número de conexiones en el pool
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

// Función para ejecutar consultas
export async function query(text: string, params?: any[]) {
  const start = Date.now()
  const res = await pool.query(text, params)
  const duration = Date.now() - start
  
  if (process.env.NODE_ENV === 'development') {
    console.log('Executed query', { text, duration, rows: res.rowCount })
  }
  
  return res
}

// Función para obtener un cliente del pool
export async function getClient(): Promise<PoolClient> {
  const client = await pool.connect()
  return client
}

// Función para cerrar el pool (útil para tests o shutdown)
export async function end() {
  await pool.end()
}

// Tipos para TypeScript
export interface DatabaseResult<T = any> {
  rows: T[]
  rowCount: number
  command: string
}

// Función helper para consultas con tipado
export async function queryTyped<T = any>(
  text: string, 
  params?: any[]
): Promise<DatabaseResult<T>> {
  return await query(text, params) as DatabaseResult<T>
} 