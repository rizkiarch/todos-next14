import {newTodo} from "@/utils/actions";

export default function NewTodoForm() {
    return(
        <>
            <div>
                <form action={newTodo} >
                    <input type="text" name="content" className="border border-black/25" placeholder="Enter a new todo" />
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        </>
    )
}