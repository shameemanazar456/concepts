import React, { useState } from 'react'

function User({d,a}) {

  const [color, setColor] = useState({
    color1:'red',
    color2:'orange',
    color3:'green'
  })

  const change=(clr)=>{
    /* setColor({color1:'red',
    color2:'orange',
    color3:clr}) */
    setColor({...color, color3:clr})
  }
    const handleClick =()=>{
        alert('Button Clicked')
    }
    const add = (user)=>{
        console.log(`${user} added successfully`);
    }

    const getEmail = (e)=>{
        console.log(e.target.value);
    }
  return (
    <div>
      <h1>inside user</h1>
      <h3>UserName : {d}</h3>
      <h3>Age : {a}</h3>
      <button onClick={handleClick}>CLick</button>
      <button onClick={()=>add('maxwell')}>Submit</button>

      <input type="email" placeholder='Email' onChange={(e)=>getEmail(e)} />
      <h1>Avaliable colours</h1>    
      <ul>
        <li>{color.color1}</li>
        <li>{color.color2}</li>
        <li>{color.color3}</li>
      </ul>
      <button onClick={()=>change('yellow')}>Change</button>
    </div>
  )
}

export default User


