import React from 'react'
import {Container,Row,Col ,Button} from 'react-bootstrap'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


export const MainApp = ({accessToken, logout}) => {
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
      }));
      
    
    
      const classes = useStyles();
    
    
    
    return (  
        
            <div>
           <div className={classes.root}>
                <Grid container spacing={3}>
                
                    <Grid item xs={9} sm={8}>
                        <Paper className={classes.paper}>xs=12 sm=6</Paper>
                    </Grid>
                    <Grid item xs={3} sm={4}>
                        <Paper className={classes.paper}>xs=12 sm=6</Paper>
                </Grid>
                    
                </Grid>
            </div>                    
            <Button variant="danger" onClick={logout}>Danger</Button>

            </div>
        )

    
   
}

export default MainApp
