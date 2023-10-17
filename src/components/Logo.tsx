import classNames from 'classnames'
import React from 'react'

type LogoProps = {
    size: 'md' | 'lg',
    className?: string
}

const Logo: React.FC<LogoProps> = ({ size }) => {
    return (
        <div className={'flex gap-3'}>
            <div className='w-[0.4rem] bg-student-yellow'></div>
            <div className={classNames('text-3xl font-bold', { 'text-xl': size == 'md' })} >MANAGE COURSES</div>
        </div>
    )
}

export default Logo