import Button from '@/components/styled/button'
import { useContext, useRef, useState } from 'react'
import RangeSlider from './range-slider'
import styles from '@/styles/footer/float-right.module.scss'
import Portal from '@/components/portal'
import { SetShowTrackListContext } from '@/components/context'

const FloatRight = () => {
  const setShowTrackList = useContext(SetShowTrackListContext);
  return (
    <div className="flex-[2_2_0%] flex gap-2 justify-end items-center">
      <Lyrics />
      <VolumeControl />
      <div className="border-[1px] h-7 text-[#2A2533] mx-1 xl:ml-4"></div>
      <Button onClick={() => setShowTrackList!(prev => !prev)} className="" hover="Danh sách phát">
        <i className="icon before:content-['\49']"></i>
      </Button>
    </div>
  )
}

const Lyrics = () => {
  const [showLyricsModal, setShowLyricsModal] = useState(false)
  const handleLyricsClick = () => {
    setShowLyricsModal(prev => !prev)
  }
  return (
    <>
      <Button className="" onClick={handleLyricsClick} hover="Xem lời bài hát">
        <i className="icon before:content-['\46']"></i>
      </Button>
      {showLyricsModal && (
        <Portal>
          <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white-main">
            Some content here Some content hereSome content hereSome content hereSome content hereSome content here Some content hereSome content hereSome content hereSome content hereSome content hereSome content here
          </div>
        </Portal>
      )}
    </>
  )
}

const VolumeControl = () => {
  const [volume, setVolume] = useState(100)
  const volumeRef = useRef<number>(volume)
  const handleVolumeClick = () => {
    if (volume !== 0) {
      volumeRef.current = volume
      setVolume(0)
    } else {
      setVolume(volumeRef.current)
    }
  }
  return (
    <div className={styles['volume']}>
      <Button onClick={handleVolumeClick} className="">
        <i className="icon before:content-['\e009']"></i>
      </Button>
      <div className={styles['volume__tmp-bg']}></div>
      {/* <div className="absolute bottom-12 right-1 hidden group-hover:block">
        fsdf
      </div> */}
      <div className={styles['volume__slider']}>
        <RangeSlider
          value={volume}
          onChange={(nextValue: number) => setVolume(nextValue)}
        />
      </div>
    </div>
  )
}

export default FloatRight
