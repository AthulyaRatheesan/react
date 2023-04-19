import React from 'react'
import { Userstate } from './Context/Userprovider'

function B() {
    const {b}=Userstate()
  return (
    <div>
        <img src={b.img}/>
        <h4>{b.id} and {b.name} </h4>
    </div>
  )
}

export default B