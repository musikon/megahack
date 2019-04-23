import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  title: {
    fontSize: 36,
    marginBottom: 20,
  },
});
const data = [
  {
    value: 27,
  },
  {
    value: 0
  },
  {
    value: 0
  },
  {
    value: 0
  },
  {
    value: 28
  },
  {
    value: 29
  },
  {
    value: 0
  },
  {
    value: 30
  },
  {
    value: 0
  },
  {
    value: 0
  },
  {
    value: 0
  },
  {
    value: -42
  },
  {
    value: 0
  },
]
class AllInfo extends Component {
  mapping = () => {
    let result = [];
    let count = 0;
    let trash = [];
    data.forEach(item => {
      if (item.value === 0) {
        count++;
        trash.push(item.value)
      } else if (item.value === -42) {
        result.push(item)
      } else {
        count = 0
        result.push({ name: 'trash', content: trash });
        trash = []
        result.push(item)
      }
    });
    return result
  }
  render() {
    const { classes } = this.props
    const test = this.mapping()
    console.log(test)
    return (
      <div className={classes.root}>
        <div className={classes.title}>
          All info
        </div>
        No more info
      </div>
    )
  }
}

export default withStyles(styles)(AllInfo)