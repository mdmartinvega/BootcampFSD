import { useState, useEffect } from 'react';
import './App.css';
import ToDoLists from './components/ToDoLists';
import Input from './components/Input';
import { API_URL } from "./settings";

function App() {

  const initialState = [];
  const [toDoList, setToDoList] = useState(initialState);

  //El fetch lo metemos en el useEffect para que solo nostraiga datos
  //la primera vez
  useEffect(() => {
   fetch(API_URL)
    .then(response => response.json())
    .then(data => setToDoList(data.toDoLists));
  }, [toDoList]);

  return (
    <div className="App">
    <h3 className="mt-4 mb-4">To-Do List</h3>
    <Input />
    <ToDoLists toDoList = {toDoList}/>

    </div>
  );
}

export default App;
