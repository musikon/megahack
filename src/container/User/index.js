import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Chart from '../Chart'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Info from '../../components/Info'

import { connect } from 'react-redux';

import { getUser } from '../../actions/allActions';

const defaultName = 'Yurii Kosygin';



const styles = () => ({
  root: {
    paddingBottom: 60,
  },
  title: {
    fontSize: 36,
    marginBottom: 20,
  },
  name: {
    color: '#149ce5'
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  paper: {
    width: 480,
  },
  paperWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 60,
  },
});

const dataInfo = [
  {
    title: 'Work',
    content: [
      {
        name: 'IE',
        time: '8h'
      },
      {
        name: 'Google Chrome',
        time: '6h'
      },
      {
        name: 'WS',
        time: '3h'
      },
      {
        name: 'Idea',
        time: '1h'
      },
    ]
  },
  {
    title: 'Not at work',
    content: [
      {
        name: 'PornoHub',
        time: '3h'
      },
    ]
  },
  {
    title: 'Unidentified',
    content: [
      {
        name: 'Yandex',
        time: '2h'
      },
      {
        name: 'Need for speed',
        time: '1h'
      },
    ]
  }
];

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUser())
});

class User extends Component {
  state = {
    value: 0,
  };

  componentDidMount() {
    this.props.getUser()
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { classes, name = defaultName, data = dataInfo } = this.props;
    const { userData } = this.props.allReducer;
    console.log(userData)
    return (
      <div className={classes.root}>
        <div className={classes.title}>
          User info <span className={classes.name}>{name}</span>
        </div>
        <div className={classes.paperWrapper}>
          <Paper square className={classes.paper}>
            <Tabs
              value={this.state.value}
              indicatorColor="primary"
              textColor="primary"
              onChange={this.handleChange}
            >
              <Tab label="day" />
              <Tab label="week" />
              <Tab label="month" />
            </Tabs>
          </Paper>
        </div>
        <Chart />
        <div className={classes.infoContainer}>
          {
            data.map((item, index) => (
              <Info key={index} content={item} />
            ))
          }
        </div>
      </div>
    )
  }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);

export default withStyles(styles)(UserContainer)