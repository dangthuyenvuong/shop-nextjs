import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}


export const getMainLayout = (page) => {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}