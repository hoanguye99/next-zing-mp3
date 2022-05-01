import React from 'react'
import data from '@/data/trackList.json'
import Button from '@/components/styled/button'
import Image from 'next/image'

const NextView = () => {
  const arr = data.data.items
  return (
    <>
      {arr.map((item) => (
        <Song
          key={item.encodeId}
          artists={item.artistsNames}
          thumbnail={item.thumbnail}
          title={item.title}
        />
      ))}
    </>
  )
}

type SongProps = {
  artists: string
  thumbnail: string
  title: string
}
const Song = ({ artists, thumbnail, title }: SongProps) => {
  return (
    <div className="flex justify-between p-2 hover:bg-[#40384d] mx-2 rounded-md">
      <div className="flex items-center truncate">
        <div className="relative w-10 h-10 cursor-pointer group bg-[#2A2039] rounded shrink-0">
          <Image
            src={thumbnail}
            alt=""
            className="absolute group-hover:opacity-50 top-0 right-0 bottom-0 left-0 rounded"
            height={40}
            width={40}
          />

          <i className="absolute hidden group-hover:block left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 icon before:content-['\5e']"></i>
        </div>
        <div className="ml-3 truncate ">
          <p className="text-song truncate">{title}</p>
          <p className="text-artists truncate">{artists}</p>
        </div>
      </div>
      <div className="ml-6 flex items-center">
        <Button className="" hover="Thêm vào thư viện">
          <i className="icon before:content-['\3b']"></i>
        </Button>
        <Button
          className="ml-2"
          hover="Xem thêm"
          // onClick={handleExtraInfoClick}
        >
          <i className="icon before:content-['\4a']"></i>
        </Button>
      </div>
    </div>
  )
}

export default NextView
