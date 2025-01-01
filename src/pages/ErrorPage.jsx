import React from 'react'
import Lottie from "lottie-react";
import error from '../../public/animation/error.json'

function ErrorPage() {
  return (
    <>
        <div className='flex justify-center items-center h-screen'>
            <Lottie animationData={error}/>
        </div>
    </>
  )
}

export default ErrorPage