import React, { useState } from 'react'
import Childprop from './Childprop'

function Props1() {
    const [value, setvalue] = useState("welcome")
    const [obj, setobj] = useState({name:"athu",age:22})
    const [arr, setarr] = useState([{name:"ammu",id:100,mark:69},{name:"anu",id:101,mark:89}])
  return (
    <div>
      <Childprop item={value} obj={obj} arr={arr} val={setvalue}/>  
    </div>
  )
}

export default Props1