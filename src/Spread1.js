import React, { useState } from 'react'

function Spread1() {
    const arr=[{name:"athu",age:22,qualification:"Msc"},{name:"ammu",age:26,qualification:"Bsc"}]
    const [array,setarray]=useState(arr)
    const obj={name:"achu",age:25,qualification:"MCA"}
    const addItem=()=>{
    const add=[...arr,obj]
    setarray(add)
    }
  return (
    <>
    <div className='row'>
        {array.map((item)=>{
            return(
                <div style={{border:"1px solid black",width:"250px",float:"left",margin:"30px"}}>
                    <h1>{item.name}</h1>
                    <h1>{item.age}</h1>
                    <h1>{item.qualification}</h1>
                </div>    
            
            )
    }
    )
}

    </div>
    
    <div className='text-center'>
        
        <button className='btn btn-success' style={{padding:"10px 40px"}} onClick={addItem}>add item</button>
    </div>
    </>
    
    
  )
}

export default Spread1