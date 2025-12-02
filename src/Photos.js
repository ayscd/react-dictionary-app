import React from "react";
import "./Photos.css";

export default function Photos(props) {
    if (props.photos) {
        return(
                <div className="Photos container">
                    <div className="row">
                        {props.photos.photos.map(function (photo, index) {
                            return (
                                <div className="col-3" key={index}>
                                    <img src={photo.src.landscape} alt={photo.src.alt} className="photo" />
                                </div>
                            )
                        })}
                    </div>
                </div>
        )
    } else {
        return null;
    }
        
}