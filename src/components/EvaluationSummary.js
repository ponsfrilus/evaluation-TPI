import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core'
import Paper from '@material-ui/core/Paper'

class EvaluationSummary extends React.Component {
  render() {
    return (
      <div className={`EvaluationSummary`}>
        <h1>Contraction</h1>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Sommes des différentes parties</TableCell>
                <TableCell>Nombre de points max</TableCell>
                <TableCell>Points obtenus</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  Partie A&thinsp;: Compétences professionnelles
                </TableCell>
                <TableCell className="tar">60</TableCell>
                <TableCell className="partMarkSum tar" id="partAMarkSum">
                  ?
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Partie B&thinsp;: Documentation / rapport du TPI
                </TableCell>
                <TableCell className="tar">30</TableCell>
                <TableCell className="partMarkSum tar" id="partBMarkSum">
                  &nbsp;
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Partie C&thinsp;: Entretien professionnel et présentation
                </TableCell>
                <TableCell className="tar">30</TableCell>
                <TableCell className="partMarkSum tar" id="partCMarkSum">
                  &nbsp;
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Somme de A + B + C</TableCell>
                <TableCell className="tar">120</TableCell>
                <TableCell className="tar" id="partTotMarkSum">
                  &nbsp;
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="partFinalGradeCell">
                  <b>Note</b>
                  <br />
                  (5 * somme / 120) + 1
                </TableCell>
                <TableCell
                  className="partFinalGradeCell"
                  id="partFinGradeNoRound"
                >
                  &nbsp;
                </TableCell>
                <TableCell className="partFinalGradeCell partFinGradeOuter" id="partFinGrade">
                  &nbsp;
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    )
  }
}

export { EvaluationSummary }
