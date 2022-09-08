import React from 'react'
import { getProfileLayout } from '../../components/layout/ProfileLayout'
import { parse } from 'cookie'
import useQuery from '../../hooks/userQuery'
import userService from '../../services/user.service'
import PageLoading from '../../components/PageLoading'
import NoSsr from '../../components/NoSsr'

export default function PersonnalInfo() {
    const { data: user = {}, loading } = useQuery(() => userService.getUser(), [])

    if (loading) {
        return <PageLoading />
    }

    const _user = user?.data || {}
    return (
        <NoSsr>
            <form>
                <div className="row">
                    <div className="col-12 col-md-12">
                        {/* Email */}
                        <div className="form-group">
                            <label htmlFor="accountFirstName">
                                First Name *
                            </label>
                            <input value={_user.name} className="form-control form-control-sm" id="accountFirstName" type="text" placeholder="First Name *" required />
                        </div>
                    </div>
                    <div className="col-12">
                        {/* Email */}
                        <div className="form-group">
                            <label htmlFor="accountEmail">
                                Email Address *
                            </label>
                            <input value={_user.email} disabled className="form-control form-control-sm" id="accountEmail" type="email" placeholder="Email Address *" defaultValue="user@email.com" required />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        {/* Password */}
                        <div className="form-group">
                            <label htmlFor="accountPassword">
                                Current Password *
                            </label>
                            <input className="form-control form-control-sm" id="accountPassword" type="password" placeholder="Current Password *" required />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        {/* Password */}
                        <div className="form-group">
                            <label htmlFor="AccountNewPassword">
                                New Password *
                            </label>
                            <input className="form-control form-control-sm" id="AccountNewPassword" type="password" placeholder="New Password *" required />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        {/* Birthday */}
                        <div className="form-group">
                            {/* Label */}
                            <label>Date of Birth</label>
                            {/* Inputs */}
                            <div className="form-row">
                                <div className="col-auto">
                                    {/* Date */}
                                    <label className="sr-only" htmlFor="accountDate">
                                        Date
                                    </label>
                                    <select className="custom-select custom-select-sm" id="accountDate">
                                        <option>10</option>
                                        <option>11</option>
                                        <option selected>12</option>
                                    </select>
                                </div>
                                <div className="col">
                                    {/* Date */}
                                    <label className="sr-only" htmlFor="accountMonth">
                                        Month
                                    </label>
                                    <select className="custom-select custom-select-sm" id="accountMonth">
                                        <option>January</option>
                                        <option selected>February</option>
                                        <option>March</option>
                                    </select>
                                </div>
                                <div className="col-auto">
                                    {/* Date */}
                                    <label className="sr-only" htmlFor="accountYear">
                                        Year
                                    </label>
                                    <select className="custom-select custom-select-sm" id="accountYear">
                                        <option>1990</option>
                                        <option selected>1991</option>
                                        <option>1992</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        {/* Gender */}
                        <div className="form-group mb-8">
                            <label>Gender</label>
                            <div className="btn-group-toggle" data-toggle="buttons">
                                <label className="btn btn-sm btn-outline-border active">
                                    <input type="radio" name="gender" defaultChecked /> Male
                                </label>
                                <label className="btn btn-sm btn-outline-border">
                                    <input type="radio" name="gender" /> Female
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        {/* Button */}
                        <button className="btn btn-dark" type="submit">Save Changes</button>
                    </div>
                </div>
            </form>
        </NoSsr>
    )
}


PersonnalInfo.getLayout = getProfileLayout



export async function getServerSideProps(context) {
    // const { authen } = parse(context.req.headers.cookie || '')
    // if (!authen) {
    //     return {
    //         redirect: {
    //             destination: '/auth',
    //             permanent: false,
    //         }
    //     }
    // }


    return {
        props: {}
    }
}