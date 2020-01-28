import React from 'react'
import './LinkCard.css'

function LinkCard(props) {
    return (
        <div className="link-card mx-0 my-3 m-lg-3">
            <img src={props.imgLink} />
            <div className="card-label">
                <h3>{props.cardLabel}</h3>
            </div>
        </div>
    )
}
export default LinkCard