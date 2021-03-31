import { Box } from '@material-ui/core'
import React from 'react'
import { PeopleForm } from './PeopleForm'
class EvaluationPersons extends React.Component {
  render() {
    return (
      <Box
        display={{ xs: undefined, sm: 'flex' }}
        flexWrap="wrap"
        flexDirection="row"
      >
        <PeopleForm
          fieldPrefix="cdp"
          fields={[
            'Entreprise formatrice/Chef de Projet',
            'Téléphone',
            'Email',
          ]}
        />
        <PeopleForm
          fieldPrefix="cand"
          fields={['Candidat/-e', 'Téléphone', 'Email']}
        />
        <PeopleForm
          fieldPrefix="exp1"
          fields={['Expert 1', 'Téléphone', 'Email']}
        />
        <PeopleForm
          fieldPrefix="exp2"
          fields={['Expert 2', 'Téléphone', 'Email']}
        />
      </Box>
    )
  }
}

export { EvaluationPersons }
