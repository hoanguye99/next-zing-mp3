import { LayoutProps } from '@/models'
import Link from 'next/link'
import React from 'react'
import Footer from '@/components/common/footer'
import MetaHeader from './meta-header'
import Main from '../common/main'

export function MainLayout({ children }: LayoutProps) {
  return (
    <>
      <MetaHeader />
      <div className="h-screen flex flex-col text-white-main tracking-tight">
        <Main>
          {children}
        </Main>
        <Footer />
      </div>
    </>
  )
}
