import React from 'react'
import { TextField } from '@material-ui/core'

class EvaluationComment extends React.Component {
  render() {
    return (
      <div className={`EvaluationComment`}>
        <h1>Remarques</h1>
        <TextField
          id="EvaluationComment_comment"
          placeholder="Inscrivez ici toutes remarques concernant la procédure de qualification..."
          fullWidth
          multiline
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </div>
    )
  }
}

export { EvaluationComment }
