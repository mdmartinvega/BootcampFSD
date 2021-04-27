export default function Lista(props) {
    return (
        <div>
            <h1>{props.category}</h1>
            <ul>
                {
                    props.products.map(product => {
                        return <li key={product.id}>{product.id} {product.producto} Precio: {product.precio}</li>
                        
                    })
                    
                }
               
            </ul>
        </div>
    );
}
