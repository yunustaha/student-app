import React from 'react'
import Image from "next/image";
import Logo from "../../components/Logo";
import NavItem from "../../components/navbar/NavItem";
import { Bookmark, Close, FileChartLine, GraduationCap, HomeLogo, SignOutAlt, SlidersSquare, UsdSquare } from '../Icons';

type NavbarProps = {
    isOpen: boolean,
    setIsOpen: (value: boolean | ((current: boolean) => boolean)) => void
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, setIsOpen }) => {

    return (
        <div className={`${isOpen ? '-left-0' : '-left-[100%] lg:left-0'} z-20 fixed lg:relative flex flex-col bg-student-beige min-w-[270px] h-screen items-center justify-around ease-in-out duration-500`}>
            {isOpen && <div className='flex justify-end w-full cursor-pointer mr-10'> <Close className='h-8 w-8' onClick={() => setIsOpen((current) => !current)} /></div>}
            <Logo size="md" />
            <Image width={128} height={128} className="rounded-full " src={'/avatar.png'} alt={"Profile Photo"} />
            <div className="text-lg font-bold ">John Doe</div>
            <div className="text-student-orange text-sm font-medium ">Admin</div>
            <nav className="flex flex-col gap-y-4 ">
                <NavItem href={'/dashboard'} icon={<HomeLogo/>} label='Home' />
                <NavItem href={'/course'} icon={<Bookmark/>} label='Course' />
                <NavItem href={'/students'} icon={<GraduationCap/>} label='Student' />
                <NavItem href={'/payment'} icon={<UsdSquare/>} label='Payment' />
                <NavItem href={'/report'} icon={<FileChartLine/>} label='Report' />
                <NavItem href={'/settings'} icon={<SlidersSquare/>} label='Settings' />
            </nav>
            <NavItem href={'/'} icon={<SignOutAlt/>} label='Logout' iconRight className="" />
        </div>
    )
}

export default Navbar