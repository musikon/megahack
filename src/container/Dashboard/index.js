import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';

import Table from '../../components/Table'

import { connect } from 'react-redux';

import { getUsers } from '../../actions/allActions';

const styles = () => ({
  title: {
    fontSize: 36,
    marginBottom: 20,
  }
});

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers())
});

class Dashboard extends Component {
  componentDidMount() {
    //this.props.getUsers()
  }

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

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(Dashboard);
export default withStyles(styles)(DashboardContainer)