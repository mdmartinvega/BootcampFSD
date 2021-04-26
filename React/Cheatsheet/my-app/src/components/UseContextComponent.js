import { useContext } from 'react'
import { GlobalContext } from '../App'

export default function UseContextComponent() {

    const msg = useContext(GlobalContext);

    return (
        <div>

            <h1>
                {msg}
            </h1>
            
        </div>
    )
}
