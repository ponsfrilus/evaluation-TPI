import logo from './logo.svg';
import './App.css';
import {Evaluation} from './components/evaluation.js';
import {PeopleForm} from './components/PeopleForm.js';

function App() {
  return (
    <div className="personsInfo">
      <PeopleForm fieldPrefix="cdp" fields={["Entreprise formatrice/Chef de Projet", "Téléphone", "Email"]}/>
      <PeopleForm fieldPrefix="cand" fields={["Candidat/-e", "Téléphone", "Email"]}/>
      <PeopleForm fieldPrefix="exp1" fields={["Expert 1", "Téléphone", "Email"]}/>
      <PeopleForm fieldPrefix="exp2" fields={["Expert 2", "Téléphone", "Email"]}/>
    </div>
  );
}

export default App;
