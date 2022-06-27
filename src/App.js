import './App.css';
import React, { useState, useEffect } from 'react'
import { DocumentationPage1 } from './components/DocumentationPage1.js'
import { EvaluationSummary } from './components/EvaluationSummary.js'
import { EvaluationTable } from './components/EvaluationTable.js'
import { EvaluationComment } from './components/EvaluationComment.js'
import { EvaluationSign } from './components/EvaluationSign.js'
import { EvaluationPersons } from './components/EvaluationPersons'
import { EvaluationGrid } from './components/EvaluationGrid.js'
import { Footer } from './components/Footer.js'
import {
  LocalStorageSave,
  LocalStorageLoad,
  LocalStorageClear
} from './utils/LocalStorage.js'
import { FileDownloader } from './components/FileDownloader'
import { FileUploader } from './components/FileUploader'
import { ptsChange } from './utils/Calculation.js'
import { sampleData } from './utils/SampleData.js'

function App() {
  // https://www.freecodecamp.org/news/fetch-data-react/
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // TODO: Not sure about the useEffect, something simpler may works too
  //       It's maybe just possible to use a "require" or "import" on a json file...
  useEffect(() => {
    fetch('./data/evaluationGrid.json')
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw response
      })
      .then((data) => {
        setData(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        setError(error)
      })
      .finally(() => {
        setLoading(false)
        // Load the data for the grid
        LocalStorageLoad()
        // Attempt to calculate the final grade
        ptsChange()
      })
  }, [])

  if (loading) return 'Loading...'
  if (error) return 'Error!'

  return (
    <div>
      <div className="container">

        <div className="controls no-print">
          <button onClick={() => LocalStorageClear()}>
            Tout effacer
          </button>
          &nbsp;
          <button onClick={() => sampleData()}>
            Charger des données d'exemple
          </button>
          <br/>
          <button onClick={() => window.print()}>
            Imprimer
          </button>
          &nbsp;
          <FileDownloader />
          <form>
            <FileUploader />
          </form>
        </div>

        <h1>
          Procédure de qualification&thinsp;: 88600/1/2/3 Informaticienne
          CFC/Informaticien CFC (Ordonnance 2014)
        </h1>
        <DocumentationPage1 />
        <form
          name={`tpi-evaluation-form`}
          id={`tpi-evaluation-form`}
          onChange={(e) => LocalStorageSave(e)}
        >
          <div className="pagebreak"></div>
          <EvaluationPersons />
          <div className="pagebreak"></div>
          <EvaluationGrid data={data} />
          <div className="pagebreak"></div>
          <div className="evaluationSummary">
            <EvaluationSummary />
          </div>
          <div className="evaluationTable no-print">
            <EvaluationTable />
          </div>
          <div className="evaluationComment">
            <EvaluationComment />
          </div>
          <div className="evaluationSign">
            <EvaluationSign />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default App
