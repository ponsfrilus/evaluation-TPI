import { Grid, makeStyles, TextField } from '@material-ui/core'
import React from 'react'
import { ptsChange } from '../utils/Calculation.js'

const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: 'center',
    paddingBottom: '1em',
  },
  gridcell: {
    justifyContent: 'center',
    fontSize: '1.3em',
    fontWeight: 'bold',
  },
  centercell: {
    justifyContent: 'center',
  },
  numinput: {
    width: '3ch',
  },
}));

export default function EvaluationGridLine({data}) {

  const classes = useStyles();
    return(
      <Grid container className={classes.container}>
        <Grid container xs={1} className={classes.gridcell}>
          {data.id}
        </Grid>
        <Grid container xs={6}>
          {data.description}
        </Grid>
        <Grid container xs={1} onChange={() => ptsChange()} className={classes.centercell}>
          <TextField type="number" id={`${data.id}_pts`} inputProps={{ min: "0", max: "3", step: "1" }} className={classes.numinput}/>
        </Grid>
        <Grid container xs={4}>
          <TextField id={`${data.id}_justification`} multiline />
        </Grid>
      </Grid>
    )
}

export{EvaluationGridLine}
