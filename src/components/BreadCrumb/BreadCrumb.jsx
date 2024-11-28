import React from 'react'
import { Link } from 'react-router-dom'

function BreadCrumb() {
  return (
    <>
        <ul className='flex justify-center items-center mt-2'>
            <li className='text-[16px] font-medium font-poppins text-[#000] '><Link to='/'>Home</Link></li>
            <li><Link to='/Shop'>Shop</Link></li>
        </ul>
    </>
  )
}

export default BreadCrumb