import { Fragment } from "react"

//Los props se definen como argumentos, se pone como props
export default function FirstComponent(props) {

    console.log(props, typeof props);
    return (
        //Props.title te devuelve el valor de la prop en app.js
        <Fragment>
            {/* Props.title te devuelve el valor de la prop en app.js */}
            <h3>{props.src}</h3>
            <small>16 de agosto de 2025</small>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit quisquam magni eveniet facilis consequatur ratione cumque voluptatem nobis ducimus quia?</p>
            <button>Click me!!!!!!!!!!</button>
        </Fragment>
    )
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