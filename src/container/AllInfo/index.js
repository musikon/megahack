import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  title: {
    fontSize: 36,
    marginBottom: 20,
  },
});

class AllInfo extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.title}>
          All info
        </div>
        description
      </div>
    )
  }
}

export default withStyles(styles)(AllInfo)