import { AddTaskForm } from "../../components/forms/addTask";
import { Footer } from "../../components/forms/comoon/footer";
import { Header } from "../../components/forms/comoon/header";

const AddTaskPage = () => {
    return(
        <>
        <Header/>
        <h1>Agregar nueva tarea</h1>
        <AddTaskForm />
        <Footer />
        </>
    )
}

export {
     AddTaskPage
};