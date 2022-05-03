import React from 'react'
import FloatRight from './float-right'
import FloatLeft from './float-left'
import FloatCenter from './float-center'

const Footer = () => {
  return (
    <div className="h-[90px] fixed bottom-0 right-0 left-0 bg-purple-footer border-t border-t-[#393243] px-[20px] flex lg:grid lg:grid-cols-8">
      <FloatLeft />
      <FloatCenter />
      <FloatRight />
    </div>
  )
}

export default Footer
