import React from 'react'
import FloatRight from './float-right'
import FloatLeft from './float-left'
import FloatCenter from './float-center'

const Footer = () => {
  return (
    <div className="h-[90px] bg-purple-footer px-[20px] flex justify-between items-center">
      <FloatLeft />
      <FloatCenter />
      <FloatRight />
    </div>
  )
}

export default Footer
