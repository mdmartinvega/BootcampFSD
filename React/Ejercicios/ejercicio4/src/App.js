import { useState } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';

function App() {

  const initialState = [
    {userId: 0, title:"Hacer los deberes de React", completed: true},
    {userId: 1, title:"Comprar masa para pizza", completed: false},
    {userId: 2, title:"Sacar a Luna de paseo", completed: false}
  ]

  const [toDoList, setToDoLists] = useState(initialState);

  const url = "https://raw.githubusercontent.com/BC-FSWD/todo-list/master/todo-list.json";


  return (
    <div className="App">
    <h3>To-Do List</h3>
    <ToDoList toDoList = {toDoList}/>
    
    </div>
  );
}

export default App;
