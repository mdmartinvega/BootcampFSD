
import './App.css';
import Router from './Router';
import { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext();

export default function App() {

  const initialState =  [
    {id: 0, nombre: "Laura", apellidos: "Martín Vega", direccion: "Hortaleza 25", ciudad: "Madrid", cp: 28005, telefono: "623123456"},
    {id: 1, nombre: "Victor", apellidos: "Montoya Lopez", direccion: "Gran Vía 2", ciudad: "Barcelona", cp: 80080, telefono: "689587145"},
    {id: 2, nombre: "Cristina", apellidos: "Garcia Perez", direccion: "Carreteria 5", ciudad: "Málaga", cp: 29012, telefono: "689478562"}
]
  const [contacts, setContacts] = useState(initialState);

  const URL = "https://raw.githubusercontent.com/BC-FSWD/todo-list/master/todo-list.json";

  const initialStateTwo = [];
  const [toDoList, setToDoList] = useState(initialStateTwo);

  //El fetch lo metemos en el useEffect para que solo nostraiga datos
  //la primera vez
  useEffect(() => {
   fetch(URL)
    .then(response => response.json())
    .then(data => setToDoList(data.splice(0, 20)));
  }, []);

  return (
    <div className="App">
      <nav>
      <GlobalContext.Provider value={{contacts, setContacts, toDoList, setToDoList}}>
      <Router />
      </GlobalContext.Provider>
      </nav>
    </div>
  );
}


