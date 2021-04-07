import React from 'react'
import { Grid } from '@material-ui/core'

class EvaluationSign extends React.Component {
  render() {
    return (
      <div>
        <h1>Signatures</h1>
        <Grid container className={`EvaluationSign`}>
          <Grid item={true} container xs={4} className={`EvaluationSignContainer`}>
            <div className={`EvaluationSignBlock sign_chef_de_projet`}>
              <h3>Chef de projet</h3>
              <p>Lieu&thinsp;:</p>
              <div className="textLine"></div>
              <p>Date&thinsp;:</p>
              <div className="textLine"></div>
              <p>Signature&thinsp;:</p>
              <div className="textLine"></div>
            </div>
          </Grid>
          <Grid item={true} container xs={4} className={`EvaluationSignContainer`}>
            <div className={`EvaluationSignBlock sign_expert_1`}>
              <h3>Expert 1</h3>
              <p>Lieu&thinsp;:</p>
              <div className="textLine"></div>
              <p>Date&thinsp;:</p>
              <div className="textLine"></div>
              <p>Signature&thinsp;:</p>
              <div className="textLine"></div>
            </div>
          </Grid>
          <Grid item={true} container xs={4} className={`EvaluationSignContainer`}>
            <div className={`EvaluationSignBlock sign_expert_2`}>
              <h3>Expert 2</h3>
              <p>Lieu&thinsp;:</p>
              <div className="textLine"></div>
              <p>Date&thinsp;:</p>
              <div className="textLine"></div>
              <p>Signature&thinsp;:</p>
              <div className="textLine"></div>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export { EvaluationSign }
