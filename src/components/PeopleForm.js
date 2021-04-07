import React from 'react'
import { Box, TextField } from '@material-ui/core'

class PeopleForm extends React.Component {
  render() {
    return (
      <Box>
        <h3>{this.props.title}</h3>
        <Box mb={3} key={this.props.fieldPrefix + '_name'}>
          <label>
            Prénom et nom&thinsp;:
            <TextField fullWidth id={this.props.fieldPrefix + '_name'} />
          </label>
        </Box>
        <Box mb={3} key={this.props.fieldPrefix + '_phone'}>
          <label>
            Téléphone&thinsp;:
            <TextField fullWidth id={this.props.fieldPrefix + '_phone'} />
          </label>
        </Box>
        <Box mb={3} key={this.props.fieldPrefix + '_mail'}>
          <label>
            Email&thinsp;:
            <TextField fullWidth id={this.props.fieldPrefix + '_mail'} />
          </label>
        </Box>
      </Box>
    )
  }
}

export { PeopleForm }
