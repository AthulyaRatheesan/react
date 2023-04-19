import React, { useState } from 'react'
import './Tablemap.css'
function Tablemap() {
    const [fruits, setfirst] = useState([{name:"apple",count:"2"},{name:"orange",count:"7"}])
  return (
    <div>
      <table>
        <tr>
            <th>name</th>
            <th>count</th>
        </tr>
        
        {fruits.map((display)=>
        <tr>
            <td>{display.name}</td>
            <td>{display.count}</td>
        </tr>
        )
        }
    
      </table>

    </div>
  )
}

export default Tablemap