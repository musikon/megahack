import React from 'react'

import { withStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';

import { Link } from 'react-router-dom';

const drawerWidth = 250;

const contentSidebar = [
  {
    text: 'Users',
    icon: 'person',
    link: '/'
  },
  {
    text: 'All info',
    icon: 'info',
    link: '/info'
  }
];

const logoText = 'Wooden llama';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  icon: {
    color: '#149ce5'
  },
  toolbar: theme.mixins.toolbar,
  logoText: {
    color: '#696969',
    fontSize: 26,
    '&:nth-child(2)': {
      color: '#149ce5',
    },
    '&:nth-child(3)': {
      color: '#149ce5',
    },
    '&:nth-child(10)': {
      color: '#149ce5',
    },
    '&:nth-child(12)': {
      color: '#149ce5',
    },
  },
  link: {
    textTransform: 'none',
    textDecoration: 'none',
  }
});

const Layout = ({ children, classes, ...other}) => (
  <div className={classes.root}>
    <CssBaseline />
    <AppBar position="absolute" color="default" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" color="inherit">

          {logoText.split('').map((letter, index) => (
            <span key={index} className={classes.logoText}>
              {letter}
            </span>
          ))}
        </Typography>
      </Toolbar>
    </AppBar>
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar} />
      <List>
        {contentSidebar.map((item, index) => (
          <Link to={item.link} key={index} className={classes.link}>
            <ListItem button>
              <Icon className={classes.icon}>{item.icon}</Icon>
              <ListItemText primary={item.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {children}
    </main>
  </div>
);

export default withStyles(styles)(Layout)