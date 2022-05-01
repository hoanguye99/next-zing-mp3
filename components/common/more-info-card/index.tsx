import Image from 'next/image'
import React from 'react'

type MoreInfoCardProps = {
  imageURL: string
  songName: string
  likes: number
  listens: number
}

const MoreInfoCard = (props: MoreInfoCardProps) => {
  return (
    <div className=" w-[284px] flex flex-col bg-[#432275] rounded-lg">
      <div className="p-3">
        <div className="flex gap-3">
          <Image
            layout="fixed"
            src={props.imageURL}
            className="rounded"
            height={40}
            width={40}
          />
          <div className="flex flex-col text-sm truncate">
            <p className="text-song">{props.songName}</p>
            <div className="flex items-center gap-2 text-[#A0A0A0]">
              <i className="icon before:content-['\3b']"></i>
              <span className="text-artists">{props.likes}</span>
              <i className="icon before:content-['\3b']"></i>
              <span className="text-artists">{props.listens}</span>
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
  )
}

export default MoreInfoCard
