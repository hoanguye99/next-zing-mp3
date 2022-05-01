import React, { useContext, useEffect, useState } from 'react'
import { TrackListType } from '@/models/layout'
import NextView from './next-view'
import RecentView from './recent-view'
import styles from '@/styles/layout/track-list.module.scss'
import { ShowTrackListContext } from '@/components/context'

// interface TrackListProps {
//   open: boolean
// }

const TrackList = () => {
  const showTrackList = useContext(ShowTrackListContext);
  const [firstRender, setFirstRender] = useState(true)
  const [trackListType, setTrackListType] = useState<TrackListType>(
    TrackListType.PLAYING_NEXT
  )
  useEffect(() => setFirstRender(false), [])
  if ((firstRender && !showTrackList)) {
    console.log(firstRender);
    return null
  }
  // console.log(showTrackList);
  console.log('return original');
  return (
    <div className={showTrackList ? styles['track-list-open'] : styles['track-list-close']}>
      <div className="bg-[#120822] w-[330px] overflow-y-auto scroll-none absolute inset-y-0 right-0">
        <div className="flex justify-center text-sm gap-6 my-3">
          <button
            onClick={() => setTrackListType(TrackListType.PLAYING_NEXT)}
            className={`pb-1.5 px-2 ${
              trackListType === TrackListType.PLAYING_NEXT
                ? 'font-semibold border-b-4 border-b-[#7200a1]'
                : 'opacity-50'
            }`}
          >
            Danh sách phát
          </button>
          <button
            onClick={() => setTrackListType(TrackListType.RECENT)}
            className={`pb-1.5 px-2 ${
              trackListType === TrackListType.RECENT
                ? 'font-semibold border-b-4 border-b-[#7200a1]'
                : 'opacity-50'
            }`}
          >
            Nghe gần đây
          </button>
        </div>
        <View trackListType={trackListType} />
      </div>
    </div>
  )
}

interface ViewProps {
  trackListType: TrackListType
}
const View = ({ trackListType }: ViewProps) => {
  switch (trackListType) {
    case TrackListType.PLAYING_NEXT:
      return <NextView />
    case TrackListType.RECENT:
      return <RecentView />
  }
}

export default TrackList

// #2A2039
