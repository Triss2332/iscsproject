import './App.css';
import React from 'react';
import Teams from './component/teams';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    fontWeight: "700"
  },
}));

function App() {
  const classes = useStyles();
  
  return (
    <div className="App">
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            ISCS -Teams
          </Typography>
        </Toolbar>
      </AppBar>

      <Teams />
    </div>
  );
}

export default App;
