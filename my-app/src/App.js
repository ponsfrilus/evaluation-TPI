import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import {PeopleForm} from './components/PeopleForm.js';
import {EvaluationGridLine} from './components/EvaluationGridLine.js';
import {DocumentationPage1} from './components/DocumentationPage1.js';
import {EvaluationSummary} from './components/EvaluationSummary.js';
import {EvaluationComment} from './components/EvaluationComment.js';
import {EvaluationSign} from './components/EvaluationSign.js';

import {LocalStorageSave, LocalStorageLoad} from './utils/LocalStorage.js';

function App() {
  // https://www.freecodecamp.org/news/fetch-data-react/
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // TODO: Not sure about the useEffect, something simpler may works too
  //       It's maybe just possible to use a "require" or "import" on a json file...
  useEffect(() => {
    fetch('./data/evaluationGrid.json')
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then(data => {
      setData(data);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    })
  }, []);

  if (loading) return "Loading...";
  if (error) return "Error!";

  return (
    <div>
      <button onClick={(e) => LocalStorageSave(e)}>SAVE TEST</button>
      <button onClick={(e) => LocalStorageLoad(e)}>Load TEST</button>
      <form name={`tpi-evaluation-form`} id={`tpi-evaluation-form`}>
        <div className="evaluationPersons">
          <PeopleForm fieldPrefix="cdp" fields={["Entreprise formatrice/Chef de Projet", "Téléphone", "Email"]}/>
          <PeopleForm fieldPrefix="cand" fields={["Candidat/-e", "Téléphone", "Email"]}/>
          <PeopleForm fieldPrefix="exp1" fields={["Expert 1", "Téléphone", "Email"]}/>
          <PeopleForm fieldPrefix="exp2" fields={["Expert 2", "Téléphone", "Email"]}/>
        </div>
        <DocumentationPage1 />
        <div className="evaluationGrid">
          { /*get first level of data key, e.g. Partie A*/ }
          {Object.entries(data).map((el, idx) => {
            { /*Display each part title*/ }
            return (<div className={`${el[0]} eval_part`}>
              <h2>{el[0]}</h2>
              { /*Loop over each part data*/ }
              {el[1].line.map((el, idx) => (
                <EvaluationGridLine data={el} />
              ))}
            </div>)
          })}
        </div>
        <div className="evaluationSummary">
          <EvaluationSummary />
        </div>
        <div className="evaluationComment">
          <EvaluationComment />
        </div>
        <div className="evaluationSign">
          <EvaluationSign />
        </div>
      </form>
    </div>
  )
}

export default App;
