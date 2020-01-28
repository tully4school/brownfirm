import React from 'react'

function LinkCard(props) {
    return (
        <div className="link-card">
            <img src={props.imglink} />
            <div className="card-label">
                <h3>{props.cardLabel}</h3>
            </div>
        </div>
    )
}
export default LinkCard