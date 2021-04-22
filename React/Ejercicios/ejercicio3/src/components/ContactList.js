import React from 'react'


export default function ContactList(props) {

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
                        <li className="list-group-item"><button type="button" class="btn btn-warning">Eliminar</button></li>
                    </ul>
                }
                    )
                }
            
        </div>
    )
}
