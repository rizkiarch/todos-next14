import TodoList from '@/components/TodoList';
import db from '@/utils/db';

const getData = async () => {
    await new Promise((resolve, reject) => setTimeout(()=> resolve(), 2000));

    const todos  = await db.todo.findMany({})
    return todos;
}

export default async function TodosPage() {
    const todos = await getData();
    console.log(todos);
    
    return (
        <>
        <div>
            <TodoList todos={todos} />
        </div>
        </>
    )
}