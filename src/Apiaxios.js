import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Apiaxios() {
    const [product, setproduct] = useState([])
    useEffect(() => {
        axios.get("https://dummyjson.com/products").then((res)=>setproduct(res.data.products))
      
    }, [])
    console.log(product)
  return (
    <div className='row' style={{justifyContent:"center"}}>
        
    {product.map((abc)=>{
      return(
        <Card style={{ width: '18rem',float:"left",margin:"20px" }}>
      <Card.Img style={{height:"200px"}} variant="top" src={abc.images[0]} />
      <Card.Body>
        <Card.Title>{abc.brand}</Card.Title>
        <Card.Title>{abc.rating}</Card.Title>
        <Card.Text>
          {abc.category}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    )  
    
    })}
    </div>
    )
}

export default Apiaxios