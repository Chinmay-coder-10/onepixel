import React, { useState, useEffect } from 'react'
import "./css/Navbar.css"
import "./css/Home.css"
import Navbar from './Navbar'
import SkeletonComp from './SkeletonComp'

const Home = () => {
    const [loader, setloader] = useState(false)
    const [searchtext, setsearchtext] = useState("");
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
            setloader(true)
            setrandomimg([])
            document.title = `${capitalize(`${searchtext}`)} - OnePixel`
            setresults([])
            const url = `https://api.unsplash.com/search/photos/?query=${searchtext}&client_id=pvHLwntgGIrrErhByAuZLj0eZKDt7uyYDbe4Tk1ix44&per_page=30&orientation=squarish`;
            const res = await fetch(url);
            const data = await res.json()
            if (data.total === 0) {
                document.title = "OnePixel - Get free photos"
                alert("No results found...Try another word");
                setloader(false)
            } else {
                const results = data.results;
                setresults(results);
                setgotimg(true);
                setloader(false);
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
                    let downloadurl = e.links.download + "&force=true"
                    return (
                        <>
                            <div style={{margin:"0px 160px"}} className="mainimgcontainer randomimgrow">
                                <img key={e.id} style={{ width: "330px", height: "260px", marginTop: "10px", marginLeft: "5px" }} src={e.urls.regular} alt="randomimage" />
                                <a className="downloadlink" href={downloadurl}><i className="fas fa-download"></i></a>
                            </div>
                        </>
                    )
                })}
            </div>

            <div style={{margin:"0px 160px"}} className="row searchimgrow">
                {gotimg ? <h1 className="heading">Photos of {searchtext}</h1> : ""}
                {gotimg ? results.map((e) => {
                    let downloadurl = e.links.download + "&force=true"
                    return (
                        <>
                            <div className="mainimgcontainer">
                                <img style={{ width: "330px", height: "260px", marginTop: "10px", marginLeft: "5px" }} src={e.urls.regular} alt="searchimage" key={e.id} />
                                <a className="downloadlink" href={downloadurl}><i className="fas fa-download"></i></a>
                            </div>
                        </>
                    )
                }) : null}
            </div>
            {loader ? <SkeletonComp /> : ""}
            {gotrandomimg ? <SkeletonComp /> : ""}
        </>
    )
}

export default Home
