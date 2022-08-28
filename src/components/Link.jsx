import LinkN from 'next/link'
import React from 'react'

export default function Link({ className, children, ...props }) {

    return (
        <LinkN {...props}>
            <a className={className}>{children}</a>
        </LinkN>
    )
}
