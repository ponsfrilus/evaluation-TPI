import { Box } from '@material-ui/core'
import React from 'react'
class PeopleForm extends React.Component {
  render() {
    return (
      // <div className={`PeopleForm ${this.props.fieldPrefix}`} ></div>
      <Box
        display="flex"
        flexBasis="49%"
        justifyContent="center"
        flexDirection="column"
        border="1px solid gray"
      >
        {this.props.fields.map((field, i) => {
          return (
            <label key={this.props.fieldPrefix + '_' + field + '_label'}>
              <br />
              {field}:<br />
              <input
                type="text"
                id={this.props.fieldPrefix + '_' + field}
                key={this.props.fieldPrefix + '_' + field}
              />
            </label>
          )
        })}
      </Box>
    )
  }
}

export { PeopleForm }
