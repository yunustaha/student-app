import React from 'react'
import Image from "next/image";
import Logo from "../../components/Logo";
import NavItem from "../../components/navbar/NavItem";
import { Close } from '../Icons';
import { usePathname, useRouter } from 'next/navigation';

type NavbarProps = {
    isOpen: boolean,
    setIsOpen: (React.Dispatch<React.SetStateAction<boolean>>)
}

const Navbar:React.FC<NavbarProps> = ({isOpen, setIsOpen}) => {
    const pathName = usePathname();
    const router = useRouter();

    console.log("router: ", pathName);
    
    return (
        <div className={`${isOpen ? 'fixed flex flex-col' : 'hidden lg:flex lg:flex-col'} top-[5vh] lg:top-0 bg-student-beige min-w-[270px] h-[95vh] lg:h-screen items-center justify-around`}>
            {/* <div className='flex justify-end w-full cursor-pointer mr-10'>{isOpen && <Close className='h-8 w-8' onClick={() => setIsOpen((current) => !current)}/>}</div> */}
            <Logo size="md" />
            <Image width={128} height={128} className="rounded-full " src={'/avatar.png'} alt={"Profile Photo"} />
            <div className="text-lg font-bold ">John Doe</div>
            <div className="text-student-orange text-sm font-medium ">Admin</div>
            <div className="flex flex-col gap-y-4 ">
                <NavItem onClick={() => router.push('/dashboard')} clickStatus={pathName == '/dashboard'} src='/home-logo.svg' label='Home' />
                <NavItem onClick={() => router.push('/course')} clickStatus={pathName == '/course'} src='/bookmark.svg' label='Course' />
                <NavItem onClick={() => router.push('/students')} clickStatus={pathName == '/students'} src='/graduation-cap.svg' label='Student' />
                <NavItem onClick={() => router.push('/payment')} clickStatus={pathName == '/payment'} src='/usd-square.svg' label='Payment' />
                <NavItem onClick={() => router.push('/report')} clickStatus={pathName == '/report'} src='/file-chart-line.svg' label='Report' />
                <NavItem onClick={() => router.push('/settings')} clickStatus={pathName == '/settings'} src='/sliders-v-square.svg' label='Settings' />
            </div>
            <NavItem onClick={() => router.push('/')} src='/sign-out-alt.svg' label='Logout' logoRight className="" />
        </div>
    )
}

export default Navbar