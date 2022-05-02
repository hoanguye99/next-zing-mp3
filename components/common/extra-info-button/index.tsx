import Button from '@/components/styled/button'
import { ShowSongInfoObj } from '@/models/common/extra-info-button'
import React, { useCallback, useRef, useState } from 'react'
import MoreInfoCard from '../more-info-card'
import PopUp from '../pop-up'

interface ExtraInfoButtonProps {
  thumbnail: string
  title: string
  className?: string
}
const ExtraInfoButton = (props: ExtraInfoButtonProps) => {
  const [showSongInfo, setShowSongInfo] = useState<ShowSongInfoObj>({
    status: 0,
    style: {},
  })
  const moreInfoRef = useRef<HTMLDivElement>(null)
  const handlePopUpClickOutside = useCallback(
    () => setShowSongInfo({ status: 0, style: {} }),
    []
  )
  const handleExtraInfoClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (showSongInfo.status === 0) {
      if (typeof window !== 'undefined') {
        console.log(
          event.clientX,
          event.clientY,
          window.innerWidth / 2,
          window.innerHeight / 2
        )
        if (
          event.clientX >= window.innerWidth / 2 &&
          event.clientY >= window.innerHeight / 2
        ) {
          // 4 / 4 TOP LEFT
          setShowSongInfo({
            status: 1,
            style: {
              bottom: `${window.innerHeight - event.clientY - 15}px`,
              right: `${window.innerWidth - event.clientX + 10}px`,
            },
          })
        } else if (
          event.clientX < window.innerWidth / 2 &&
          event.clientY >= window.innerHeight / 2
        ) {
          // 3 / 4
          setShowSongInfo({
            status: 1,
            style: {
              bottom: `${window.innerHeight - event.clientY + 15}px`,
              left: `${event.clientX + 10}px`,
            },
          })
        } else if (
          event.clientX >= window.innerWidth / 2 &&
          event.clientY < window.innerHeight / 2
        ) {
          // 2 / 4
          setShowSongInfo({
            status: 1,
            style: {
              top: `${event.clientY - 15}px`,
              right: `${window.innerWidth - event.clientX + 10}px`,
            },
          })
        } else if (
          event.clientX < window.innerWidth / 2 &&
          event.clientY < window.innerHeight / 2
        ) {
          // 1 / 4
          setShowSongInfo({
            status: 1,
            style: {
              top: `${event.clientY - 15}px`,
              left: `${event.clientX + 10}px`,
            },
          })
        }
      }
    } else {
      setShowSongInfo({ status: 0, style: {} })
    }
  }
  return (
    <>
      {showSongInfo.status === 1 && (
        <PopUp
          onClickOutside={handlePopUpClickOutside}
          optionalRef={moreInfoRef}
        >
          <div style={showSongInfo.style} className={`fixed z-30`}>
            <MoreInfoCard
              imageURL={props.thumbnail}
              songName={props.title}
              likes={3500}
              listens={14000}
            />
          </div>
        </PopUp>
      )}
      <div ref={moreInfoRef}>
        <Button
          className={`ml-2 ${props.className ?? ''}`}
          hover="Xem thêm"
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            handleExtraInfoClick(e)
          }
        >
          <i className="icon before:content-['\4a']"></i>
        </Button>
      </div>
    </>
  )
}

export default ExtraInfoButton
