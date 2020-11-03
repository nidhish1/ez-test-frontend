import {React, useState } from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useForm } from 'react-hook-form'
import { Redirect, Route } from 'react-router-dom';

import MainApp from './MainApp'



export const Login = () => {

   const {register, handleSubmit} = useForm()
   const [accessToken,setaccessToken] = useState('logout')
 
   const logout =()=>{
    setaccessToken('logout')
   }


    const onSubmit = (data) => {
        
        fetch(process.env.REACT_APP_LOGIN_URL, {  // add to env
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({email:data.email,password:data.password})

        })
            .then(r =>(r.json()))
            .then(res =>setaccessToken(res.access_token))    
    };

    if (accessToken === 'logout' || accessToken == null) {
        return ( <div>

            <Container>
            <Row>
                <Col></Col>
                <Col xs={6}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>
                    Name:
                    <input type="text"  name="email" ref={register} />
                    </label>

                    <label>
                    Password:
                    <input type="password"  name="password" ref={register} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                </Col>
                <Col></Col>
            </Row>
            </Container>
            
           
        </div>)
    }else {
        return (<MainApp />) 
    }
   

   
}


export default Login
