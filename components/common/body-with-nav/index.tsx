import React, { ReactNode } from 'react'
import TopNavigation from '../top-navigation'
import TrackList from '../track-list'

type BodyWithTopNavProps = {
  children: ReactNode
}

const BodyWithNav = ({ children }: BodyWithTopNavProps) => {
  return (
    <div className="flex-1 bg-purple-main relative">

      <div className="flex flex-col overflow-y-auto">
        <TopNavigation />
        <div className="flex-1">
          <div>{children}</div>
        </div>
      </div>

      <TrackList />

    </div>
  )
}


export default BodyWithNav
