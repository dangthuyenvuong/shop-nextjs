import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function NavLink({ className, children, ...props }) {
    const { pathname } = useRouter()

    return (
        <Link scroll={false} {...props} >
            <a className={classNames(className, { active: pathname === props.href })}>{children}</a>
        </Link>
    )
}
