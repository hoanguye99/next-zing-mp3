import React, { createContext, useContext, useState } from 'react'

export const ShowTrackListContext = createContext(false)
export const SetShowTrackListContext = createContext<React.Dispatch<
  React.SetStateAction<boolean>
> | null>(null)
type TrackListProviderType = {
  children: React.ReactNode
}

export const TrackListProvider = ({ children }: TrackListProviderType) => {
  const [showTrackList, setShowTrackList] = useState(false)
  return (
    <ShowTrackListContext.Provider value={showTrackList}>
      <SetShowTrackListContext.Provider value={setShowTrackList}>
        {children}
      </SetShowTrackListContext.Provider>
    </ShowTrackListContext.Provider>
  )
}
