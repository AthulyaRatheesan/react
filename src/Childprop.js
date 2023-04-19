import React from 'react'

function Childprop({item,obj,arr,val}) {
  console.log(val)
  return (
    
    <div>
      <h1>{item}</h1>
      <button onClick={()=>val("worked")}>change</button>
      <h2>{obj.name}</h2>
      <h2>{obj.age}</h2>
      
      
        
          {arr.map((arr)=>{return(

      <div>
      <h2>{arr.name}</h2>
      <h2>{arr.mark}</h2>
    </div>
  )})}
  </div>
  )
}

export default Childprop