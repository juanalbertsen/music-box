import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
      <h2>¡Bienvenidos a la tienda Music Box!</h2>
      <p>Espacio en Construcción</p>
      <img src='logo192.png'></img>
      </header>
    </div>
  );
}

export default App;
