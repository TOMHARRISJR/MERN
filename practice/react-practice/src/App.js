import './App.css';
import {
  Routes,
  Route,
  Link 
} from "react-router-dom";
import Home from './components/home'
import NumberWord from './components/number'


function App() {
  return (
    <Routes>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/:id' element={<NumberWord></NumberWord>}></Route>
      <Route path='/:id/:color1' element={<NumberWord></NumberWord>}></Route>
      <Route path='/:id/:color1/:color2' element={<NumberWord></NumberWord>}></Route>
    </Routes>
  );
}

export default App;
