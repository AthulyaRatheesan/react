import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BsFillCartFill} from 'react-icons/bs'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import './Flip.css'

function Flip() {
  return (
    <div className='.ab'>
        <Navbar bg="primary" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
            <a href="#">
            <img  width="75" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"></img></a><br/>
             <p class="exp"><i>Explore</i>
             <span class="plus"><i> plus</i></span>
            <img  width="10"src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"></img></p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          ><Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="search"
            aria-label="Search"
          />
          <Button variant="outline-success">Login</Button>
        </Form>
            <Nav.Link href="#action1">Become a seller</Nav.Link>
            {/* <Nav.Link href="#action2">more</Nav.Link> */}
            <NavDropdown title="more" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                more
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                more
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action1"> <BsFillCartFill/>cart</Nav.Link>

           
            {/* <Nav.Link href="#" disabled>
              cart
            </Nav.Link> */}
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Carousel className='hei'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROnye0TQdbFw0m4U65oB9jP7Syvw-lFVW4gw&usqp=CAU"
          alt="First slide" height="500"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2GX8a0ByvEAzXkWbIdqUZHVJSbPZprIZgvw&usqp=CAU"
          alt="Second slide" height="500"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLkFOvilOcqtCMD0O_IyO-L_v9FfVFFu3srA&usqp=CAU"
          alt="Third slide" height="500"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://d2x02matzb08hy.cloudfront.net/img/clothing/hero_image/781223696/Untitled_design__79_.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjl_3q1Z1IEf_N6QnH_w50FJme6rGy28ktQ&usqp=CAU" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1cObMq1ZfiChXZn4KJegjHztIW7QEX2_f2sYieZfoGL-UXWHC_m3saTkELZ95MgUS4XY&usqp=CAU" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      
    </CardGroup>
    
    </div>
  )
}

export default Flip