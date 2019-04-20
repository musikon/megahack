import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: '30%',
  },
  content: {
    marginTop: 20,
    cursor: 'pointer',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between'
  }
});

const Info = ({ classes, content: { title, content } }) => (
  <Paper className={classes.root} elevation={1}>
    <Typography variant="h5" component="h3">
      {title}
    </Typography>
    <div>
      {
        content.map((item, index) => (
          <div key={index} className={classes.content}>
            <div className={classes.item}>
              <span>{item.name}</span>
              <span>{item.time}</span>
            </div>
            <Divider />
          </div>
        ))
      }
    </div>
  </Paper>
)

export default withStyles(styles)(Info)