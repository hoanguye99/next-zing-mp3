import Button from '@/components/styled/button'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import PopUp from '@/components/common/pop-up'
import styles from '@/styles/footer/float-left.module.scss'

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
            <div className="absolute w-[284px] -left-7 bottom-16 flex flex-col bg-[#432275] rounded-lg">
              <div className="p-3">
                <div className="flex gap-3">
                  <Image
                    layout="fixed"
                    src="/images/footer-img.webp"
                    className="rounded"
                    height={40}
                    width={40}
                  />
                  <div className="flex flex-col text-sm truncate">
                    <p className="text-song">Feels with me</p>
                    <div className="flex items-center gap-2 text-[#A0A0A0]">
                      <i className="icon before:content-['\3b']"></i>
                      <span className="text-artists">3K</span>
                      <i className="icon before:content-['\3b']"></i>
                      <span className="text-artists">102K</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row rounded-lg bg-[#573884] mt-3">
                  <button className="flex-1 rounded-lg bg-[#573884] hover:bg-[#664A8E] transition ease-in-out duration-75 flex flex-col justify-center items-center px-3 py-2">
                    <i className="icon before:content-['\67']"></i>
                    <p className="text-xs">Tải xuống</p>
                  </button>
                  <button className="flex-1 rounded-lg bg-[#573884] hover:bg-[#664A8E] transition ease-in-out duration-75 flex flex-col justify-center items-center px-3 py-2">
                    <i className="icon before:content-['\ea07']"></i>
                    <p className="text-xs">Lời bài hát</p>
                  </button>
                  <button className="flex-1 rounded-lg bg-[#573884] hover:bg-[#664A8E] transition ease-in-out duration-75 flex flex-col justify-center items-center px-3 py-2">
                    <i className="icon before:content-['\74']"></i>
                    <p className="text-xs">Chặn</p>
                  </button>
                </div>
              </div>

              <div className="flex flex-col">
                <button className="px-3 py-2 flex gap-3 hover:bg-[#573884]">
                  <i className="icon before:content-['\29']"></i>
                  <p className="text-options">Cài đặt nhạc chờ</p>
                </button>
                <button className="px-3 py-2 flex gap-3 hover:bg-[#573884]">
                  <i className="icon before:content-['\ea09']"></i>
                  <p className="text-options">Thêm vào playlist</p>
                </button>
                <button className="px-3 py-2 flex gap-3 hover:bg-[#573884]">
                  <i className="icon before:content-['\46']"></i>
                  <p className="text-options">Phát cùng lời bài hát</p>
                </button>
                <button className="px-3 py-2 flex gap-3 hover:bg-[#573884]">
                  <i className="icon before:content-['\71']"></i>
                  <p className="text-options">Bình luận</p>
                </button>
                <button className="px-3 py-2 flex gap-3 hover:bg-[#573884]">
                  <i className="icon before:content-['\48']"></i>
                  <p className="text-options">Sao chép link</p>
                </button>
                <button className="px-3 py-2 flex gap-3 hover:bg-[#573884] rounded-b-lg">
                  <i className="icon before:content-['\2c']"></i>
                  <p className="text-options">Chia sẻ</p>
                </button>
              </div>
            </div>
          </PopUp>
        )}
      </div>
    </>
  )
}

export default FloatLeft
