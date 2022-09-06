import logo from './logo.svg';
import './App.css';
import FetchCrypto  from './components/FetchCrypto';

function App() {
  return (
    <div className="App">
    <h1>Crypto API</h1>
    <FetchCrypto></FetchCrypto>
    </div>
  );
}

export default App;
