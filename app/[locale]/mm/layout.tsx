import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const Layout = (props: Props) => {
  return (
    <div className='w-screen h-screen flex flex-row'>
        <div className='w-1/3 h-screen flex items-center justify-center text-lg bg-blue-300'>Next Layout</div>
        {props.children}
    </div>
  )
}

export default Layout