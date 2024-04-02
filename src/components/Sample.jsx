import React, { useState } from 'react'

function Sample() {
    const [userDetails, setUserDetails]=useState({username:"",
    password:"",
    mobile:"",
    state:""
})
console.log(userDetails);
  return (
    <div>
      <form className='w-25 border p-3 border-primary rounded ms-5 mb-5 mt-5'>
        <h3 className='text-center'>Form</h3>
            <input type="text" placeholder='UserName' className='form-control' onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})} /><br/>

            <input type="text" name="" id="" placeholder='Password' className='form-control' onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})}/><br/>

            <input type="text" placeholder='Mobile Number' className='form-control' onChange={(e)=>setUserDetails({...userDetails,mobile:e.target.value})} /><br/>
            <input type="text" placeholder='State' className='form-control' onChange={(e)=>setUserDetails({...userDetails,state:e.target.value})} /><br/>
      </form>
    </div>
  )
}

export default Sample
