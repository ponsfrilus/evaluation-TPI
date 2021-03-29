import React from 'react'
class EvaluationSummary extends React.Component {
  render(){
    return(
      <div className={`EvaluationSummary`}>
        <h2>Contraction</h2>
        <div className="divTable">
          <div className="divTableHeading">
            <div className="divTableRow">
              <div className="divTableHead">Sommes des différentes parties</div>
              <div className="divTableHead">Nombre de points max</div>
              <div className="divTableHead">Points obtenus</div>
            </div>
          </div>
          <div className="divTableBody">
            <div className="divTableRow">
              <div className="divTableCell">Partie A&thinsp;: Compétences professionnelles</div>
              <div className="divTableCell tar">60</div>
              <div className="divTableCell partMarkSum tar" id="partAMarkSum">?</div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell">Partie B&thinsp;: Documentation / rapport du TPI</div>
              <div className="divTableCell tar">30</div>
              <div className="divTableCell partMarkSum tar" id="partBMarkSum">&nbsp;</div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell">Partie C&thinsp;: Entretien professionnel et présentation</div>
              <div className="divTableCell tar">30</div>
              <div className="divTableCell partMarkSum tar" id="partCMarkSum">&nbsp;</div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell">Somme de A + B + C</div>
              <div className="divTableCell tar">120</div>
              <div className="divTableCell tar" id="partTotMarkSum">&nbsp;</div>
            </div>
            <div className="divTableRow partFinalGradeRow">
              <div className="divTableCell partFinalGradeCell"><b>Note</b><br />(5 * somme / 120) + 1</div>
              <div className="divTableCell partFinalGradeCell" id="partFinGradeNoRound">&nbsp;</div>
              <div className="divTableCell partFinalGradeCell" id="partFinGrade">&nbsp;</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export { EvaluationSummary }
