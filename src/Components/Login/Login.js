import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import FormField from './FormField'

export const Login = () => {
    return (
        <div >

        <Container>
            <Row>
                <Col></Col>
                <Col xs={6}> <FormField /></Col>
                <Col></Col>
            </Row>
        </Container>
            
        </div>
    )
}

export default Login
