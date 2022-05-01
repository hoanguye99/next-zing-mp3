import Button from '@/components/styled/button'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import PopUp from '@/components/common/pop-up'
import styles from '@/styles/view-layout/footer/float-left.module.scss'
import MoreInfoCard from '../../common/more-info-card'

const FloatLeft = () => {
  const [showSongInfo, setShowSongInfo] = useState(false)
  const [scrollSongName, setScrollSongName] = useState(false)
  const songNameRef = useRef<HTMLParagraphElement>(null)
  const moreInfoRef = useRef<HTMLDivElement>(null)
  const handlePopUpClickOutside = useCallback(() => setShowSongInfo(false), [])
  const handleExtraInfoClick = () => {
    setShowSongInfo((prev) => !prev)
  }

  useEffect(() => {
    if (!songNameRef.current) throw Error('songNameRef is not assigned')

    if (songNameRef.current.scrollWidth > songNameRef.current.clientWidth) {
      setScrollSongName(true)
    }
  })

  return (
    <>
      <div className="flex items-center flex-[2_2_0%] truncate">
        <div>
          <Image
            layout="fixed"
            src="/images/footer-img.webp"
            className="rounded"
            height={64}
            width={64}
          />
        </div>
        <div className="ml-3 truncate">
          <div className={scrollSongName ? styles['scrolling-title'] : ''}>
            <p ref={songNameRef} className="text-song">
              Feels With Me
            </p>
          </div>
          <p className="text-artists truncate">
            Thiều Bảo Trâm, Jin Tuấn Nam, Sin Thiện Tâm, WinC, HOA HỒNG ĐẠI
            MUSIC
          </p>
        </div>
        <div className="ml-6 flex">
          <Button className="" hover="Thêm vào thư viện">
            <i className="icon before:content-['\3b']"></i>
          </Button>
          <div ref={moreInfoRef}>
            <Button
              className="ml-2"
              hover="Xem thêm"
              onClick={handleExtraInfoClick}
            >
              <i className="icon before:content-['\4a']"></i>
            </Button>
          </div>
        </div>
      </div>
      <div className="relative">
        {/* {showSongInfo && (
          <SongInfo
            setShowSongInfo={setShowSongInfo}
            moreInfoRef={moreInfoRef}
          />
        )} */}
        {showSongInfo && (
          <PopUp
            onClickOutside={handlePopUpClickOutside}
            optionalRef={moreInfoRef}
          >
            <div className="absolute -left-7 bottom-16">
              <MoreInfoCard
                imageURL="/images/footer-img.webp"
                songName="Feels With Me"
                likes={3500}
                listens={14000}
              />
            </div>
          </PopUp>
        )}
      </div>
    </>
  )
}

export default FloatLeft
