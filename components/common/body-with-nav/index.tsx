import React, { ReactNode } from 'react'
import TopNavigation from '../top-navigation'

type BodyWithTopNavProps = {
  children: ReactNode
}

const BodyWithNav = ({ children }: BodyWithTopNavProps) => {
  return (
    <div className="bg-purple-main flex-1 flex flex-col">
      <TopNavigation />
      <div className="flex-1">{children}</div>
    </div>
  )
}

export default BodyWithNav
