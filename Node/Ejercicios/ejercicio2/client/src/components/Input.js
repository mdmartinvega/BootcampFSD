import { API_URL } from "../settings";
import {useState} from 'react';

export default function Input() {

    const[input, setInput] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        fetch(API_URL, {
            method: "POST",
            body: JSON.stringify({"title": input}),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json())
        .then(json => console.log(json));

        setInput("");
    }

    return (
        <form onSubmit = {handleSubmit} className="my-4 mx-4">
            <input type="text"
            placeholder="Introduce a new task"
            className="form-control"
            onChange={e => setInput(e.target.value)}
            //Siempre en los formularios
            value={input} /> 
        </form>
    )
}
