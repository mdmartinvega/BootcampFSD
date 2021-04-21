import React from 'react'


export default function ContactList(props) {

    return (
        <div className="row align-items-start d-flex justify-content-around">
            {
                props.data.map(contact => {

                    return <ul key={contact.id} className="list-group w-25">
                        <li className="list-group-item active h6" aria-current="true">Contacto {contact.id}</li>
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
