import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
  Link 
} from "react-router-dom";
import NavBar from './components/navBar';
import About from './components/about';
import Languages from './components/languages'

function App() {
  return (
    <div className="App">
    <h1>Routing</h1>
    <NavBar></NavBar>
    <Routes>
      <Route exact path='/' element ={<h3>This is the home page</h3>}></Route>
      <Route exact path="/about" element ={<><About/><h2>This is the About</h2></>}></Route>
      <Route exact path='/language' element={<Languages/>}></Route>
      <Route path='/language/:id' element={<Languages/>}></Route>
    </Routes>
      
    </div>
  );
}

export default App;
