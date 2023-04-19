import React, { useContext } from 'react'
import { newcontext } from './Home'

function Home1() {
    const Sample=useContext(newcontext)
    const{name,setname,array}=Sample
    console.log(Sample);
  return (
    <div>
        {array.map((abc)=>{
            return(
                <div>
                <h1>{abc.name}</h1>
                <h1>{abc.age}</h1>
                
                </div>
            )
        })}
        <h1>{name}</h1>
        <button onClick={()=>setname("Adarsh")}>change</button>
    </div>
  )
}

export default Home1