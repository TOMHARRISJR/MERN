import logo from './logo.svg';
import './App.css';
import PersonalCard from './components/PersonalCard'

function App() {
  return (
    <div className="App">
      <PersonalCard name = {"Doe,Jane"} age = {45} hairColor = {"Black"}></PersonalCard>
      <PersonalCard name = {"Smith,John"} age = {88} hairColor = {"Brown"}></PersonalCard>
      <PersonalCard name = {"Fillmore,Millard"} age = {50} hairColor = {"Brown"}></PersonalCard>
      <PersonalCard name = {"Smith,Maria"} age = {62} hairColor = {"Brown"}></PersonalCard>
      
    </div>
  );
}

export default App;
