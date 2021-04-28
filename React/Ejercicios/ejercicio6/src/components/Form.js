import { useState, useContext } from 'react';
import { GlobalContext } from "../App";


export default function Form() {

    const {setContacts} = useContext(GlobalContext);

    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");
    const [cp, setCp] = useState("");
    const [ciudad, setCiudad] = useState("");

    function handleNombre(e) {
        setNombre(e.target.value);
    };
    function handleApellidos(e) {
        setApellidos(e.target.value);
    };
    function handleTelefono(e) {
        setTelefono(e.target.value);
    };
    function handleDireccion(e) {
        setDireccion(e.target.value);
    };
    function handleCp(e) {
        setCp(e.target.value);
    };
    function handleCiudad(e) {
        setCiudad(e.target.value);
    };

    function submit(e) {
        e.preventDefault();

         // const newContact = {
        //     nombre: nombre,
        //     apellidos: apellidos,
        //     direccion: direccion,
        //     cp: cp,
        //     ciudad: ciudad,
        //     telefono: telefono
        // };


        //Cuando la propiedad del objeto tiene el mismo nombre que una variable nuestra
        const newContact = {nombre, apellidos, direccion, cp, ciudad, telefono};


        //setContacts([...contacts, newContact]) // Necesitaría recibir contacts


        setContacts(currentContacts => [...currentContacts, newContact]);
        //La función recibe el array actual y va a devolver la copia del array
        //con el contacto nuevo, es decir, el nuevo array.


        setNombre("");
        setApellidos("");
        setDireccion("");
        setCp("");
        setCiudad("");
        setTelefono("");
    }

    


    return (
        <div>
            {/* El evento del submit siempre en el formulario */}
            <form className="form-group" onSubmit={submit}>
            <input type="text" value={nombre} onChange={handleNombre} className="form-control m-3" placeholder="Introduce un nombre" />
            <input type="text" value={apellidos} onChange={handleApellidos} className="form-control m-3" placeholder="Introduce los apellidos" />
            <input type="text" value={telefono} onChange={handleTelefono} className="form-control m-3" placeholder="Introduce el teléfono" />
            <input type="text" value={direccion} onChange={handleDireccion} className="form-control m-3" placeholder="Introduce la dirección" />
            <input type="text" value={cp} onChange={handleCp} className="form-control m-3" placeholder="Introduce el código postal" />
            <input type="text" value={ciudad} onChange={handleCiudad} className="form-control m-3" placeholder="Introduce la ciudad" />
            <input type="submit" className="btn btn-success" value="Registrar"/>
            </form>
            
        </div>
    )
}
