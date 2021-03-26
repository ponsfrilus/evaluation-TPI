import React from 'react'
class EvaluationSummary extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className={`EvaluationSummary`}>
        <h2>Contraction</h2>
        <div className="divTable">
          <div className="divTableBody">
            <div className="divTableRow">
              <div className="divTableCell">Sommes des différentes parties</div>
              <div className="divTableCell">Nombre de points max</div>
              <div className="divTableCell">Points obtenus</div>
            </div>
              <div className="divTableRow">
              <div className="divTableCell">Partie A: Compétences professionnelles</div>
              <div className="divTableCell">60</div>
            <div className="divTableCell">&nbsp;</div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell">Partie B:Documentation / rapport du TPI</div>
              <div className="divTableCell">30</div>
              <div className="divTableCell">&nbsp;</div>
            </div>
              <div className="divTableRow">
              <div className="divTableCell">Partie C:Entretien professionnel et présentation</div>
              <div className="divTableCell">30</div>
              <div className="divTableCell">&nbsp;</div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell">Somme de A + B + C</div>
              <div className="divTableCell">120</div>
              <div className="divTableCell">&nbsp;</div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell">Note (5 * somme / 120) + 1</div>
              <div className="divTableCell">&nbsp;</div>
              <div className="divTableCell">&nbsp;</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export { EvaluationSummary }
