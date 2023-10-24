import React from 'react'
import { CaretCircle, Bell } from '../../../../components/Icons'
import { useRouter } from 'next/navigation';

type NavbarProps = {
    isOpen: boolean,
    setIsOpen: (value: boolean | ((current: boolean) => boolean)) => void,
    children: React.ReactNode,
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, setIsOpen, children }) => {
    const router = useRouter();

    return (
        <>
            <div className="flex flex-col w-full max-h-screen overflow-y-auto">
                <div className="flex sticky top-0 p-5 justify-between items-startr bg-white z-10">
                    <div className='lg:hidden flex flex-col w-10 h-5 gap-1 mr-5 cursor-pointer' onClick={() => { setIsOpen((current) => !current) }}>
                        <span className='bg-black w-full h-full rounded'></span>
                        <span className='bg-black w-full h-full rounded'></span>
                        <span className='bg-black w-full h-full rounded'></span>
                    </div>
                    <div className='flex w-full justify-between items-start'>
                        <CaretCircle onClick={() => router.back()} className="cursor-pointer" />
                        <Bell className="cursor-pointer" />
                    </div>
                </div>
                <div>{children}</div>
            </div>
        </>
    )
}

export default Navbar