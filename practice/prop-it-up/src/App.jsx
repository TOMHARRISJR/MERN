import logo from './logo.svg';
import './App.css';
import PersonalCard from './components/PersonalCard'

function App() {
  return (
    <div className="App">
      <PersonalCard lastname = {"Doe"} firstname ={"Jane"} age = {45} hairColor = {"Black"}></PersonalCard>
      <PersonalCard lastname = {"Smith"} firstname ={"John"} age = {88} hairColor = {"Brown"}></PersonalCard>
      <PersonalCard lastname = {"Fillmore"} firstname ={"Millard"} age = {50} hairColor = {"Brown"}></PersonalCard>
      <PersonalCard lastname = {"Smith"} firstname ={"Maria"} age = {62} hairColor = {"Brown"}></PersonalCard>
      
    </div>
  );
}

export default App;
