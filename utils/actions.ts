'use server'

import { revalidatePath } from 'next/cache'
import db from './db'

// export const newTodo = async (data: FormData) => {
//     const newTodo = data.get('todo') as string

//     if (newTodo) {
//         await db.todo.create({
//             data: {
//                 content: newTodo,
//             },
//         })
//         revalidatePath('/todos')
//     }
// }

export const newTodo = async (formData) => {
    const todo = await db.todo.create({
        data: {
            content: formData.get('content')
        }
    })

    revalidatePath('/todos')
}

export const completeTodo = async (id) => {
    await db.todo.update({
        where: { id },
        data: { completed: true }
    })

    revalidatePath('/todos')
}