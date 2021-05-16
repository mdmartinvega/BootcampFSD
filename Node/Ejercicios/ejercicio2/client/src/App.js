import { useState, useEffect } from 'react';
import './App.css';
import ToDoLists from './components/ToDoLists';
import Input from './components/Input';

function App() {

  const URL = "http://localhost:3001/toDoLists/";

  const initialState = [];
  const [toDoList, setToDoList] = useState(initialState);

  //El fetch lo metemos en el useEffect para que solo nostraiga datos
  //la primera vez
  useEffect(() => {
   fetch(URL)
    .then(response => response.json())
    .then(data => setToDoList(data.toDoLists));
  }, []);
  
  return (
    <div className="App">
    <h3 className="mt-4 mb-4">To-Do List</h3>
    <Input setToDoList = {setToDoList}/>
    <ToDoLists toDoList = {toDoList} setToDoList = {setToDoList}/>

    </div>
  );
}

export default App;
