import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'reactstrap'
import { logout } from '../../actions/authAction'

export const Logout = () => {
    const dispatch = useDispatch()
    
    const handleLogOut = () => {
        dispatch(logout())
    }
    return (
        <Fragment>
            <NavLink onClick={handleLogOut} href='#'>
                Logout
            </NavLink>
        </Fragment>

    )
}
