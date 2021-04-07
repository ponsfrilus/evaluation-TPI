import React from 'react'
import { Grid } from '@material-ui/core'
import { PeopleForm } from './PeopleForm'

class EvaluationPersons extends React.Component {
  render() {
    return (
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} item={true}>
          <PeopleForm
            fieldPrefix="cdp"
            title="Entreprise formatrice/Chef de Projet"
            fields={['Nom', 'Téléphone', 'Email']}
          />
        </Grid>
        <Grid xs={12} sm={6} item={true}>
          <PeopleForm
            fieldPrefix="cand"
            title="Candidat/-e"
            fields={['Nom', 'Téléphone', 'Email']}
          />
        </Grid>
        <Grid xs={12} sm={6} item={true}>
          <PeopleForm
            fieldPrefix="exp1"
            title="Expert 1"
            fields={['Nom', 'Téléphone', 'Email']}
          />
        </Grid>
        <Grid xs={12} sm={6} item={true}>
          <PeopleForm
            fieldPrefix="exp2"
            title="Expert 2"
            fields={['Nom', 'Téléphone', 'Email']}
          />
        </Grid>
      </Grid>
    )
  }
}

export { EvaluationPersons }
