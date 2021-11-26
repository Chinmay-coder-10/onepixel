import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import "./css/Navbar.css"
import "./css/Home.css"
import Navbar from './Navbar'
import Loading from './Loading'

const Home = () => {
    const [searchtext, setsearchtext] = useState("");
    const [gotsearchimg, setgotsearchimg] = useState(false);
    const [gotimg, setgotimg] = useState(false);
    const [results, setresults] = useState([]);
    const [gotrandomimg, setgotrandomimg] = useState(false);
    const [randomimg, setrandomimg] = useState([]);

    function capitalize(word) {
        const loweredCase = word.toLowerCase();
        return word[0].toUpperCase() + loweredCase.slice(1);
    }

    async function searchPhotos() {
        if (searchtext) {
            setgotsearchimg(true)
            setrandomimg([])
            document.title = `${capitalize(`${searchtext}`)} - OnePixel`
            setresults([])
            const url = `https://api.unsplash.com/search/photos/?query=${searchtext}&client_id=pvHLwntgGIrrErhByAuZLj0eZKDt7uyYDbe4Tk1ix44&per_page=30&orientation=squarish`;
            const res = await fetch(url);
            const data = await res.json()

            if (data.total === 0) {
                document.title = "OnePixel-Get free photos"
                alert("No results found...Try another word");
                setgotsearchimg(false);
            } else {
                const results = data.results;
                setresults(results);
                // setgotimg(true)
                setgotsearchimg(false)
            }
        } else {
            alert("Search Text cannot be blank");
        }

    }

    async function getRandomImages() {
        setgotrandomimg(true)
        const url = "https://api.unsplash.com/photos/random/?client_id=pvHLwntgGIrrErhByAuZLj0eZKDt7uyYDbe4Tk1ix44&count=30";
        const res = await fetch(url);
        const data = await res.json();
        setgotrandomimg(false);
        setrandomimg(data);
    }

    useEffect(() => {
        getRandomImages();
    }, []);
    return (
        <>
            <Navbar searchPhotos={searchPhotos} setsearchtext={setsearchtext} />
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
            {gotrandomimg ? <Loading /> : ""}
            {gotsearchimg ? <Loading /> : null}
        </>
    )
}

export default Home
