// import '../App.css';
import ContactList from '../components/ContactList';
import Form from '../components/Form'

export default function Ejercicio3() {
  return (
    <div className="container">
      <h3 className="mt-5 mb-5 h3">Lista de contactos</h3>
      <ContactList/>
      <h3 className="mt-5 mb-5 h3">Nuevo contacto</h3>
      <Form/>
    </div>
  );
}

