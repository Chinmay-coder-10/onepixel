// import React, { useState } from 'react'
// // import "./css/Image.css"

// const Image = () => {
//     const [searchtext, setsearchtext] = useState("")
//     const [isimage, setisimage] = useState(false)
//     const [image, setimage] = useState("")
//     const [results, setresults] = useState([])
//     async function searchPhotos() {
//         if (searchtext) {
//             const url = `https://api.unsplash.com/search/photos/?client_id=pvHLwntgGIrrErhByAuZLj0eZKDt7uyYDbe4Tk1ix44&query=${searchtext}&per_page=30`;
//             const res = await fetch(url);
//             const data = await res.json();
//             const results = data.results;
//             setresults(results)
//             setisimage(true)
//             // console.log(results);
//         } else {
//             alert("Search Text cannot be blank")
//         }
//     }
//     return (
//         <>
//             <h1>Igsaf</h1>
//             {isimage ? results.map((e) => {
//                 // console.log(e.urls.raw);
//                 // setimage(e.urls.raw)
//                 // setisimage(true)
//                 return (
//                     <img style={{ height: "100px", width: "100px" }} src={e.urls.raw} />
//                 )
//             }) : null}
//         </>
//     )
// }

// export default Image
