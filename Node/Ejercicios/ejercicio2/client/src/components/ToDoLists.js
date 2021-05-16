import { API_URL } from "../settings";

export default function ToDoLists({ toDoList }) {

    const deleteToDo = (id) => {
        fetch(API_URL + id, {
            method: "DELETE",
            body: JSON.stringify({"active": false}),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json())
        .then(json => console.log(json));
    }

    const toggleEffect = (e, id, completed) => {

        //If para poder eliminar el botón ya que si no prima el 
        //click del li
        if(e.target.tagName !== "BUTTON") {
            fetch(API_URL + id, {
                method: "PUT",
                body: JSON.stringify({"completed": !completed}),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            .then(response => response.json())
            .then(json => console.log(json));
        }
    }
   
    return (
        <ul className="list-group text-left">
            {toDoList?.map((thing, index) => thing.active &&
                <li className={thing.completed? "list-group-item list-group-item-secondary" : "list-group-item"} 
                    onClick={e => toggleEffect(e, thing._id, thing.completed)}
                    key={thing._id}>To Do {index}: {thing.title}{thing.completed}
                        <button id={thing.title} 
                        onClick={() => deleteToDo(thing._id)}
                        className="btn btn-danger float-right">X</button>
                </li>
            )}  
            
        </ul>
    )
}

