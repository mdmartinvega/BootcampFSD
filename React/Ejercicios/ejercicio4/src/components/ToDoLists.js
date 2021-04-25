import React from 'react'

export default function ToDoLists(props) {

    const deleteToDo = (e) => {
        //Pasamos a setContacts
        //(la función que modifica el estado) una variable.
        props.setToDoList(toDoList => toDoList.filter(toDo => toDo.title !== e.target.id));
    }


//     const toggleEffect = (e) => {
// (e.target.completed) = true {
//                 false;
//             } else {
//                 return true;
//                         }
//         } 
        
    return (
        <div className="text-left">
            {
            props.toDoList.map((thing, index) => {
                return <ul className="list-group">
                    <li id={thing.title} className={thing.completed?"list-group-item list-group-item-secondary" : "list-group-item"} onClick={deleteToDo}>{thing.userId}: {thing.title}{thing.completed}<button className="btn btn-danger float-right">x</button></li>
                </ul>
            })
            
            }  
            
        </div>
    )
}

