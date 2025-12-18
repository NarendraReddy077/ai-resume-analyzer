import { Link } from "react-router"
import React from "react"

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <Link to='/'>
                <p className="text-lg max-sm:text-base md:text-2xl font-bold text-gradient">RESUMIND</p>
            </Link>
            <Link to='/upload' className="primary-button w-fit text-sm max-sm:text-xs md:text-base px-3 max-sm:px-2 py-2 max-sm:py-1">
                Upload Resume
            </Link>
        </nav>
    )
}

export default Navbar