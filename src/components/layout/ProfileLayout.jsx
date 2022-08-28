import React from 'react'
import MainLayout from './MainLayout'
import Link from '../Link'
import NavLink from '../NavLink'

export default function ProfileLayout({ children }) {
    return (
        <MainLayout>
            <section className="pt-7 pb-12">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            {/* Heading */}
                            <h3 className="mb-10">My Account</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-3">
                            {/* Nav */}
                            <nav className="mb-10 mb-md-0">
                                <div className="list-group list-group-sm list-group-strong list-group-flush-x">
                                    <NavLink className="list-group-item list-group-item-action dropright-toggle " href={'/account/order'}>
                                        Orders
                                    </NavLink>
                                    <a className="list-group-item list-group-item-action dropright-toggle " href="account-wishlist.html">
                                        Widhlist
                                    </a>
                                    <NavLink href="/account" className="list-group-item list-group-item-action dropright-toggle ">
                                        Personal Info
                                    </NavLink>
                                    <a className="list-group-item list-group-item-action dropright-toggle " href="account-address.html">
                                        Addresses
                                    </a>
                                    <a className="list-group-item list-group-item-action dropright-toggle " href="account-payment.html">
                                        Payment Methods
                                    </a>
                                    <a className="list-group-item list-group-item-action dropright-toggle" href="#!">
                                        Logout
                                    </a>
                                </div>
                            </nav>
                        </div>
                        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
                            {children}
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}


export const getProfileLayout = (page) => {
    return (
        <ProfileLayout>
            {page}
        </ProfileLayout>
    )
}