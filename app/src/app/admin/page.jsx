'use client'
import React, { useEffect } from 'react'
import CustomerTable from '../components/CustomerTable/CustomerTable';

const page = () => {

    useEffect(()=>{
       console.log(localStorage.getItem("token")); 
    })

  return (
    <div>Admin page

      <CustomerTable/>
    </div>
  )
}

export default page