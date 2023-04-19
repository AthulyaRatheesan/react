import React, { useEffect, useState } from 'react'

function Useeffect() {
  
 const [msg, setmsg] = useState('mesg')
    useEffect(() => {
        alert(`hlo ${msg}`)
    }, [msg])
 
 
 
  return (
    <div>
    <h1>{msg}</h1>
    <button onClick={()=>setmsg('hllooo')}>change</button>
    </div>
  )
}




export default Useeffect