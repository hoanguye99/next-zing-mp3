import { LayoutProps } from '@/models/index'
import * as React from 'react'
import Link from 'next/link'
import MetaHeader from './meta-header'

export function AdminLayout({ children }: LayoutProps) {
  return (
    <div>
      <MetaHeader />
      <h1>Admin Layout</h1>
      <div>Sidebar</div>

      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>

      <div>{children}</div>
    </div>
  )
}
