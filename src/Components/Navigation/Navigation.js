import React from 'react'
import { Navbar,Nav ,InputGroup, FormControl,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Navigation = () => {
    return (
        <div>
             <Navbar bg="primary" variant="dark">
       
                <Nav>
                    <Nav.Link href="#home" >Login</Nav.Link>
                    
                    <Nav.Link href="#features">Register</Nav.Link>
                </Nav>
                </Navbar>
            
        </div>
    )
}


export default Navigation