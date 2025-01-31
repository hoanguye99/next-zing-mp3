import React, { ReactNode, useContext, useEffect, useState } from 'react'
import TopNavigation from '../top-navigation'
import TrackList from '../track-list'
import { ShowTrackListContext } from '@/components/context'

type BodyWithTopNavProps = {
  children: ReactNode
}

const BodyWithNav = ({ children }: BodyWithTopNavProps) => {
  return (
    <div className="flex-1 bg-purple-main">

      <div className="flex flex-col overflow-y-auto h-full">
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
  const [firstRender, setFirstRender] = useState(true)
  useEffect(() => {showTrackList && setFirstRender(false)}, [showTrackList])
  if (firstRender && !showTrackList) {
    return null
  }

  return <TrackList open={showTrackList}/>
}

export default BodyWithNav
