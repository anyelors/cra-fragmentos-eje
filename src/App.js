import './App.css';
import ListaHorarios from './components/ListaHorarios';
import ListaContactos from './components/ListaContactos';
import ListaFrases from './components/ListaFrases';
import ListaIngredientes from './components/ListaIngredientes';
import ListaNotificaciones from './components/ListaNotificaciones';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Horarios de apertura</h1>
        <ListaHorarios />
        <h1>Ingredientes</h1>
        <ListaIngredientes />
        <h1>Tarjetas de contacto</h1>
        <ListaContactos />
        <h1>Frases motivadoras</h1>
        <ListaFrases />
        <h1>Notificaciones</h1>
        <ListaNotificaciones />
      </header>
    </div>
  );
}

export default App;
