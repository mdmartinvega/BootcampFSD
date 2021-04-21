import { useState } from 'react'

export default function Counter() {
    // const state = useState(0); //El 0 es el valor inicial

    // const count = state[0];
    // const setCount = state[1];

    const [count, setCount] = useState(0);

    const handleClick = function (evento) {
        count < 10 && setCount(count + 1);
    }

    return (
        <div>
            <p>Has hecho click {count} veces</p>
            <button onClick={handleClick}>Clickea y suma!</button>
            <button onClick={() => count > 0 && setCount(count - 1)}>Clickea y resta!</button>
            <button onClick={function () {setCount(0)}}>Ponme a 0!</button>
        </div>
    )
}
