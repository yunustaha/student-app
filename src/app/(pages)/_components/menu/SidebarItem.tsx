import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';

type SidebarItemProps = {
    icon: React.ElementType,
    label: string,
    iconRight?: boolean,
    href: string
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, iconRight, href }) => {
    const pathName = usePathname();

    return (
        <Link href={href} className={classNames(
            'flex items-center pl-10 gap-x-4 w-[193px] h-[41px] cursor-pointer rounded',
            {
                'flex-row-reverse pl-0 pr-10': iconRight,
                'hover:bg-student-orange hover:bg-opacity-10': pathName != href,
                'bg-student-orange text-white': pathName == href
            })
        } >
            <Icon fill='current' className='fill-current' />
            <div>{label}</div>
        </Link>
    )
}

export default SidebarItem