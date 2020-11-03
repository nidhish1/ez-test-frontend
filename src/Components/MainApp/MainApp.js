import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
export const MainApp = ({accessToken, logout}) => {
  
    
    return (  
        
            <div>
            <Container>
            <Row>
                <Col lg = "1"><button onClick={logout}> logout</button></Col>
                <Col lg ="8"></Col>
                <Col lg = "3">
                3 of 3
                </Col>
            </Row>
            </Container>                     
            
            </div>
        )

    
   
}

export default MainApp
