import React from 'react'
import { Navbar,Nav ,InputGroup, FormControl,Button} from 'react-bootstrap'
import {BrowserRouter as Router, NavLink,Redirect} from  'react-router-dom' 
import Route from 'react-router-dom/Route'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from '../Login/Login'
import MainApp from '../MainApp/MainApp'

export const Navigation = () => {

  

    return (
        <div>  
            <Router>
                <Navbar bg="primary" variant="dark">
                    <NavLink to = "/" exact strict activeStyle={{color:'black'} }>Login</NavLink>
                    <NavLink to = "/register" exact activeStyle={{color:'black'} }>Register</NavLink>
                </Navbar>


                <Route path="/" exact strict component = {Login}/>
        
                <Route path="/register" exact strict render = {()=>{
                return (<h1>Registration Page</h1>)
                    }
                }/>
            </Router>
            
        </div>
    )
}


export default Navigation