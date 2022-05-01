import { MainLayout, siteTitle } from '@/components/layout'
import { NextPageWithLayout } from '@/models'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPageWithLayout = () => {
  function printMousePos(event: MouseEvent) {
    console.log(`clientX: ${event.clientX}  - clientY:  ${event.clientY}`)
  }
  if (typeof window !== 'undefined') {
    console.log(window.innerWidth, window.innerHeight);
    document.addEventListener('click', printMousePos)
  }
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <p>Main Thing Baby</p>
    </>
  )
}

Home.Layout = MainLayout

export default Home
