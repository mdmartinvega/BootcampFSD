import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Records(props) {

    const [userData, setUserData] = useState({});

    // Recibe propiedad del usuario
    const {user} = useParams(); //useParams Devuelve un objeto con los parámetros recibidos por URL
    console.log(useParams());

    const USERS_URL = "https://reqres.in/api/users/";

    useEffect(() => {
        fetch(`${USERS_URL}${user}`)
        .then(response => response.json())
        .then(data => setUserData(data))
    }, [user]); //Metemos user en la lista de dependencia 
    //para que el usuario se actualice cada vez que se renderice
    
    return (
        <div>
            {/* Forma larga no usada */}
            {/* Record {props.match.params.user} */} 
            <h2>
                Record of {user}
            </h2>
            <ul>
                {/* ? para protegernos del error de la propiedad de indefinido */}
                <li>{userData.data?.email}</li>
                <li>{userData.data?.first_name}</li>
                <li>{userData.data?.last_name}</li>
                <img src={userData.data?.avatar} alt="Profile"/>
            </ul>
        </div>
    )
}
