import { useEffect, useState } from 'react';

export default function UseEffectComponent() {

    const [count, setCount] = useState(0);

    console.log("Me ejecuto cada vez que cambia el componente");
    
    useEffect(() => {
        console.log("Acabo de montarme");//Sólo se ejecuta la primera vez

        return function() {
            console.log("Me desmonto") //Use funciona de manera que cuando se desmonta
            //el componente se libera la función
        } ;
    }, [])

    useEffect(() => {
        document.title = count;
    }, [count])

    return (
        <div> 
            <span>{count}</span>
            <button onClick={() => setCount(count+1)}>+</button>
        </div>
    )
}
