'use client'
import React, { useEffect } from 'react'
import CustomerTable from '../components/CustomerTable/CustomerTable';
import HomePage from '../components/Home/HomePage';

const page = () => {

    useEffect(()=>{
       console.log(localStorage.getItem("token")); 
    })

  return (
    <div>Admin page

      {/* <CustomerTable/> */}

      <HomePage />
    </div>
  )
}

export default page