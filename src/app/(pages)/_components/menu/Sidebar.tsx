import React from 'react'
import Image from "next/image";
import Logo from "../../../../components/Logo";
import SidebarItem from "./SidebarItem";
import { Bookmark, Close, FileChartLine, GraduationCap, HomeLogo, SignOutAlt, SlidersSquare, UsdSquare } from '../../../../components/Icons';

type SidebarProps = {
    isOpen: boolean,
    setIsOpen: (value: boolean | ((current: boolean) => boolean)) => void
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {

    return (
        <aside className={`${isOpen ? '-left-0' : '-left-[100%] lg:left-0'} z-20 fixed lg:relative flex flex-col bg-student-beige min-w-[270px] h-screen items-center justify-around ease-in-out duration-500`}>
            {isOpen && <div className='flex justify-end w-full cursor-pointer mr-10'> <Close className='h-8 w-8' onClick={() => setIsOpen((current) => !current)} /></div>}
            <Logo size="md" />
            <Image width={128} height={128} className="rounded-full " src={'/avatar.png'} alt={"Profile Photo"} />
            <div className="text-lg font-bold ">John Doe</div>
            <div className="text-student-orange text-sm font-medium ">Admin</div>
            <nav className="flex flex-col gap-y-4 ">
                <SidebarItem href={'/dashboard'} icon={HomeLogo} label='Home' />
                <SidebarItem href={'/course'} icon={Bookmark} label='Course' />
                <SidebarItem href={'/students'} icon={GraduationCap} label='Student' />
                <SidebarItem href={'/payment'} icon={UsdSquare} label='Payment' />
                <SidebarItem href={'/report'} icon={FileChartLine} label='Report' />
                <SidebarItem href={'/settings'} icon={SlidersSquare} label='Settings' />
            </nav>
            <SidebarItem href={'/'} icon={SignOutAlt} label='Logout' iconRight />
        </aside>
    )
}

export default Sidebar