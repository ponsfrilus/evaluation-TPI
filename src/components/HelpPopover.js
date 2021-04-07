import React from 'react'
import Popover from '@material-ui/core/Popover'
import IconButton from '@material-ui/core/IconButton'
//import InfoIcon from '@material-ui/icons/Info'
import InfoOutlined from '@material-ui/icons/Info'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    popoverTableContainer: {
      width: 'auto',
      maxWidth: '800px',
      height: 'auto',
      padding: '5px',
    },
    popoverTable: {
      border: '0px',
      borderCollapse: 'collapse',
    },
    popoverTableHead: {
      backgroundColor: '#eaeaea',
      color: 'black',
      '& tr:last-child': {
        borderBottom: '2px solid #c0c0c0',
      },
      '& td': {
        textAlign: 'center',
        padding: '10px',
      },
      '& td:last-child': {
        textAlign: 'left',
      },
    },
    popoverTableHeadDescription: {
      fontSize: '1.5em',
      fontWeight: 'bold',
    },
    popoverTableId: {
      fontSize: '2em',
      fontWeight: 'bold',
    },
    popoverTableBody: {
      '& td': {
        borderBottom: '1px solid #c0c0c0',
        padding: '10px',
      },
      '& tr:last-child td': {
        border: '0px',
      },
      '& ol': {
        paddingLeft: '0',
        /* If you want you can change the list type from inside or outside */
        listStyle: 'inside decimal',
      },
    },
  })
)

export default function HelpPopover({ data }) {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <div>
      <IconButton
        aria-label="info"
        aria-describedby={id}
        color="action"
        onClick={handleClick}
        className="no-print"
      >
        <InfoOutlined />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
      >
        <div className={classes.popoverTableContainer}>
          <table className={classes.popoverTable}>
            <thead className={classes.popoverTableHead}>
              <tr>
                <td className={classes.popoverTableHeadQuestion}>Question</td>
                <td className={classes.popoverTableHeadDescription}>
                  {data.description}
                </td>
              </tr>
              <tr>
                <td className={classes.popoverTableId}>{data.id}</td>
                <td className={classes.popoverTableHeader}>{data.header}</td>
              </tr>
            </thead>
            <tbody className={classes.popoverTableBody}>
              <tr>
                <td>Niveau de qualité 3</td>
                <td dangerouslySetInnerHTML={{ __html: data.qual3 }}></td>
              </tr>
              <tr>
                <td>Niveau de qualité 2</td>
                <td dangerouslySetInnerHTML={{ __html: data.qual2 }}></td>
              </tr>
              <tr>
                <td>Niveau de qualité 1</td>
                <td dangerouslySetInnerHTML={{ __html: data.qual1 }}></td>
              </tr>
              <tr>
                <td>Niveau de qualité 0</td>
                <td dangerouslySetInnerHTML={{ __html: data.qual0 }}></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Popover>
    </div>
  )
}

export { HelpPopover }
