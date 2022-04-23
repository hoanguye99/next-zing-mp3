import React, { ReactNode } from 'react'
import BodyWithNav from '../body-with-nav'
import SideBar from '../side-bar'

type MainProps = {
  children: ReactNode
}

const Main = ({ children }: MainProps) => {
  return (
    <div className="flex-1 flex flex-row w-screen">
      <SideBar />
      <BodyWithNav>{children}</BodyWithNav>
    </div>
  )
}

export default Main
