import React from 'react'
import "./css/Navbar.css"
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Navbar = ({ searchPhotos, setsearchtext }) => {
    const [crossbtn, setcrossbtn] = useState(false)
    return (
        <div className="container navigation">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <i className="fas fa-image icon"></i>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/test">Link</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="inputcontainer">
                        <button onClick={searchPhotos} className="searchbtn"><i className="fas fa-search"></i></button>
                        <input onKeyDown={(e) => {
                            if (e.keyCode === 13) { searchPhotos() };
                            setcrossbtn(true)
                        }} onChange={(e) => setsearchtext(e.target.value)} spellCheck="false" className="search" type="text" />
                        <button style={{ display: "none" }} className="cross">
                            {crossbtn ? "&#10006" : null}
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
