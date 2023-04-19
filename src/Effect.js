import React, { useEffect, useState } from 'react'

function Effect() {
    const [name, setname] = useState("athu")
    useEffect(() => {
      alert("The name is")
    }, [name])
    
  return (
    <div>
        <h1>{name}</h1>
        <button onClick={()=>setname("anu")}>change name</button>
    </div>
  )
}

export default Effect