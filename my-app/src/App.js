import logo from './logo.svg';
import './App.css';
import {Evaluation} from './components/evaluation.js';
import {PeopleForm} from './components/PeopleForm.js';

function App() {
  return (
    <div className="App">
      <PeopleForm fields={["toto", "tutu", "titi"]}/>
    </div>
  );
}

export default App;
