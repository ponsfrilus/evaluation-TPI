import { TextField } from '@material-ui/core'
import React from 'react'
class EvaluationComment extends React.Component {
  render() {
    return (
      <div className={`EvaluationComment`}>
        <h2>Remarques</h2>
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
