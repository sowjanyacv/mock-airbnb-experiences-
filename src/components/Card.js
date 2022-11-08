import React from "react";
import "/Users/nia/practice-app/src/style.css"


export default function Card(props) {
    return (
        <div className="card-container">
            { props.openSpots === 0 && <div className="card-badge">SOLD OUT</div>}
            <img src={props.img} alt="card photo" />
            <div>
                <img className="star-icon" src={require("../images/Star 1.png")} alt="star" />
                <span> {props.rating} </span>
                <span className="grey">({props.reviewCount}) • {props.country}</span>
            </div>
            <div>{props.title}</div>
            <div><b>From ${props.price}</b> / person</div>
        </div>
    )
    }