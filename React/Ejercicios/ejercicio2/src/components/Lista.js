import React from 'react'

export default function Lista(props) {
    return (
        <div>
            <h1>{props.category}</h1>
            <ul>
                {
                    props.products.map(product => {
                        return <li key={product.id}>{product.producto} precio: {product.precio}</li>
                    })
                }
            </ul>
        </div>
    );
}
