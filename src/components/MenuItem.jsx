import Link from 'next/link'
import React from 'react'

function MenuItem({ item }) {
  return (
    <Link href={item.url}>{item.menu}</Link>
  )
}

export default MenuItem