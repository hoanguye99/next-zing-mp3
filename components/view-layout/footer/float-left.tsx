import Button from '@/components/styled/button'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from '@/styles/view-layout/footer/float-left.module.scss'
import ExtraInfoButton from '@/components/common/extra-info-button'

const FloatLeft = () => {
  const [scrollSongName, setScrollSongName] = useState(false)
  const songNameRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (!songNameRef.current) throw Error('songNameRef is not assigned')
    if (songNameRef.current.scrollWidth > songNameRef.current.clientWidth) {
      setScrollSongName(true)
    }
  })

  return (
    <>
      <div className="md:max-w-sm max-w-xs flex items-center col-span-2">
        <div className=" flex items-center truncate">
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
        </div>
        <div className="ml-6 lg:-mr-4 hidden sm:flex">
          <Button className="" hover="Thêm vào thư viện">
            <i className="icon before:content-['\3b']"></i>
          </Button>
          <ExtraInfoButton
            thumbnail="/images/footer-img.webp"
            title="Feels With Me"
          />
        </div>
      </div>
    </>
  )
}

export default FloatLeft
