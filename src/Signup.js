import axios from 'axios';
import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Signup() {

      const [name,setName] = useState('')
      const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
     const namee=(event)=>{
      setName(event.target.value);
     }

    const emil = (event) => {
        setEmail(event.target.value);
      };
    
      const psw = (event) => {
        setPassword(event.target.value);
      };

      const  click=async(event)=>{
        event.preventDefault();
        const axioss=await axios.post("http://localhost:4000/signup",{name,email,password})
        console.log(axioss.data);
        localStorage.setItem('userinfo',JSON.stringify(axioss.data));
      }
    
    

  return (
    <div className='d-flex justify-content-center'>
       


      <Card  style={{ width: '18rem',marginTop:'200px',textAlign:'center'}}>
      <Card.Body>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail" >
      
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="enter name" value={name} onChange={namee} />
      
    </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
      
        <Form.Label>email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={emil} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={psw} />
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={click}>
        Login
      </Button>
      
    </Form>
    </Card.Body>
    </Card>

    </div>
  )
}

  
export default Signup