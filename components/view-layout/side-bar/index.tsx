import Link from 'next/link'
import React from 'react'
import styles from '@/styles/view-layout/side-bar/side-bar.module.scss'
const SideBar = () => {
  return (
    <div className="bg-purple-sidebar w-[230px] pb-[54px] pt-[70px]">
      <div className="h-full flex flex-col">
        <div className="fixed top-0 w-[230px] h-[70px] px-[25px] flex items-center">
          <button className=" w-[120px] h-[40px] bg-left-top bg-no-repeat bg-contain bg-[url('/images/logo-dark.svg')] hover:opacity-80"></button>
        </div>
        <nav>
          <ul>
            <LinkTab
              link="/tbd"
              icon="before:content-['\e906']"
              text="Cá nhân"
              selected={false}
            />
            <LinkTab
              link="/tbd"
              icon="before:content-['\e905']"
              text="Khám phá"
              selected={true}
            />
            <LinkTab
              link="/tbd"
              icon="before:content-['\e902']"
              text="#zingchart"
              selected={false}
            />
            <LinkTab
              link="/tbd"
              icon="before:content-['\e924']"
              text="Radio"
              selected={false}
            />
            <LinkTab
              link="/tbd"
              icon="before:content-['\e903']"
              text="Theo dõi"
              selected={false}
            />
          </ul>
        </nav>
        <div className="h-[1px] mx-[25px] my-[9px] border-t border-t-[#393243]"></div>
        <div className="overflow-y-auto">
          <nav>
            <ul>
              <LinkTab
                link="/tbd"
                icon="before:content-['\e908']"
                text="Nhạc mới"
                selected={false}
              />
              <LinkTab
                link="/tbd"
                icon="before:content-['\e904']"
                text="Thể loại"
                selected={false}
              />
              <LinkTab
                link="/tbd"
                icon="before:content-['\e925']"
                text="Top100"
                selected={false}
              />
              <LinkTab
                link="/tbd"
                icon="before:content-['\e907']"
                text="MV"
                selected={false}
              />
            </ul>
          </nav>

          <div className="mt-[15px] mb-3 flex flex-col gap-[10px] px-[20px]">
            <div className="py-[15px] px-[8px] flex flex-col gap-[10px] bg-[#7200a1] rounded-lg">
              <p className="text-[11px] font-extrabold text-center">
                Đăng nhập để khám phá playlist dành riêng cho bạn
              </p>
              <button className="text-[11px] font-extrabold px-[35px] py-[6px] hover:opacity-80 border mx-auto rounded-2xl">
                ĐĂNG NHẬP
              </button>
            </div>
            <div className={styles.card}>
              <p className="text-[11px] font-extrabold text-center">
                Nghe nhạc không quảng cáo cùng kho nhạc VIP
              </p>
              <button className="text-[11px] font-extrabold px-[35px] py-[6px] hover:opacity-80 mx-auto rounded-2xl text-[#000000] bg-[#ffdb00]">
                NÂNG CẤP VIP
              </button>
            </div>
          </div>
        </div>
        <button className="fixed bottom-[90px] w-[230px] h-[54px] text-white-main px-[28px] flex items-center gap-[8px] border-t border-t-[#393243] hover:opacity-80">
          <i className="icon text-lg before:content-['\62']"></i>
          <span className="ml-2 text-link-tab">Tạo playlist mới</span>
        </button>
      </div>
    </div>
  )
}

interface LinkTabProps {
  link: string
  icon: string
  text: string
  selected: boolean
}

const LinkTab = (props: LinkTabProps) => {
  return (
    <li
      className={`block group ${
        props.selected ? 'bg-[#393243] border-l-[3px] border-l-[#7200a1]' : ''
      }`}
    >
      <Link href={props.link}>
        <a className="inline-block w-full py-[4px] px-[25px] text-[#dadada]">
          <div className="flex items-center group-hover:text-[#ffffff]">
            <i className={`icon text-xl ${props.icon}`}></i>
            <span className="ml-2 text-link-tab">{props.text}</span>
          </div>
        </a>
      </Link>
    </li>
  )
}

export default SideBar
