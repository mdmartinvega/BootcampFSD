
import {useState, useContext} from 'react';
import {GlobalContext} from '../App';

export default function Input() {

    const { setToDoList } = useContext(GlobalContext);

    const[input, setInput] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        setToDoList(currentTodos => [{title: input, completed:false}, ...currentTodos]);

        setInput("");
    }
    return (
        <form onSubmit = {handleSubmit} className="my-4 mx-4">
            <input type="text"
            placeholder="Introduce una nueva tarea"
            className="form-control"
            onChange={e => setInput(e.target.value)}
            //Siempre en los formularios
            value={input} /> 

        </form>
    )
}
