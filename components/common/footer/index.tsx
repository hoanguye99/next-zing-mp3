import React, { useState, useRef, useEffect, RefObject } from 'react'
import Image from 'next/image'
import Button from '@/components/styled/button'
import { RepeatStatus, ShuffleStatus } from '@/models/layout'

const Footer = () => {
  return (
    <div className="h-[90px] bg-purple-footer px-[20px] flex justify-between items-center">
      <FloatLeft />
      <FloatCenter />
      <FloatRight />
    </div>
  )
}

const FloatLeft = () => {
  const [showSongInfo, setShowSongInfo] = useState(false)
  const [scrollSongName, setScrollSongName] = useState(false)
  const songNameRef = useRef<HTMLParagraphElement>(null)
  const moreInfoRef = useRef<HTMLDivElement>(null)

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
      <Image
        layout="fixed"
        src="/images/footer-img.webp"
        className="rounded"
        height={64}
        width={64}
      />
      <div className="flex items-center flex-[2_2_0%] truncate">
        <div className="ml-3 truncate ">
          <div className={scrollSongName ? 'scrolling-title' : ''}>
            <p ref={songNameRef} className="text-sm">
              Feels With Me
            </p>
          </div>
          <p className="text-xs text-white-secondary ">
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
        {showSongInfo && (
          <SongInfo
            setShowSongInfo={setShowSongInfo}
            moreInfoRef={moreInfoRef}
          />
        )}
      </div>
    </>
  )
}

const FloatRight = () => {
  return (
    <div className="flex-[2_2_0%] flex gap-2 justify-end items-center">
      <Button className="" hover="Xem lời bài hát">
        <i className="icon before:content-['\46']"></i>
      </Button>
      <Button className="before:block before:absolute before:h-10 before:inset-x-0 before:-top-5 relative group">
        <i className="icon before:content-['\e009']"></i>
        <div className="absolute bottom-12 right-1 hidden group-hover:block">fsdf</div>
      </Button>
      <div className="border-[1px] h-7 text-[#2A2533] mx-1"></div>
      <Button className="" hover="Danh sách phát">
        <i className="icon before:content-['\49']"></i>
      </Button>
    </div>
  )
}

