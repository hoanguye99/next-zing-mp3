import { LayoutProps } from '@/models'
import Head from 'next/head'
import MetaHeader from './meta-header'

export function EmptyLayout({ children }: LayoutProps) {
  return (
    <>
      <MetaHeader />
      {children}
    </>
  )
}
