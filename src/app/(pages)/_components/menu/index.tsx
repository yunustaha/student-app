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
        <header className="flex h-full">
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} children={children} />
        </header>
    )
}

export default Menu