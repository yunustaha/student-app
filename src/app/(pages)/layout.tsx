import Menu from '@/components/navbar/Menu'
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