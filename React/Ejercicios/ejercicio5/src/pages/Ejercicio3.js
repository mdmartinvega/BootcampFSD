// import '../App.css';
import ContactList from '../components/ContactList';
import Form from '../components/Form'
import { useState } from "react";



//  function App(props) {
//    const [contacts, setContacts] = useState([
//          {nombre: "Laura", apellidos: "Martín Vega", direccion: "Hortaleza 25", ciudad: "Madrid", cp: 28005, telefono: 623123456},
//          {nombre: "Victor", apellidos: "Montoya Lopez", direccion: "Gran Vía 2", ciudad: "Barcelona", cp: 80080, telefono: 689587145},
//          {nombre: "Cristina", apellidos: "Garcia Perez", direccion: "Carreteria 5", ciudad: "Málaga", cp: 29012, telefono: 689478562}
//      ]

// )

function Ejercicio3() {

  const initialState =  [
        {id: 0, nombre: "Laura", apellidos: "Martín Vega", direccion: "Hortaleza 25", ciudad: "Madrid", cp: 28005, telefono: "623123456"},
        {id: 1, nombre: "Victor", apellidos: "Montoya Lopez", direccion: "Gran Vía 2", ciudad: "Barcelona", cp: 80080, telefono: "689587145"},
        {id: 2, nombre: "Cristina", apellidos: "Garcia Perez", direccion: "Carreteria 5", ciudad: "Málaga", cp: 29012, telefono: "689478562"}
    ]

  const [contacts, setContacts] = useState(initialState);

  return (
    <div className="container">
      <h3 className="mt-5 mb-5 h3">Lista de contactos</h3>
      <ContactList contacts={contacts} setContacts={setContacts}
      />
      <h3 className="mt-5 mb-5 h3">Nuevo contacto</h3>

      
      <Form setContacts={setContacts} />
      
      
    </div>
  );
}

export default Ejercicio3;
