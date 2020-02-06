import React, { Component } from 'react'
// import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import "./Home.css"
import Carousel from '../Carousel/Carousel'
import Contact from '../Contact/ContactHome'
import LinkCard from '../LinkCard/LinkCard'
import Criminal from '../../images/criminal-defense.jpg'
import Traffic from '../../images/traffic-defense.jpg'
import Civil from '../../images/civil-litigation.jpg'
import Map from '../Map/Map'
function Home(props) {
    return (
        <>
            <div className="row">
                <div className="col-lg-8 mb-5 mb-lg-0">
                    <Carousel />
                </div>
                <div className="col-lg-4 col-sm-6">
                    <Contact />
                </div>
                <div className="col-sm-6 d-lg-none px-4">

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.21634867391!2d-77.04777534824889!3d38.80459577948478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b283e250fa1f%3A0x3e790f2c6902346a!2sThe%20Brown%20Firm%20PLLC!5e0!3m2!1sen!2sus!4v1580270466922!5m2!1sen!2sus" width="100%" height="100%" frameborder="0" allowfullscreen=""></iframe>
                </div>

            </div>
            <div className="cards my-5">
                <div className="row">
                    <div className="col-md-4">
                        <LinkCard imgLink={Criminal} cardLabel="Criminal Defense" />
                    </div>
                    <div className="col-md-4">
                        <LinkCard imgLink={Traffic} cardLabel="Traffic Defense" />
                    </div>
                    <div className="col-md-4">
                        <LinkCard imgLink={Civil} cardLabel="Civil Litigation" />
                    </div>
                </div>
            </div>
            <hr />
            <div className="metastuff">
                <div className="row">
                    <div className="col-lg-12">
                        <Map />
                        <h3>
                            Alexandria, VA Attorneys
                        </h3>

                        <p>
                            The Brown Law Firm PLLC has earned its reputation as a trustworthy and capable law firm because of its central philosophy - it is our obligation to protect the best interests of our clients by fully investing ourselves in each case. We are able to provide reliable legal services because every member of our organization is expected to fulfil their duties while maintaining the highest legal standards and ethics.
                        </p>

                        <h4>
                            Our Tradition of Excellence
</h4>
                        <p>
                            The Brown family has maintained a tradition of excellence as legal practitioners for more than 65 years. For three generations the family has championed their clients in a manner that greatly exceeds the expectations of the client. The representation of their clients demonstrates the ideal practice of law. To learn more about the attorneys who make make up our team, visit: Firm History
</p>

                        <h4>
                            Services We Offer
</h4>
                        <p>
                            The Brown Law Firm PLLC serves clients with a wide variety of needs. The attorneys at our firm are experienced in several different areas of law including:
</p>

                        <ul>
                            <li>
                                <Link className="text-dark" to="/Civil-Litigation">
                                    Civil litigation
                        </Link>
                            </li>
                            <li>
                                <Link className="text-dark" to="/Traffic-Defense">
                                    Traffic defense
                        </Link>
                            </li>
                            <li>
                                <Link className="text-dark" to="/Criminal-Defense">
                                    Criminal defense
                        </Link>
                            </li>
                        </ul>
                        <p>
                            We are confident in our ability to represent clients in any type of court proceedings, in addition to comprehensive assistance with contracts and other formal agreements.
</p>

                        <h4>
                            <Link className="text-dark" to="/Civil-Litigation">
                                Civil Litigation
                            </Link>
                        </h4>
                        <p>
                            Unfortunately, disputes happen in life and can vary greatly. Disagreements can occur between individuals and businesses alike. Disputes occurring between two people. different businesses, neighbors, contractors/subcontractors or any combination may require legal intervention.The Brown Law Firm PLLC is able to provide comprehensive <Link className="text-dark" to="/Civil-Litigation">
                                civil litigation
                            </Link> services that are designed to prevent potential disputes or resolve conflict through mediation or formal litigation. We pride ourselves on creative solutions and always tailor our <Link className="text-dark" to="/Civil-Litigation">
                                civil litigation
                            </Link> services in a way that minimizes stress, risk and cost for the client. For a full list of our <Link className="text-dark" to="/Civil-Litigation">
                                civil litigation
                            </Link> services, please visit: <Link className="text-dark" to="/Civil-Litigation">
                                Civil Litigation
                            </Link>
                        </p>

                        <h4>
                            <Link className="text-dark" to="/Traffic-Defense">
                                Traffic Defense
                            </Link>
                        </h4>
                        <p>
                            Traffic offenses are some of the most common in Virginia and most of us at some point or another have been pulled over at on point in our lives. The penalties for different types of offenses can range from minor fees, to jail time - it all depends on the charge. Regardless of what type of traffic offense you have been charged of, it is extremely useful to have an experienced lawyer on your side. Working with an attorney can help ensure that your rights are protected and in certain cases they can advocate on your behalf in order to have the charges lessened or completely dropped. Individuals who have received a serious traffic charge such as a DUI or Reckless driving especially need to hire legal representation because the penalties could have serious negative impacts on their daily lives and their future. To learn more about our <Link className="text-dark" to="/Traffic-Defense">
                                traffic defense
                            </Link> and to see our full list of services, visit: <Link className="text-dark" to="Traffic-Defense">
                                Traffic Defense
                            </Link>
                        </p>

                        <h4>
                            <Link className="text-dark" to="/Criminal-Defense">
                                Criminal Defense
                            </Link>
                        </h4>
                        <p>
                            Once an individual has officially received a criminal charge, the next step is preparing for court. If you have received a criminal charge in the Commonwealth of Virginia, you are entitled to certain rights. If you are a defendant, proceeding into court proceedings without a licensed and qualified attorney is extremely unwise and you could receive a penalty for a charge you don’t deserve, or a penalty that doesn’t match your charge. The experienced trial lawyers at The Brown Law Firm PLLC have extensive experience in litigating criminal cases. Our litigators can ensure that your rights are protected and will take all measures to ensure you receive the best possible outcome for your case. To read more about our <Link className="text-dark" to="/Criminal-Defense">
                                criminal defense
                            </Link> services, please review: <Link className="text-dark" to="/Criminal-Defense">
                                Criminal Defense
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home