import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import TableUi from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    cursor: 'pointer'
  }
});

const defaultRows = [
  {
    id: 1,
    name: 'Yurii Kosygin',
    timeWork: 8,
    timeProgram: 4,
    timeInternet: 3,
    application: 4,
    effective: '90%'
  },
  {
    id: 2,
    name: 'Dmitri Pypkin',
    timeWork: 4,
    timeProgram: 6,
    timeInternet: 3,
    application: 1,
    effective: '30%'
  },
  {
    id: 3,
    name: 'Alex Shpack',
    timeWork: 7,
    timeProgram: 2,
    timeInternet: 1,
    application: 12,
    effective: '60%'
  },
]

const Table = ({ classes, rows = defaultRows, history }) => (
  <Paper className={classes.root}>
    <TableUi className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>User FIO</TableCell>
          <TableCell align="left">Time work</TableCell>
          <TableCell align="left">Time program</TableCell>
          <TableCell align="left">Time internet</TableCell>
          <TableCell align="left">Popular application</TableCell>
          <TableCell align="left">Effective</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow
            key={row.id}
            onClick={() => history.push(`/user/${row.id}`)}
            hover
            className={classes.row}
          >
            <TableCell align="left">{row.name}</TableCell>
            <TableCell align="left">{row.timeWork}</TableCell>
            <TableCell align="left">{row.timeProgram}</TableCell>
            <TableCell align="left">{row.timeInternet}</TableCell>
            <TableCell align="left">{row.application}</TableCell>
            <TableCell align="left">{row.effective}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableUi>
  </Paper>
);

export default withStyles(styles)(Table)
