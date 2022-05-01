import Button from '@/components/styled/button'
import React, { useCallback, useRef, useState } from 'react'
import MoreInfoCard from '../more-info-card'
import PopUp from '../pop-up'

interface ExtraInfoButtonProps {
  thumbnail: string
  title: string
}
const ExtraInfoButton = (props: ExtraInfoButtonProps) => {
  const [showSongInfo, setShowSongInfo] = useState(false)
  const moreInfoRef = useRef<HTMLDivElement>(null)
  const handlePopUpClickOutside = useCallback(() => setShowSongInfo(false), [])
  const handleExtraInfoClick = () => {
    setShowSongInfo((prev) => !prev)
  }
  return (
    <>
      <div className="relative">
        {showSongInfo && (
          <PopUp
            onClickOutside={handlePopUpClickOutside}
            optionalRef={moreInfoRef}
          >
            <div className="absolute  -left-7 bottom-16">
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
          onClick={handleExtraInfoClick}
        >
          <i className="icon before:content-['\4a']"></i>
        </Button>
      </div>
    </>
  )
}

export default ExtraInfoButton