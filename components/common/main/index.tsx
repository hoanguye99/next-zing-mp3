import { ShowTrackListContext } from '@/components/context'
import React, { ReactNode, useContext, useState } from 'react'
import BodyWithNav from '../body-with-nav'
import SideBar from '../side-bar'
import TrackList from '../track-list'

type MainProps = {
  children: ReactNode
}

const Main = ({ children }: MainProps) => {
  return (
    <div className="flex-1 flex flex-row w-screen">
      <SideBar />
      <BodyWithNav>{children}</BodyWithNav>
      <ShowTrackList />
    </div>
  )
}

const ShowTrackList = () => {
  const showTrackList = useContext(ShowTrackListContext)
  return showTrackList ? <TrackList /> : null
}

export default Main
