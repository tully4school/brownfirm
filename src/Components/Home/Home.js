import React, { Component } from 'react'
import "./Home.css"
import Carousel from '../Carousel/Carousel'
import Contact from '../Contact/ContactHome'
function Home(props) {
    return (
        <div className="row">
            <div className="col-lg-8">
                <Carousel />
            </div>
            <div className="col-lg-4">
                <Contact />
            </div>
        </div>
    )
}
export default Home