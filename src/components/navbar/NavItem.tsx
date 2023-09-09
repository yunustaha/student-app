import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';

type NavItemProps = {
    className?: string,
    src: string,
    label: string,
    logoRight?: boolean,
    href: string 
}

const NavItem: React.FC<NavItemProps> = ({ className, src, label, logoRight, href }) => {
    const pathName = usePathname();    

    return (
        <Link href={href} className={classNames('flex items-center pl-10 gap-x-4 w-[193px] h-[41px] cursor-pointer rounded', logoRight && 'flex-row-reverse pl-0 pr-10', pathName == href && 'bg-student-orange', className)} >
            <Image src={src} height={17} width={19} alt={label} />
            <div>{label}</div>
        </Link>
    )
}

export default NavItem