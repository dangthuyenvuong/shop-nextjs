import React from 'react'
import Link from './Link'

export default function Header() {
    return (
        <div>
            {/* NAVBAR */}
            <div className="navbar navbar-topbar navbar-expand-xl navbar-light bg-light">
                <div className="container">
                    {/* Promo */}
                    <div className="mr-xl-8">
                        <i className="fe fe-truck mr-2" /> <span className="heading-xxxs">Free shipping worldwide</span>
                    </div>
                    {/* Toggler */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#topbarCollapse" aria-controls="topbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    {/* Collapse */}
                    <div className="collapse navbar-collapse" id="topbarCollapse">
                        {/* Nav */}
                        <ul className="nav nav-divided navbar-nav mr-auto">
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
                                    <img className="mb-1 mr-1" src="/img/flags/usa.svg" alt="..." /> United States
                                </a>
                                {/* Menu */}
                                <div className="dropdown-menu minw-0">
                                    <a className="dropdown-item" href="#!">
                                        <img className="mb-1 mr-2" src="/img/flags/usa.svg" alt="USA" />United States
                                    </a>
                                    <a className="dropdown-item" href="#!">
                                        <img className="mb-1 mr-2" src="/img/flags/canada.svg" alt="Canada" />Canada
                                    </a>
                                    <a className="dropdown-item" href="#!">
                                        <img className="mb-1 mr-2" src="/img/flags/germany.svg" alt="Germany" />Germany
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">USD</a>
                                {/* Menu */}
                                <div className="dropdown-menu minw-0">
                                    <a className="dropdown-item" href="#!">USD</a>
                                    <a className="dropdown-item" href="#!">EUR</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">English</a>
                                {/* Menu */}
                                <div className="dropdown-menu minw-0">
                                    <a className="dropdown-item" href="#">English</a>
                                    <a className="dropdown-item" href="#">French</a>
                                    <a className="dropdown-item" href="#">German</a>
                                </div>
                            </li>
                        </ul>
                        {/* Nav */}
                        <ul className="nav navbar-nav mr-8">
                            <li className="nav-item">
                                <a className="nav-link" href="./shipping-and-returns.html">Shipping</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./faq.html">FAQ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./contact-us.html">Contact</a>
                            </li>
                        </ul>
                        {/* Nav */}
                        <ul className="nav navbar-nav flex-row">
                            <li className="nav-item">
                                <a className="nav-link text-gray-350" href="#!">
                                    <i className="fab fa-facebook-f" />
                                </a>
                            </li>
                            <li className="nav-item ml-xl-n4">
                                <a className="nav-link text-gray-350" href="#!">
                                    <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li className="nav-item ml-xl-n4">
                                <a className="nav-link text-gray-350" href="#!">
                                    <i className="fab fa-instagram" />
                                </a>
                            </li>
                            <li className="nav-item ml-xl-n4">
                                <a className="nav-link text-gray-350" href="#!">
                                    <i className="fab fa-medium" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* NAVBAR */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
                <div className="container">
                    {/* Brand */}
                    <a className="navbar-brand" href="./overview.html">
                        Shopper.
                    </a>
                    {/* Toggler */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    {/* Collapse */}
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        {/* Nav */}
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                <a className="nav-link" data-toggle="dropdown" href="#">Home</a>
                                {/* Menu */}
                                <div className="dropdown-menu">
                                    <div className="card card-lg">
                                        <div className="card-body">
                                            <ul className="list-styled font-size-sm">
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./index.html">Default</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./index-classic.html">Classic</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./index-fashion.html">Fashion</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./index-boxed.html">Boxed</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./index-simple.html">Simple</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./index-asymmetric.html">Asymmetric</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./index-sidenav.html">Sidenav</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./index-landing.html">Landing</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                <Link className="nav-link" data-toggle="dropdown" href="/shop">Shop</Link>
                            </li>
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                <a className="nav-link" data-toggle="dropdown" href="#">Pages</a>
                                {/* Menu */}
                                <div className="dropdown-menu">
                                    <div className="card card-lg">
                                        <div className="card-body">
                                            <ul className="list-styled font-size-sm">
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./about.html">About</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./contact-us.html">Contact Us</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./store-locator.html">Store Locator</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./faq.html">FAQ</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./coming-soon.html">Coming Soon</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./404.html">404</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                <a className="nav-link" data-toggle="dropdown" href="#">Blog</a>
                                {/* Menu */}
                                <div className="dropdown-menu">
                                    <div className="card card-lg">
                                        <div className="card-body">
                                            <ul className="list-styled font-size-sm">
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./blog.html">Blog</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./blog-post.html">Blog Post</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="docs/getting-started.html">Docs</a>
                            </li>
                        </ul>
                        {/* Nav */}
                        <ul className="navbar-nav flex-row">
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="modal" href="#modalSearch">
                                    <i className="fe fe-search" />
                                </a>
                            </li>
                            <li className="nav-item ml-lg-n4">
                                <a className="nav-link" href="./account-orders.html">
                                    <i className="fe fe-user" />
                                </a>
                            </li>
                            <li className="nav-item ml-lg-n4">
                                <a className="nav-link" href="./account-wishlist.html">
                                    <i className="fe fe-heart" />
                                </a>
                            </li>
                            <li className="nav-item ml-lg-n4">
                                <a className="nav-link" data-toggle="modal" href="#modalShoppingCart">
                                    <span data-cart-items={2}>
                                        <i className="fe fe-shopping-cart" />
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* PROMO */}
            <div className="py-3 bg-dark bg-pattern @@classList">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Text */}
                            <div className="text-center text-white">
                                <span className="heading-xxs letter-spacing-xl">
                                    ⚡️ Happy Holiday Deals on Everything ⚡️
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
