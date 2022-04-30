import React, { ReactNode, useContext } from 'react'
import TopNavigation from '../top-navigation'
import TrackList from '../track-list'
import { ShowTrackListContext } from '@/components/context'

type BodyWithTopNavProps = {
  children: ReactNode
}

const BodyWithNav = ({ children }: BodyWithTopNavProps) => {
  return (
    <div className="flex-1 bg-purple-main flex">

      <div className="flex-1 flex flex-col w-body overflow-y-auto">
        <TopNavigation />
        <div className="flex-1">
          <div>{children}</div>
        </div>
      </div>


      <ShowTrackList />


    </div>
  )
}

const ShowTrackList = () => {
  const showTrackList = useContext(ShowTrackListContext)
  return showTrackList ? <TrackList /> : null
}

export default BodyWithNav
