import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import {PeopleForm} from './components/PeopleForm.js';
import {Evaluation} from './components/evaluation.js';
import {EvaluationGridLine} from './components/EvaluationGridLine.js';

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

  // const parts = [];
  //
  // for (let partX in data) {
  //   parts.push(data[partX]);
  // }

/**
{parts.map((e, idx) => {
  return (<div className="{e.name}">
    <h2>Partie {e.part}: {e.name}</h2>
      {Object.entries(e).map((d, idx)=> {
        if (d[0] == "line") {
          return d[0].line.map((el, k) => (<EvaluationGridLine data={el} />))
        }
      })}
**/
  return (
    <div>
      <div className="evaluationPersons">
        <PeopleForm fieldPrefix="cdp" fields={["Entreprise formatrice/Chef de Projet", "Téléphone", "Email"]}/>
        <PeopleForm fieldPrefix="cand" fields={["Candidat/-e", "Téléphone", "Email"]}/>
        <PeopleForm fieldPrefix="exp1" fields={["Expert 1", "Téléphone", "Email"]}/>
        <PeopleForm fieldPrefix="exp2" fields={["Expert 2", "Téléphone", "Email"]}/>
      </div>
      <div className="evaluationGrid">
        { /*get first level of data key, e.g. Partie A*/ }
        {Object.entries(data).map((el, idx) => {
          console.log("Debug:", el, idx)
          { /*Display each part title*/ }
          //console.log("el", el[1])
          //console.log("line → ", el[1].line)

          return (<div className="{el[0]}">
            <h2>{el[0]}</h2>
            { /*Loop over each part data*/ }
            {el[1].line.map((el, idx) => (
              <EvaluationGridLine data={el} />
            ))}
          </div>)
          { /*call  for each line*/ }
        })}
      </div>
      <div className="evaluationSummary">evaluationSummary</div>
      <div className="evaluationComment">evaluationComment</div>
      <div className="evaluationSign">evaluationSign</div>
    </div>
  )
}

export default App;



// Lire fichier JSON ✓
// Transformer en objet javascript ✓
// Faire une boucle de cet objet pour avoir les différentes parties ✓
// Faire une boucle pour chaque parties pour avoir les paramètres de chaque line
// Appeler le composant GridLine avec les paramètres récupérés dans le fichier JSON
