'use client';
import React, { useState } from 'react'
import Navbar from './Navbar'
import { CaretCircle, Bell } from '../Icons'
import { useRouter } from 'next/navigation';


type MenuProps = {
    children: React.ReactNode,
}

const Menu: React.FC<MenuProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const router = useRouter();
    
    return (
        <header className="flex h-full">
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
            <div className="flex flex-col w-full max-h-screen overflow-y-auto">
                <div className="flex sticky top-0 p-5 justify-between items-startr bg-white z-10">
                    <div className='lg:hidden flex flex-col w-10 h-5 gap-1 mr-5 cursor-pointer' onClick={() => {setIsOpen((current) => !current)}}>
                        <div className='bg-black w-full h-full rounded'></div>
                        <div className='bg-black w-full h-full rounded'></div>
                        <div className='bg-black w-full h-full rounded'></div>
                    </div>
                    <div className='flex w-full justify-between items-start'>
                        <CaretCircle onClick={() => router.back()} className="cursor-pointer" />
                        <Bell className="cursor-pointer" />
                    </div>
                </div>
                <div>{children}</div>
            </div>
        </header>
    )
}

export default Menu