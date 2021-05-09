import React from "react"
import { Link } from "gatsby"

const Layout = ({children}) => {
    return <>
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
        </ul>
    </nav>
    <main>
        {children}
    </main>
    </>
}

export default Layout