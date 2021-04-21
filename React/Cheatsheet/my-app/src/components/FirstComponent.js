import { Fragment } from "react"
import PropTypes from "prop-types";

//Los props se definen como argumentos, se pone como props
export default function FirstComponent(props) {

    console.log(props, typeof props);


    

    const myFunction = function (name){ 
        return (evento) => console.log(name, evento);
        
    }

    const mySimpleFunction = function (event) {
        //process event
        console.log(event);
    }

    return (
        //Props.title te devuelve el valor de la prop en app.js
        <Fragment>
            {/* Props.title te devuelve el valor de la prop en app.js */}
            <h3>{props.title}</h3>
            <small>{props.date}</small>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit quisquam magni eveniet facilis consequatur ratione cumque voluptatem nobis ducimus quia?</p>
            <button onClick={myFunction("Marta")}>Click me!!!!!!!!!!</button>
            {/* Forma fácil */}
            <button onClick={mySimpleFunction}>Eliminar botón</button>
            {/* <button onClick={() => event => console.log(1, event)}>Gestión inline</button> */}
        </Fragment>
    )
}

//Valores por defecto
FirstComponent.defaultProps = {
    title: "Sin título",
    date: "Sin fecha",
    products: [] //Sobre todo usamos esto en arrays
}


//Validar propiedades
FirstComponent.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    products: PropTypes.array
}

//Solo se puede inserta un export default por archivo
//Los componentes solo pueden devolver una etiqeta.


//La forma abreviada no necesita import
function SecondComponent(props) {
    console.log(props, typeof props);
    return (
        <>
            <h1>Soy otro componente</h1>
            <p>{props.otherAttr}</p>
        </>
    )
}

function ThirdComponent(props) {
    console.log(props, typeof props);
    return (
        <div>
            <h1>Soy otro componente</h1>
            <p>{props.otherAttr}</p>
        </div>
    )
    
}

export {SecondComponent, ThirdComponent};