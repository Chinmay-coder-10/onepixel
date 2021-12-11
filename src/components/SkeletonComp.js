import React from 'react';
import "./css/Skeleton.css";

const SkeletonComp = () => {
    return (
        <>
            <div style={{ width: "330px", height: "260px",  display: "flex", flexDirection: "row", margin: "2px 160px" }} className="skeletonC">
                <div className="skeleton mx-1 my-1 ">
                    <span className="skeleton-loader"></span>
                </div>
                <div className="skeleton mx-1 my-1">
                    <span className="skeleton-loader"></span>
                </div>
                <div className="skeleton mx-1 my-1">
                    <span className="skeleton-loader"></span>
                </div>
            </div>
            <div style={{ width: "330px", height: "260px", display: "flex", flexDirection: "row", margin: "15px 160px" }} className="skeletonC">
                <div className="skeleton mx-1 my-1 ">
                    <span className="skeleton-loader"></span>
                </div>
                <div className="skeleton mx-1 my-1">
                    <span className="skeleton-loader"></span>
                </div>
                <div className="skeleton mx-1 my-1">
                    <span className="skeleton-loader"></span>
                </div>
            </div>
        </>
    )
}

export default SkeletonComp
