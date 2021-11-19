import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
    const [searchtext, setsearchtext] = useState("")
    const [isimage, setisimage] = useState(false)
    const [image, setimage] = useState("")
    const [results, setresults] = useState([])
    async function searchPhotos() {
        if (searchtext) {
            const url = `https://api.unsplash.com/search/photos/?query=${searchtext}&client_id=pvHLwntgGIrrErhByAuZLj0eZKDt7uyYDbe4Tk1ix44`;
            const res = await fetch(url);
            const data = await res.json();
            const results = data.results;
            console.log(data);
            setresults(results)
            setisimage(true)
            // console.log(results);
        } else {
            alert("Search Text cannot be blank")
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
                            <div className="inputcontainer">
                                <button onClick={searchPhotos} className="searchbtn"><i className="fas fa-search"></i></button>
                                <input onChange={(e) => setsearchtext(e.target.value)} spellCheck="false" className="search" type="text" />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            {isimage ? results.map((e) => {
                return (
                    <img key={e.id} style={{ height: "100px", width: "100px" }} src={e.urls.raw} />
                )
            }) : null}
        </>
    )
}

export default Home
