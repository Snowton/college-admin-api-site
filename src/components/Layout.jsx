import React from "react"
import { Link } from "gatsby"

const Layout = ({children}) => {
    return <>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>

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