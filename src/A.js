import React from 'react'
import { Userstate } from './Context/Userprovider'

function A() {
    const{c}=Userstate()
  return (
    c.map((abc)=>
    <div>
        <h4>{abc.id} and {abc.name}</h4>
    </div>
  ))
}

export default A