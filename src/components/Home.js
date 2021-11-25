import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import "./css/Navbar.css"
import "./css/Home.css"

const Home = () => {
    const [searchtext, setsearchtext] = useState("");
    const [gotimg, setgotimg] = useState(false);
    const [results, setresults] = useState([]);
    const [gotrandomimg, setgotrandomimg] = useState(false);
    const [randomimg, setrandomimg] = useState([])

    async function searchPhotos() {
        if (searchtext) {
            setgotimg(true)
            setrandomimg([])
            setresults([])
            const url = `https://api.unsplash.com/search/photos/?query=${searchtext}&client_id=pvHLwntgGIrrErhByAuZLj0eZKDt7uyYDbe4Tk1ix44&per_page=30&orientation=squarish`;
            const res = await fetch(url);
            const data = await res.json();
            
            console.log(data.total);
            if (data.total === 0) {
                // setgotimg(false)
                alert("No results found")
            } else {
                const results = data.results;
                console.log(data);
                setresults(results);
            }
        } else {
            alert("Search Text cannot be blank");
        }

    }
    async function getRandomImages() {
        const url = "https://api.unsplash.com/photos/random/?client_id=pvHLwntgGIrrErhByAuZLj0eZKDt7uyYDbe4Tk1ix44&count=30";
        const res = await fetch(url);
        const data = await res.json();
        setgotrandomimg(true);
        setrandomimg(data);
    }
    useEffect(() => {
        getRandomImages();
    }, []);
    return (
        <>
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
                            <input onKeyDown={(e) => { if (e.keyCode === 13) { searchPhotos() } }} onChange={(e) => setsearchtext(e.target.value)} spellCheck="false" className="search" type="text" />
                        </div>
                    </div>
                </nav>
            </div>

            <div className="row">
                {randomimg.map((e) => {
                    console.log(e.urls.regular);
                    return (
                        <>
                            <img style={{ width: "330px", height: "260px", marginTop: "10px", marginLeft: "5px" }} src={e.urls.regular} />
                        </>
                    )
                })}
            </div>

            <div className="row">
                {gotimg ? results.map((e) => {
                    return (
                        <img style={{ width: "330px", height: "260px", marginTop: "10px", marginLeft: "5px" }} src={e.urls.regular} alt="..." />
                    )
                }) : null}
            </div>
        </>
    )
}

export default Home
