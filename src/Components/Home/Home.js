import React, { Component } from 'react'
import "./Home.css"
import Carousel from '../Carousel/Carousel'
function Home(props) {
    return (
        <div className="row">
            <div className="col-lg-8 offset-1">
                <Carousel />
            </div>
        </div>
    )
}
export default Home