import { useForm } from "../hooks/useForm";
import { LOGIN_URL } from "../config/config";
import { useAuthContext } from '../contexts/AuthContext';
import { useHistory } from "react-router-dom";

export default function Login() {

    const formInitialState = {email: "", password:""};
    const [form, handleChange] = useForm(formInitialState);

    const {logIn} = useAuthContext();
    const history = useHistory()
;    
    const handleSubmit = async e => {
        e.preventDefault();

        const options = {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(form)
        }
        
        //Usamos await cuando van a ser muchísimas líneas
        const response = await fetch(LOGIN_URL, options); //Se puede utilizar fetch().then().then()
        const data = await response.json();

        if(response.status === 200) {
            logIn(data.token, data.user);
            history.push("/dashboard");
        } else {
            alert("Credenciales incorrectas");
        }
    };


    return (
        <div className="d-flex justify-content-center pt-5">
            <form onSubmit={handleSubmit} className="form-group w-50 bg-dark p-5 rounded">
                <h3 className="text-light">Log in!</h3>
                <input onChange={handleChange} value={form.email} name="email" type="email" className="form-control mb-3" placeholder="Introduce tu email" />
                <input onChange={handleChange} value={form.password} name="password" type="password" className="form-control mb-3" placeholder="**********" />
                <input type="submit" value="Iniciar sesión" className="btn btn-success" />
            </form>
        </div>
    )
}
