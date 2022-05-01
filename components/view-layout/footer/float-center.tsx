import Button from '@/components/styled/button'
import { RepeatStatus, ShuffleStatus } from '@/models/view-layout'
import Image from 'next/image'
import { useState } from 'react'
import RangeSlider from './range-slider'

const FloatCenter = () => {
  function getNextSongInfo() {
    return (
      <div className="flex flex-col p-1 gap-2 w-[16rem] truncate">
        <div className="text-xs text-white-secondary">Phát tiếp theo</div>
        <div className="flex truncate">
          <div>
            <Image
              layout="fixed"
              src="/images/footer-img.webp"
              className="rounded shrink-0"
              height={40}
              width={40}
            />
          </div>
          <div className="ml-3 truncate ">
            <p className="text-sm truncate">Feels With Me</p>
            <p className="text-xs text-white-secondary truncate">
              Thiều Bảo Trâm, Jin Tuấn Nam, Sin Thiện Tâm, WinC, HOA HỒNG ĐẠI
              MUSIC
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-[4_4_0%] flex flex-col items-center -mt-2">
      <div className="flex items-center">
        <div className="flex gap-5">
          <ShuffleButton />
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
          <RepeatButton />
        </div>
      </div>
      <div className="w-3/4 flex items-center gap-4 -mt-2 select-none">
        <span className="text-sm text-white-secondary">0:00</span>
        <SongTimeControl />
        <span className="text-sm text-white-secondary">3:17</span>
      </div>
    </div>
  )
}

const ShuffleButton = () => {
  const [shuffleState, setShuffleState] = useState<ShuffleStatus>(
    ShuffleStatus.DISABLE
  )
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
  }
}

const RepeatButton = () => {
  const [repeatState, setRepeatState] = useState<RepeatStatus>(
    RepeatStatus.DISABLE
  )
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
  }
}

const SongTimeControl = () => {
  const [songTime, setSongTime] = useState(0)
  return (
    <RangeSlider
      value={songTime}
      onChange={(nextValue: number) => setSongTime(nextValue)}
    />
  )
}

export default FloatCenter
