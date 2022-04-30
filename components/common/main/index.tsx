import React, { ReactNode } from 'react'
import BodyWithNav from '../body-with-nav'
import SideBar from '../side-bar'

type MainProps = {
  children: ReactNode
}

const Main = ({ children }: MainProps) => {
  return (
    <div className="flex flex-row h-span">
      <SideBar />
      <BodyWithNav>{children}</BodyWithNav>
    </div>
  )
}

export default Main
