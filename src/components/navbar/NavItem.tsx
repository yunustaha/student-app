import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'

type NavItemProps = {
    className?: string,
    src: string,
    label: string,
    logoRight?: boolean,
    clickStatus?: boolean,
    onClick?: () => any
}

const NavItem:React.FC<NavItemProps> = ({className, src, label, logoRight, clickStatus, onClick}) => {
    return (
        <>
            <div onClick={onClick} className={classNames('flex items-center pl-10 gap-x-4 w-[193px] h-[41px] cursor-pointer rounded', logoRight && 'flex-row-reverse pl-0 pr-10', clickStatus && 'bg-student-orange', className)}>
                <Image src={src} height={17} width={19} alt={label} />
                <div>{label}</div>
            </div>
        </>
    )
}

export default NavItem