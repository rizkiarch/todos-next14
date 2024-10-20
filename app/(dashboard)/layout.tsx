import NewTodoForm from "@/components/NewTodoForm";

export default function DashboardLayout({children}){
    return (
        <>
        <h1>
            Dashboard
        </h1>
        <div>
            <NewTodoForm />
        </div>
        <div>
            {children}
        </div>
        </>
    )
}