import { MainLayout, siteTitle } from '@/components/layout'
import { NextPageWithLayout } from '@/models'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPageWithLayout = () => {
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
