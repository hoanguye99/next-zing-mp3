import { MainLayout, siteTitle } from '@/components/layout'
import Head from 'next/head'
import React from 'react'

type AboutProps = any

const About = (props: AboutProps) => {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <i className="icon before:content-['\4e']"></i>
    </>
  )
}

About.Layout = MainLayout

export default About