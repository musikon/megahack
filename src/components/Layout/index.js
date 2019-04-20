import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
};


const Layout = ({ children, classes }) => (
  <div>
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Wooden llama
        </Typography>
      </Toolbar>
    </AppBar>
    {children}
  </div>
);

export default withStyles(styles)(Layout)