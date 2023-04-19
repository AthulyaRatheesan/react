import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Carousel } from 'react-bootstrap';

function Newapi() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => setProduct(res.data.products));
  }, []);

  return (
    <Carousel>
      {product.map((abc) => {
        return (
          <Carousel.Item>
            <Card style={{ width: '18rem' }}>
              <Card.Img style={{ height: '200px' }} variant="top" src={abc.images[0]} />
              <Card.Body>
                <Card.Title>{abc.brand}</Card.Title>
                <Card.Title>{abc.rating}</Card.Title>
                <Card.Text>{abc.category}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default Newapi;