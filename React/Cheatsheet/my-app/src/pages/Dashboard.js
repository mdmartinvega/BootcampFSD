import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Dashboard() {

    const [userID, setUserID] = useState(1);
    

    const history = useHistory();

    function handleClick() {
        //Queremos que nos lleve a /record/userID
        
        history.push(`/record/${userID}`);
    }


    return (
        <div>
            Dashboard:

            <input type="text" onChange={e => setUserID(e.target.value)} value={userID}/>
            <button onClick={handleClick}>LLévame al perfil del usuario {userID}</button>
        </div>
    )
}
