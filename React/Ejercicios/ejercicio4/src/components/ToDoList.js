import React from 'react'

export default function ToDoList(props) {

    const toggleEffect = () => {
        console.log("Click");
    }

    return (
        <div>
            {
            props.toDoList.map((thing, index) => {
                return <ul>
                    <li onClick={toggleEffect}>{thing.userId}: {thing.title}</li>
                </ul>
            })
            }
            
        </div>
    )
}
