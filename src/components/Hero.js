import React from "react";
import "/Users/nia/practice-app/src/style.css"


export default function Hero() {
    return (
        <div class="hero-container">
            <img src={require('../images/Group 77.png')} alt="group images" />
            <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}