import React from 'react'
import { FaArrowRight } from "react-icons/fa";

function NextArrow(props) {
    const { onClick } = props;
  return (
    <>
           <div onClick={onClick} className=' cursor-pointer text-barnd w-[48px] h-[48px] rounded-full border-[1px] border-barnd flex justify-center items-center bg-[#fff]
            absolute top-1/2 right-0
           ' >
                
                    <FaArrowRight />

            </div>
    </>
  )
}

export default NextArrow