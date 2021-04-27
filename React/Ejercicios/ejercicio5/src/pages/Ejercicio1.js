
import Card from "../components/Card";
// import '../App.css';

function Ejercicio1() {
  return (
    <div className="App">
     <Card src="https://images.pexels.com/photos/3522751/pexels-photo-3522751.jpeg?cs=srgb&dl=pexels-mateusz-dach-3522751.jpg&fm=jpg" 
     title="Primera tarjeta en React"
     textAttr="Some quick example text to build on the card title and make up the bulk of the card's content"
     otherOne="Vamos lá"
     linkAttr="https://codespaceacademy.com/?gclid=Cj0KCQjw9_mDBhCGARIsAN3PaFOtiAkYudLaNTNBWVX0TI8OkTIqYMXDAd_5b9nkXIJ7cnCPny0hZyQaAgReEALw_wcB"
     />
      <Card src="https://images.pexels.com/photos/3522751/pexels-photo-3522751.jpeg?cs=srgb&dl=pexels-mateusz-dach-3522751.jpg&fm=jpg" 
     title="Segunda tarjeta en React"
     textAttr="Some quick example text to build on the card title and make up the bulk of the card's content"
     otherOne="Vamos lá"
     linkAttr="https://codespaceacademy.com/?gclid=Cj0KCQjw9_mDBhCGARIsAN3PaFOtiAkYudLaNTNBWVX0TI8OkTIqYMXDAd_5b9nkXIJ7cnCPny0hZyQaAgReEALw_wcB"
     />
    </div> 
  );
}

export default Ejercicio1;