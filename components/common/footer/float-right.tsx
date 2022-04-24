import Button from "@/components/styled/button"
import { useRef, useState } from "react"
import RangeSlider from "./range-slider"

const FloatRight = () => {
  return (
    <div className="flex-[2_2_0%] flex gap-2 justify-end items-center">
      <Button className="" hover="Xem lời bài hát">
        <i className="icon before:content-['\46']"></i>
      </Button>
      <VolumeControl />
      <div className="border-[1px] h-7 text-[#2A2533] mx-1"></div>
      <Button className="" hover="Danh sách phát">
        <i className="icon before:content-['\49']"></i>
      </Button>
    </div>
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
    <>
      <Button
        onClick={handleVolumeClick}
        className="before:block before:absolute before:h-10 before:inset-x-0 before:-top-5 relative group"
      >
        <i className="icon before:content-['\e009']"></i>
        <div className="absolute bottom-12 right-1 hidden group-hover:block">
          fsdf
        </div>
      </Button>
      <div className="w-20">
        <RangeSlider
          value={volume}
          onChange={(nextValue: number) => setVolume(nextValue)}
        />
      </div>
    </>
  )
}

export default FloatRight