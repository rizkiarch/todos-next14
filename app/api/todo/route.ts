import db from '@/utils/db'
import { NextResponse } from "next/server"

export const GET = async (request: Request) => {
    const data = await db.todo.findMany()
    return NextResponse.json({ message: data })
}

export const POST = async (request: Request) => {
    const data = await request.json()
    const todo = await db.todo.create({ data })
    return NextResponse.json({ message: todo })
}