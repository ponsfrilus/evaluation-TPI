import React from 'react'
import { Box } from '@material-ui/core'
import { EvaluationGridLine } from './EvaluationGridLine'

class EvaluationGrid extends React.Component {
  render() {
    return (
      <div>
        <h1>Évaluation</h1>
        <Box display="flex" flexDirection="column">
          {/*get first level of data key, e.g. Partie A*/}
          {Object.entries(this.props.data).map((el, idx) => {
            /*Display each part title*/
            return (
              <div className={`${el[0]} evaluationPart`} key={`${el[0]}_key`}>
                <h2 className={`evaluationPartTitle`}>{el[0]}</h2>
                {/*Loop over each part data*/}
                {el[1].line.map((el, idx) => (
                  <EvaluationGridLine
                    data={el}
                    key={`${el.id}_EvaluationGridLine`}
                  />
                ))}
                <br />
              </div>
            )
          })}
        </Box>
      </div>
    )
  }
}
export { EvaluationGrid }
