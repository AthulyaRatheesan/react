import React, { useState } from 'react'
// import { Button } from 'react-bootstrap'

function State() {
    const [num, setnum] = useState(0)
    const add=()=>{
      setnum(num+1)
    }
    const sub=()=>{
      if(num<=0){
        alert('cannot decreament')
      }else{
        setnum(num-1)
      }
    }
  return (
    <div>
       <h1>number is{num}</h1>
       <button onClick={add}>+</button>
       <button onClick={sub}>-</button>
    </div>
  )
}

export default State