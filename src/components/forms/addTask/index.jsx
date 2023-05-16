import { useState } from "react"

const AddTaskForm = ({onSubmit}) => {

    const [fields, setFields] = useState({
        title:"",
        description:"",
        category:"",
        asignedUser:"",
        owner:""
    })
    
    const handleSubmit = () =>{
        onSubmit(fields);
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Titulo</label>
                <label htmlFor="text" name="title" value={fields.title} 
                onChange={(e) => setFields( (prevState) =>   ({...prevState, title: e.target.value }))
                
                }>

                </label>
            </div>
            <div>
                <label htmlFor="">Descripcion</label>
                <label htmlFor="text" name="description" value={fields.description} onChange={(e) => setFields( (prevState) =>   ({...prevState, description: e.target.value }))}></label>
            </div>
            <div>
                <label htmlFor="">Categoria</label>
                <label htmlFor="text" name="category" value={fields.category} onChange={(e) => setFields( (prevState) =>   ({...prevState, category: e.target.value }))} ></label>
            </div>
            <div>
                <label htmlFor="">Responsable</label>
                <label htmlFor="text" name="asignedUser" value={fields.asignedUser} onChange={(e) => setFields( (prevState) =>   ({...prevState, asignedUser: e.target.value }))}></label>
            </div>
            <div>
                <label htmlFor="">Creador</label>
                <label htmlFor="text" name="owner" value={fields.owner} onChange={(e) => setFields( (prevState) =>   ({...prevState, owner: e.target.value }))}></label>
            </div>
            <button type="submit"> Crear tareas</button>
        </form> 
    );
};

export {
    AddTaskForm
};