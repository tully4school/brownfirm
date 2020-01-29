import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <div className="row">
                <div className="copyright col-lg-6 d-flex py-2 py-lg-0 align-items-center">
                    <p class="copyright m-0 mx-sm-5">
                        © <Link className="text-light" to='/'>The Brown Firm PLLC</Link>, All Rights Reserved
                        </p>
                </div>
                <div className="col-lg-4 offset-lg-2 d-inline-flex address">
                    <p className="mx-lg-5 mt-lg-3">526 King Street, Suite 213 | Alexandria, VA 22314</p>
                    <p className="ml-2 mx-lg-5">Phone: <a className="text-light" href="tel:703-828-0900">703-828-0900</a></p>
                </div>
            </div>
        </footer>
    )
}
export default Footer