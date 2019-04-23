import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Chart from '../Chart'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Info from '../../components/Info';

import ChartBussnes from '../ChartBussnes'

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
    alignItems: 'flex-start',
    marginBottom: 60,
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
        name: 'VK',
        time: '3h'
      },
      {
        name: '****Hub',
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
        name: 'Google',
        time: '1h'
      },
    ]
  }
];

const chartData1 = [{
  name: 'WS',
  children: [{
    name: 'Telegram', value: 1
  }, {
    name: 'Stack Overflow',
    children: [{
      name: 'React', value: 1
    }, {
      name: 'JavaScript', value: 2
    }, {
      name: 'Parser', value: 1
    }]
  },
    {
      name: 'JavaScript',
      value: 1,
    }
  ]
},
  {
    name: 'Word',
    children: [{
      name: 'Google',
      value: 2,
      content: [{
        name: 'Google translate',
        value: 5,
      }]
    },
      {
        name: 'Mail',
        value: 5,
      }
    ]
  },
  {
    name: 'Trash',
    children: [
      {
        name: 'Youtube',
        value: 2,
      },
      {
        name: 'VK',
        value: 3,
      },
      {
        name: 'Mail',
        value: 1
      }
    ]
  }
];

const chartData3 = [{
  name: 'Microsoft Office',
  children: [{
    name: 'Telegram', value: 2
  }, {
    name: 'Excel',
    children: [{
      name: 'Table', value: 2
    }, {
      name: 'Form', value: 1
    }, {
      name: 'Text', value: 3
    }]
  },
    {
      name: 'Mail',
      value: 4,
    }
  ]
},
  {
    name: 'Jira',
    children: [{
      name: 'Google',
      value: 2,
      content: [{
        name: 'Jira time line',
        value: 5,
      }]
    },
      {
        name: 'Mail',
        value: 5,
      }
    ]
  },
  {
    name: 'Trash',
    children: [
      {
        name: 'Youtube',
        value: 5,
      },
      {
        name: 'VK',
        value: 1,
      },
      {
        name: 'Mail',
        value: 1
      }
    ]
  }
];

const chartData2 = [{
  name: 'Java',
  children: [{
    name: 'Telegram', value: 2
  }, {
    name: 'Stack Overflow',
    children: [{
      name: 'Idea', value: 4
    }, {
      name: 'Kotlin', value: 2
    }, {
      name: 'Parser', value: 1
    }]
  },
    {
      name: 'Android',
      value: 1,
    }
  ]
},
  {
    name: 'Mail',
    children: [{
      name: 'Google',
      value: 1,
      content: [{
        name: 'Google translate',
        value: 2,
      }]
    },
      {
        name: 'Mail',
        value: 7,
      }
    ]
  },
  {
    name: 'Trash',
    children: [
      {
        name: 'Youtube',
        value: 1,
      },
      {
        name: 'VK',
        value: 10,
      },
      {
        name: 'Mail',
        value: 2
      }
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
        <Chart data={userData.dataInfo}/>
        <div className={classes.infoContainer}>
          {
            userData && userData.data && data.map((item, index) => (
              <Info key={index} content={item} />
            ))
          }
        </div>
        <div className={classes.title}>
          Buisness process <span className={classes.name}>{name}</span>
        </div>
        <ChartBussnes tableId={1} data={chartData1} />
        <div className={classes.title}>
          Buisness process <span className={classes.name}>Vasilii Pypkin</span>
        </div>
        <ChartBussnes tableId={2} data={chartData3} />
        <div className={classes.title}>
          Buisness process <span className={classes.name}>{name}</span>
        </div>
        <ChartBussnes tableId={3} data={chartData2} />
      </div>
    )
  }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);

export default withStyles(styles)(UserContainer)