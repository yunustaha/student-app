import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';

type NavItemProps = {
    className?: string,
    icon: React.ReactNode,
    label: string,
    iconRight?: boolean,
    href: string 
}

const NavItem: React.FC<NavItemProps> = ({ className, icon, label, iconRight, href }) => {
    const pathName = usePathname();    

    return (
        <Link href={href} className={classNames('flex items-center pl-10 gap-x-4 w-[193px] h-[41px] cursor-pointer rounded', iconRight && 'flex-row-reverse pl-0 pr-10', pathName == href && 'bg-student-orange', className)} >
            {icon}
            <div>{label}</div>
        </Link>
    )
}

export default NavItem