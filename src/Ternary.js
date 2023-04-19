import React, { useState } from 'react'
import Sample from './Sample'
function Ternary() {
  
 const [Hide, setHide] = useState(false)
    const disply = () =>{
        setHide((gdd)=>!gdd)
    }
  return (
   
    <div>
    {Hide? <Sample/>:""}
    <button onClick={disply}>{Hide === true?"Hide":"Show"}</button> 
    </div>
  )
}



export default Ternary