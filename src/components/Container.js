import React from 'react'

export default function Container({children}) {
  return (
    <div>
      <main className="container">{children}</main>
    </div>
  )
}
