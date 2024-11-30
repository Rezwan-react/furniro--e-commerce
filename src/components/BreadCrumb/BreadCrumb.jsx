import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdArrowForwardIos } from "react-icons/md";

function BreadCrumb() {

  const location = useLocation()
  const path = location.pathname.split("/")[1]




  return (
    <>
        <ul className='flex justify-center items-center gap-2 mt-2'>
            <li className='text-[16px] font-medium font-poppins text-[#000] '><Link to='/'>Home</Link></li>
            <li><MdArrowForwardIos /></li>
            <li className='text-[16px] font-light font-poppins text-[#000] capitalize '><Link to='/Shop'>{path}</Link></li>
        </ul>
    </>
  )
}

export default BreadCrumb