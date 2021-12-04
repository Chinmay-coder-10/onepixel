import React from 'react';
import "./css/Skeleton.css";

const SkeletonComp = () => {
    const random = Math.ceil(Math.random());
    console.log(random);
    return (
        <>
            <div key={random} style={{ width: "330px", height: "260px", marginTop: "10px", marginLeft: "5px", display: "flex", flexDirection: "row" }} className="skeletonC">
                <div className="skeleton mx-1 my-1 ">
                    <span className="skeleton-loader"></span>
                </div>
                <div className="skeleton mx-1 my-1">
                    <span className="skeleton-loader"></span>
                </div>
                <div className="skeleton mx-1 my-1">
                    <span className="skeleton-loader"></span>
                </div>
                <div className="skeleton mx-1 my-1">
                    <span className="skeleton-loader"></span>
                </div>

            </div>
            <div key={random} style={{ width: "330px", height: "260px", marginTop: "10px", marginLeft: "5px", display: "flex", flexDirection: "row", }} className="skeletonC">
                <div className="skeleton mx-1 my-1">
                    <span className="skeleton-loader"></span>
                </div>
                <div className="skeleton mx-1 my-1">
                    <span className="skeleton-loader"></span>
                </div>
                <div className="skeleton my-1 mx-1">
                    <span className="skeleton-loader"></span>
                </div>
                <div className="skeleton my-1 mx-1">
                    <span className="skeleton-loader"></span>
                </div>
            </div>
        </>
    )
}

export default SkeletonComp
