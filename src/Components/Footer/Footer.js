import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <div className="row">
                <div className="col-lg-6 d-flex align-items-center">
                    <p class="copyright m-0 mx-5">
                        © <Link to='/'>The Brown Firm PLLC</Link>, All Rights Reserved
                        </p>
                </div>
                <div className="col-lg-4 offset-2">
                    <p className="mx-5 mt-3">526 King Street, Suite 213 | Alexandria, VA 22314</p>
                    <p className="mx-5">Phone: <a href="tel:703-828-0900">703-828-0900</a></p>
                </div>
            </div>
        </footer>
    )
}
export default Footer