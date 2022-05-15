import HomePage from '@/components/home-page'
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
      <HomePage/>
    </>
  )
}

Home.Layout = MainLayout

export default Home
