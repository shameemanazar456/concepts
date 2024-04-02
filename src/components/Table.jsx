import React, { useState } from 'react'

function Table() {
    const [employee, setEmployee] = useState([
        {empName:'Ken', empAge:'30',empDesg:'manager'},
        {empName:'Priya', empAge:'23',empDesg:'Assistant HR'},
        {empName:'sen', empAge:'31',empDesg:'Graphic designer'},
        {empName:'Mathew', empAge:'28',empDesg:' frontend Developer'},
        {empName:'Soniya', empAge:'30',empDesg:'Backend developer'}

    ])
  return (
    <div>
      <table className='table shadow w-50 ms-5 '>
            <thead className='table-primary'>
                <tr>
                    <th className=''>Name</th>
                    <th>Age</th>
                    <th>Designation</th>
                </tr>
            </thead>
            <tbody>
                {employee.map((item)=>(
                <tr>
                    <td>{item.empName}</td>
                    <td>{item.empAge}</td>
                    <td>{item.empDesg}</td>
                </tr>))
                
                }
            </tbody>

      </table>
    </div>
  )
}

export default Table
