import React from 'react'
import { Userstate } from './Context/Userprovider'

function Hii() {
    const {hi}=Userstate()
    
  return (
    <div>
{hi}
    </div>
  )
}

export default Hii