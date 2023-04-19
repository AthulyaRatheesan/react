import React, { createContext, useState } from 'react'

const newcontext=createContext()
function Home({children}) {
    const [name, setname] = useState("Amal")
    const [array, setarray] = useState([{id:100,name:"Anupriya",qualification:"MSC"},{id:101,name:"Amaya",qualification:"BCA"}])
  return (
    <div>
        <newcontext.Provider value={{name,setname,array}}>
            {children}
        </newcontext.Provider>
    </div>
  )
}

export default Home
export {newcontext}