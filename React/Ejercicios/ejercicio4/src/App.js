import { useState, useEffect } from 'react';
import './App.css';
import ToDoLists from './components/ToDoLists';

function App() {

  const URL = "https://raw.githubusercontent.com/BC-FSWD/todo-list/master/todo-list.json";

  const initialState = [];
  const [toDoList, setToDoList] = useState(initialState);

  useEffect(() => {
   fetch(URL)
    .then(response => response.json())
    .then(data => setToDoList(data.splice(0, 20)));
  }, []);
  




  return (
    <div className="App">
    <h3 className="mt-4 mb-4">To-Do List</h3>
    <ToDoLists toDoList = {toDoList} setToDoList = {setToDoList}/>
    
    </div>
  );
}

export default App;
