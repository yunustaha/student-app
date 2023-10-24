'use client';
import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar';


type MenuProps = {
    children: React.ReactNode,
}

const Menu: React.FC<MenuProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div className="flex h-full w-full">
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <header className='h-full w-full'>
                <Navbar isOpen={isOpen} setIsOpen={setIsOpen} children={children} />
            </header>
        </div>
    )
}

export default Menu