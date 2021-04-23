import React from 'react'


export default function ContactList(props) { //Sino ponemos props podemos usar la reestructuración
    //que sería ({contacts, setContacts}) y quitamos props de abajo

     const deleteContact = (e) => {
         //Pasamos a setContacts
         //(la función que modifica el estado) una variable.
         props.setContacts(contacts => contacts.filter(contact => contact.telefono !== e.target.id));
     }

    return (
        <div className="row">
            {
                props.contacts.map((contact, index) => {

                    return <ul key={contact.telefono} className="list-group mb-3 col-6 w-25">
                        <li className="list-group-item active h6" aria-current="true">Contacto {index}</li>
                        <li className="list-group-item">{contact.nombre}</li>
                        <li className="list-group-item">{contact.apellidos}</li>
                        <li className="list-group-item">{contact.telefono}</li>
                        <li className="list-group-item">{contact.direccion}, {contact.cp}, {contact.ciudad}</li>
                        <li className="list-group-item">
                            <button type="button" id={contact.telefono} onClick={deleteContact} className="btn btn-warning">Eliminar</button></li>
                    </ul>
                }
                    )
                }
            
        </div>
    )
}
