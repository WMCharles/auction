import React from "react";
import { Outlet, Link} from 'react-router-dom'

function Layout(){
    return(
        <>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/blogs">Blogs</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>

        <Outlet />

        </>
    )
}

export default Layout;