import './App.css'
import Header from "./components/Header";
import { MovieList } from "./components/MovieList";

const Tareas = [
  
  { name: "Renovar pasaporte", status: true, descriptionprop: 'Consultar web, pagar cita, agendar cita' },
  { name: "Ternimar front", status: false, descriptionprop: 'Terminar 3 tareas mas' },
  { name: "Adquirir licencia", status: false, descriptionprop: 'Consultar escuela Racing de conduccion, consultar y ahorrar matricula' }
];

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList list={Tareas} />
    </div>
  );
}

export default App;
