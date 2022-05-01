import Button from '@/components/styled/button'
import { SongInfoPosition } from '@/models/common/extra-info-button'
import React, { useCallback, useRef, useState } from 'react'
import MoreInfoCard from '../more-info-card'
import PopUp from '../pop-up'

interface ExtraInfoButtonProps {
  thumbnail: string
  title: string
}
const ExtraInfoButton = (props: ExtraInfoButtonProps) => {
  const [showSongInfo, setShowSongInfo] = useState<SongInfoPosition>(
    SongInfoPosition.NONE
  )
  const moreInfoRef = useRef<HTMLDivElement>(null)
  const handlePopUpClickOutside = useCallback(
    () => setShowSongInfo(SongInfoPosition.NONE),
    []
  )
  const handleExtraInfoClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (showSongInfo === SongInfoPosition.NONE) {
      if (typeof window !== 'undefined') {
        if (event.clientX >= window.innerWidth/2 && event.clientY >= window.innerHeight/2) {
          setShowSongInfo(SongInfoPosition.TOP_LEFT)
        } else if (event.clientX < window.innerWidth/2 && event.clientY >= window.innerHeight/2) {
          setShowSongInfo(SongInfoPosition.TOP_RIGHT)
        } else if (event.clientX >= window.innerWidth/2 && event.clientY < window.innerHeight/2) {
          setShowSongInfo(SongInfoPosition.BOTTOM_LEFT)
        } else if (event.clientX < window.innerWidth/2 && event.clientY < window.innerHeight/2) {
          setShowSongInfo(SongInfoPosition.BOTTOM_RIGHT)
        }
      }
    } else {
      setShowSongInfo(SongInfoPosition.NONE)
    }
  }
  return (
    <>
      <div className="relative">
        {showSongInfo !== SongInfoPosition.NONE && (
          <PopUp
            onClickOutside={handlePopUpClickOutside}
            optionalRef={moreInfoRef}
          >
            <div className={`absolute z-30 ${showSongInfo}`}>
              <MoreInfoCard
                imageURL={props.thumbnail}
                songName={props.title}
                likes={3500}
                listens={14000}
              />
            </div>
          </PopUp>
        )}
      </div>
      <div ref={moreInfoRef}>
        <Button
          className="ml-2"
          hover="Xem thêm"
          onClick={(e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleExtraInfoClick(e)}
        >
          <i className="icon before:content-['\4a']"></i>
        </Button>
      </div>
    </>
  )
}

export default ExtraInfoButton
