import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';

import Table from '../../components/Table'

const styles = () => ({
  title: {
    fontSize: 36,
    marginBottom: 20,
  }
});

class Dashboard extends Component {
  render() {
    const { classes, history } = this.props
    return (
      <div>
        <div className={classes.title}>Users info</div>
        <Table history={history} />
      </div>
    )
  }
}

export default withStyles(styles)(Dashboard)