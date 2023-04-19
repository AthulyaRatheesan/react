import React, { createContext, useContext, useState } from 'react'


    const UserContext=createContext()
    const Userprovider=({children})=>{
        let hi="hellow"
        let a="apple"
        const [b, setfirst] = useState({id:101,name:"athulya",img:"https://media.istockphoto.com/id/1253222718/photo/abstract-cannabis-fan-leaf-background.jpg?s=612x612&w=0&k=20&c=8W-_bhIFECWWGXloBmGtPQPixM3yp8MVzLCwzyZreyA="})
        const [c, set] = useState([{id:101,name:"ammu"},{id:102,name:"achu"}])
    
  return (
    <div>
        <UserContext.Provider value={{hi,a,b,c}}>
        {children}
        </UserContext.Provider>
    
    </div>
  )
}
export const Userstate=()=>{
    return useContext(UserContext)
}

export default Userprovider