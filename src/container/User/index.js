import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Chart from '../Chart'

import Info from '../../components/Info'

const defaultName = 'Yurii Kosygin';

const styles = () => ({
  title: {
    fontSize: 36,
    marginBottom: 20,
  },
  name: {
    color: '#149ce5'
  }
});


class User extends Component {
  render() {
    const { classes, name = defaultName } = this.props
    return (
      <div>
        <div className={classes.title}>
          User info <span className={classes.name}>{name}</span>
        </div>
        <Info />
        <Chart />
      </div>
    )
  }
}

export default withStyles(styles)(User)