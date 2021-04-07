import React from 'react'
import { Box, TextField } from '@material-ui/core'

class PeopleForm extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        {this.props.fields.map((field, i) => {
          return (
            <div key={this.props.fieldPrefix + '_' + field + '_label'}>
              <label>
                <br />
                {field}:<br />
                <TextField fullWidth id={this.props.fieldPrefix + '_' + field} label={field} />
              </label>
            </div>
          )
        })}
      </div>
    )
  }
}

export { PeopleForm }
