
import './App.css';
// import FetchPokemon from './components/FetchPokemon';
import AxiosPokemon from './components/AxiosPokemon';

function App() {
  return (
    <div className="App">
      <h1>List of Pokemon</h1>
      <AxiosPokemon></AxiosPokemon>
    </div>
  );
}

export default App;
