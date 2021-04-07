import React from 'react'
import { Grid, TextField } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { HelpPopover } from './HelpPopover.js'
import { ptsChange } from '../utils/Calculation.js'

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      justifyContent: 'center',
      paddingTop: '1em',
      paddingBottom: '1em',
    },
    gridId: {
      display: 'flex',
      alignItems: 'center', // v-align center
      justifyContent: 'center',
      flexDirection: 'column',
      fontSize: '1.3em',
      fontWeight: 'bold',
    },
    centercell: {
      justifyContent: 'center',
    },
    numinput: {
      width: '3ch',
      fontWeight: 'bold',
    },
    typography: {
      padding: theme.spacing(2),
    },
  })
)

export default function EvaluationGridLine({ data }) {
  const classes = useStyles()

  return (
    <Grid container className={classes.container}>
      <Grid item={true} xs={1} className={classes.gridId}>
        <div>{data.id}</div>
        <HelpPopover data={data} />
      </Grid>
      <Grid item={true} xs={5}>
        {data.description}
      </Grid>
      <Grid
        item={true}
        xs={1}
        onChange={() => ptsChange()}
        className={`${classes.centercell} test`}
      >
        <TextField
          type="number"
          id={`${data.id}_pts`}
          inputProps={{ min: '0', max: '3', step: '1' }}
          className={classes.numinput}
        />
      </Grid>
      <Grid item={true} xs={5} className={`grid_justification`}>
        <TextField fullWidth id={`${data.id}_justification`} multiline />
      </Grid>
    </Grid>
  )
}

export { EvaluationGridLine }
