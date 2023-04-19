import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Card from 'react-bootstrap/Card';



function Login() {
  const [login, setlogin] = useState([{email:"athulya317@gmail.com",password:"12345"}])
  return (
    login.map((abc)=>(
    <div className='d-flex justify-content-center'>
        <Card style={{ width: '18rem',marginTop:"200px",textAlign:"center"}}>
        <Card.Body>
        
 <Form>
 
      
    
  
        <Card.Text>
          
        </Card.Text>
        
      
    

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={abc.email} />
        <Form.Text className="text-muted">
        
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>password</Form.Label>
        <Form.Control type="password" placeholder="Password"  value={abc.password}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <Button variant="primary" type="submit">
        signup
      </Button>
    </Form>
    </Card.Body>
    </Card>

    </div>
  )
    )
)}

export default Login