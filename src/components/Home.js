import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./css/Navbar.css"
import "./css/Home.css"

const Home = () => {
    const [searchtext, setsearchtext] = useState("")
    const [isimage, setisimage] = useState(false)
    const [image, setimage] = useState("")
    const [gotimg, setgotimag] = useState(false)
    const [results, setresults] = useState([])
    async function searchPhotos() {
        if (searchtext) {
            setgotimag(true)
            const url = `https://api.unsplash.com/search/photos/?query=${searchtext}&client_id=pvHLwntgGIrrErhByAuZLj0eZKDt7uyYDbe4Tk1ix44&per_page=30&orientation=squarish`;
            const res = await fetch(url);
            const data = await res.json();
            const results = data.results;
            console.log(data);
            setresults(results);
            setisimage(true);
            setgotimag(false);
            // console.log(results);
        } else {
            alert("Search Text cannot be blank");
        }
    }
    return (
        <>
            <div className="container">
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
                            <input onChange={(e) => setsearchtext(e.target.value)} spellCheck="false" className="search" type="text" />
                        </div>
                    </div>
                </nav>
            </div>
            {gotimg ? "Loading" : ""}
            <div className="row">
                {isimage ? results.map((e) => {
                    return (
                        <img style={{ width: "250px", height: "200px" }} src={e.urls.regular} className="mx-2 my-2" alt="..." />
                    )
                }) : null}
            </div>
        </>
    )
}

export default Home
