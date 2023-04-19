import React, { useState } from 'react'

function Txtclrchange() {
    const [color,setcolor] = useState("black")
    const clr={
          color:color
    
     }
  return (
    <div>
    <h1 style={clr}>Text color</h1>
    <button onClick={()=>{setcolor('green')}} >Green</button>
    <button onClick={()=>{setcolor('red')}} >Red</button>
    <button onClick={()=>{setcolor('Blue')}} >Blue</button>
   <button onClick={()=>{setcolor('Yellow')}} >Yellow</button>
    
    
    </div>
  )
}


export default Txtclrchange