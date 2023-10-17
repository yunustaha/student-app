import Menu from '@/app/(pages)/_components/menu'
import React from 'react'

function Layout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <Menu>
            {children}
        </Menu>
    )
}

export default Layout