import React, {useState,useEffect} from 'react'
import {Container,Row,Col ,Button} from 'react-bootstrap'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FileUpload from '../FileUpload/FileUpload';
import List from '../Editor/List'
import AddEditForm from '../AddEditForm/AddEditForm';
import TranslateTable from '../TranslateTable/TranslateTable';
import TranslateTablePage from '../TranslateTable/TranslateTable';
import { CloseOutlined } from '@material-ui/icons';


export const MainApp = ({accessToken, logout}) => {
    
    const [data ,setdata] = useState({})
    const [loadeditor,setloadEditor] = useState(false)
    const [count, setCount] = useState(0);
    const getJson =(datajson) => {

        setdata(datajson)
    }

    

    useEffect(() => {
        if(Object.keys(data).length >0) {
          setloadEditor(true)
        }
      }, [data,loadeditor]);
    
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
  
    if (loadeditor){
      return (  
        
        <div>


       <div className={classes.root}>
            <Grid container spacing={3}>
            
                <Grid item xs={9} sm={8}>
                    <Paper className={classes.paper}><FileUpload getJson = {getJson}/> </Paper>
                </Grid>
                <Grid item xs={3} sm={4}>
                    <Paper className={classes.paper}><Button variant="danger" onClick={logout}>Logout</Button></Paper>
            </Grid>
            </Grid>
        </div>  

        <div className={classes.root}>
                <Grid container spacing={3}>
                
                    <Grid item xs={9} sm={8}>
                        <Paper className={classes.paper}><AddEditForm jsonData = {data}/></Paper>
                    </Grid>
                    <Grid item xs={3} sm={4}>
                        <Paper className={classes.paper}><TranslateTablePage data = {data}/></Paper>
                        
                </Grid>
                    
                </Grid>
            </div> 

        </div>
    )

    }
    return (  
        
            <div>


           <div className={classes.root}>
                <Grid container spacing={3}>
                
                    <Grid item xs={9} sm={8}>
                        <Paper className={classes.paper}><FileUpload getJson = {getJson}/> </Paper>
                    </Grid>
                    <Grid item xs={3} sm={4}>
                        <Paper className={classes.paper}><Button variant="danger" onClick={logout}>Logout</Button></Paper>
                </Grid>
                </Grid>
            </div>  

  

            </div>
        )

    
   
}

export default MainApp
