import React from 'react'
import { AiOutlineCloseSquare } from 'react-icons/ai'
import CardSidebar from '../CardSidebar/CardSidebar'

function CardAdd() {
  return (
    <>
        <div className=' fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.20)]'>
            <div className='w-fit py-7 px-6 bg-[#fff] ml-auto'>
                <div className="flex justify-between items-center">
                    <h2 className='text-2xl font-semibold font-poppins text-[#000]'>Shopping Cart</h2>
                    <AiOutlineCloseSquare className='text-2xl text-secondary' />
                </div>
                <div>
                    <CardSidebar/>
                </div>
            </div>
        </div>
    </>
  )
}

export default CardAdd