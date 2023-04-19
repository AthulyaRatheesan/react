import React from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
function Dom() {
  
  return (
    <div>
    <Navbar bg="primary" expand="lg" style={{paddingLeft:'130px',height:'81px'}}>
    <Container fluid>
      <Navbar.Brand href="#"> <img
      src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" 
      height='20'
      width='80'
      className="d-inline-block align-top"
      alt="flipkrt"
      style={{marginTop:'20px'}}
    />
    <br/>
    <div style={{fontSize:'12px',fontStyle:'italic',marginBottom:'20px',color:'white'}}>Explore
    <span className='pl' style={{color:'yellow',fontWeight:'bold'}}> Plus 
    <img
    src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" 
    height='10'
    alt="plus"
  />
  </span>
  </div>
  </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
      <Form className="d-flex">
        <div style={{marginLeft:'15px'}}>
        <Form.Control
            type="search"
            placeholder="Search for products, brands and more"
            className="me-2"
            aria-label="Search" style={{borderRadius:'0',width:'550px',fontFamily:'sans-serif',fontSize:'16px'}}
          />
          </div>
        </Form>
        <Button variant="light" className='button' >Login</Button>
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' ,marginLeft:'120px'}}
          navbarScroll
        >
       
          <Nav.Link href="/Objt" className='links' >Become a Seller</Nav.Link>
          
          <NavDropdown title="Link"  id="navbarScrollingDropdown">
            <NavDropdown.Item href="/Tablemap">Action</NavDropdown.Item>
            <NavDropdown.Item href="/Txtclrchange">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          
          <Nav.Link href="/Nws" className='links' >
          Cart
          </Nav.Link>
         
         </Nav>
        
       </Navbar.Collapse>
     </Container>
   </Navbar>
   
     
     </div>
   )
 }
 
    

export default Dom