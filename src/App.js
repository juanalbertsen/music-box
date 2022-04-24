import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <ItemListContainer title='Guitarra' text='Nueva guitarra Acústica' stock={16}/>
      </header>
    </div>
  );
}

export default App;
