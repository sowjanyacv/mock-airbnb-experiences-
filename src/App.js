import React from "react"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"
import "/Users/nia/practice-app/src/style.css"

export default function App() {
    const cards = data.map(item => {
        return (
                <Card 
                    {...item}
                /> 
            )
    })

    return (<div class="main-container"> 
                <NavBar /> 
                <Hero /> 
                <section className="card-item">
                    {cards}
                </section>
            </div>)
}