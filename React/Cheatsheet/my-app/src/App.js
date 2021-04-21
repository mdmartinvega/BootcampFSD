
import './App.css';
import Counter from "./components/Counter"
import FirstComponent, {SecondComponent, ThirdComponent} from "./components/FirstComponent"
function App() {
  return (
    //App es el padre y Components son los hijos
    <div className="App"> 
      <Counter />
      <FirstComponent title="Título enviado desde el padre"/>
      <FirstComponent title="Título enviado desde el padre" date="16 de mayo"/>

      
      <SecondComponent otherAttr="Título enviado desde el padre"/>
      <ThirdComponent otherAttr="[1, 2, 3]"/>
    </div>
  );
}

export default App;
