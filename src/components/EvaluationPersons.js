import React from 'react'
import { Grid } from '@material-ui/core'
import { PeopleForm } from './PeopleForm'

class EvaluationPersons extends React.Component {
  render() {
    return (
      <div>
        <h1 className={`intervenants_title`}>Intervenants</h1>
        <Grid container spacing={3} className={`intervenants_container`}>
          <Grid xs={12} sm={6} item={true}>
            <PeopleForm
              fieldPrefix="cdp"
              title="Entreprise formatrice/Chef de Projet"
            />
          </Grid>
          <Grid xs={12} sm={6} item={true}>
            <PeopleForm
              fieldPrefix="cand"
              title="Candidat/-e"
            />
          </Grid>
          <Grid xs={12} sm={6} item={true}>
            <PeopleForm
              fieldPrefix="exp1"
              title="Expert 1"
            />
          </Grid>
          <Grid xs={12} sm={6} item={true}>
            <PeopleForm
              fieldPrefix="exp2"
              title="Expert 2"
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export { EvaluationPersons }