const FloatCenter = () => {
  const [shuffleState, setShuffleState] = useState<ShuffleStatus>(
    ShuffleStatus.DISABLE
  )
  const [repeatState, setRepeatState] = useState<RepeatStatus>(
    RepeatStatus.DISABLE
  )

  function getShuffleButton() {
    switch (shuffleState) {
      case ShuffleStatus.DISABLE:
        return (
          <Button
            className=""
            hover="Bật phát ngẫu nhiên"
            onClick={() => setShuffleState(ShuffleStatus.ENABLE)}
          >
            <i className="icon before:content-['\e003']"></i>
          </Button>
        )
      case ShuffleStatus.ENABLE:
        return (
          <Button
            className="text-[#C05EE9]"
            hover="Tắt phát ngẫu nhiên"
            onClick={() => setShuffleState(ShuffleStatus.DISABLE)}
          >
            <i className="icon before:content-['\e003']"></i>
          </Button>
        )
      default:
        break
    }
  }

  function getRepeatButton() {
    switch (repeatState) {
      case RepeatStatus.DISABLE:
        return (
          <Button
            className=""
            hover="Bật phát lại tất cả"
            onClick={() => setRepeatState(RepeatStatus.REPEAT_ALL)}
          >
            <i className="icon before:content-['\59']"></i>
          </Button>
        )
      case RepeatStatus.REPEAT_ALL:
        return (
          <Button
            className="text-[#C05EE9]"
            hover="Bật phát lại một bài"
            onClick={() => setRepeatState(RepeatStatus.REPEAT_ONE)}
          >
            <i className="icon before:content-['\59']"></i>
          </Button>
        )
      case RepeatStatus.REPEAT_ONE:
        return (
          <Button
            className="text-[#C05EE9]"
            hover="Tắt phát lại"
            onClick={() => setRepeatState(RepeatStatus.DISABLE)}
          >
            <i className="icon before:content-['\5a']"></i>
          </Button>
        )
      default:
        break
    }
  }

  function getNextSongInfo() {
    return (
      <div className="flex flex-col p-1 gap-2 w-[16rem]">
        <div className="text-sm text-white-secondary">Phát tiếp theo</div>
        <div className="flex">
          <img
            src="/images/footer-img.webp"
            className="rounded w-[40px]"
            height={40}
            width={40}
          />
          <div className="ml-3 truncate ">
            <p className="text-base">Feels With Me</p>
            <p className="text-sm text-white-secondary ">
              Thiều Bảo Trâm, Jin Tuấn Nam, Sin Thiện Tâm, WinC, HOA HỒNG ĐẠI
              MUSIC
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-[4_4_0%] flex flex-col justify-center items-center">
      <div className="flex items-center">
        <div className="flex gap-5">
          {getShuffleButton()}
          <Button className="">
            <i className="icon before:content-['\56']"></i>
          </Button>
        </div>
        <button className="text-[40px] hover:text-[#C05EE9] transition ease-in-out duration-150 mx-5">
          <i className="icon before:content-['\5f']"></i>
        </button>
        <div className="flex gap-5">
          <Button className="" hover={getNextSongInfo()}>
            <i className="icon before:content-['\4e']"></i>
          </Button>
          {getRepeatButton()}
        </div>
      </div>
      <div>Its been a minute</div>
    </div>
  )
}

const SongInfo = ({
  setShowSongInfo,
  moreInfoRef,
}: {
  setShowSongInfo: React.Dispatch<React.SetStateAction<boolean>>
  moreInfoRef: React.RefObject<HTMLDivElement>
}) => {
  const songInfoRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (
        songInfoRef.current &&
        !songInfoRef.current.contains(event.target as HTMLElement) &&
        moreInfoRef.current &&
        !moreInfoRef.current.contains(event.target as HTMLElement)
      ) {
        setShowSongInfo(false)
      }
    }
    // Bind the event listener
    window.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      window.removeEventListener('mousedown', handleClickOutside)
    }
  }, [songInfoRef, moreInfoRef])

  return (
    <div
      ref={songInfoRef}
      className="absolute w-[284px] -left-7 bottom-16 flex flex-col bg-[#432275] rounded-lg"
    >
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
            <p className="">Feels with me</p>
            <div className="flex gap-2 text-[#A0A0A0]">
              <i className="icon before:content-['\3b']"></i>
              <span>3K</span>
              <i className="icon before:content-['\3b']"></i>
              <span>102K</span>
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
          <p className="text-sm text-[#DADADA]">Cài đặt nhạc chờ</p>
        </button>
        <button className="px-3 py-2 flex gap-3 hover:bg-[#573884]">
          <i className="icon before:content-['\ea09']"></i>
          <p className="text-sm text-[#DADADA]">Thêm vào playlist</p>
        </button>
        <button className="px-3 py-2 flex gap-3 hover:bg-[#573884]">
          <i className="icon before:content-['\46']"></i>
          <p className="text-sm text-[#DADADA]">Phát cùng lời bài hát</p>
        </button>
        <button className="px-3 py-2 flex gap-3 hover:bg-[#573884]">
          <i className="icon before:content-['\71']"></i>
          <p className="text-sm text-[#DADADA]">Bình luận</p>
        </button>
        <button className="px-3 py-2 flex gap-3 hover:bg-[#573884]">
          <i className="icon before:content-['\48']"></i>
          <p className="text-sm text-[#DADADA]">Sao chép link</p>
        </button>
        <button className="px-3 py-2 flex gap-3 hover:bg-[#573884] rounded-b-lg">
          <i className="icon before:content-['\2c']"></i>
          <p className="text-sm text-[#DADADA]">Chia sẻ</p>
        </button>
      </div>
    </div>
  )
}

export default Footer
