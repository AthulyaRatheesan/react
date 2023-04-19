import React, { useState } from 'react'

function Addtable() {
    const [name, setname] = useState([{No:100,Name:"Athulya",Age:22,Mark:99},{No:101,Name:"Anagha",Age:20,Mark:80}])
    const student=[{No:102,Name:"Amaya",Age:25,Mark:69},{No:103,Name:"maya",Age:28,Mark:79}]
    const item=()=>{
        setname([...name,...student])
    }
  return (
    <div>
     <table>
         <tr>
              <th>No</th>
              <th>Name</th>
              <th>Age</th>
              <th>Mark</th>
        </tr>
            {name.map((abc)=>
            <tr>
                <td>{abc.No}</td>
                <td>{abc.Name}</td>
                <td>{abc.Age}</td>
                <td>{abc.Mark}</td>
            </tr>
            
            
            )}

     </table>
       <button onClick={item}>Add student</button>

    </div>
  )
}

export default Addtable