import { LayoutProps } from '@/models'
import Link from 'next/link'
import React, { useState } from 'react'
import Footer from '@/components/view-layout/footer'
import MetaHeader from './meta-header'
import Main from '../view-layout/main'
import { TrackListProvider } from '@/components/context'

export function MainLayout({ children }: LayoutProps) {
  return (
    <>
      <MetaHeader />
      <div className="text-white-main tracking-tight">
        <TrackListProvider>
          <Main>{children}</Main>
          <Footer />
        </TrackListProvider>
      </div>
    </>
  )
}
