
import './App.css';
import Counter from "./components/Counter"
import FirstComponent, {SecondComponent, ThirdComponent} from "./components/FirstComponent"
import UseContextComponent from './components/UseContextComponent';
import {useState, createContext} from 'react'

//Lo añadimos fuera porque es algo que vamos a exportar

export const GlobalContext = createContext();


function App() {

  const [show, setShow] = useState(true);

  return (
    //App es el padre y Components son los hijos
    <div className="App"> 

    {/* Si show es true se ejecuta el componente. Debajo nos lo cambia a 
    false y entonces no entra en componenete hasta la siguiente vuelta
    Efecto toggle 
      {show && <UseEffectComponent />} 

      <button onClick={() => setShow(!show)}>Show</button>


      <Counter /> */}


      
      {/* <FirstComponent title="Título enviado desde el padre"/>
      <FirstComponent title="Título enviado desde el padre" date="16 de mayo"/>

      
      <SecondComponent otherAttr="Título enviado desde el padre"/>
      <ThirdComponent otherAttr="[1, 2, 3]"/> */}


      <GlobalContext.Provider value="Soy un string guardado en un contexto">
      <UseContextComponent />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
