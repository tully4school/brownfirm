import React, { Component } from 'react'
import "./Home.css"
import Carousel from '../Carousel/Carousel'
import Contact from '../Contact/ContactHome'
import LinkCard from '../LinkCard/LinkCard'
import Criminal from '../../images/criminal-defense.jpg'
import Traffic from '../../images/traffic-defense.jpg'
import Civil from '../../images/civil-litigation.jpg'
function Home(props) {
    return (
        <>
            <div className="row">
                <div className="col-lg-8">
                    <Carousel />
                </div>
                <div className="col-lg-4">
                    <Contact />
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
                        Alexandria, VA Attorneys
The Brown Law Firm PLLC has earned its reputation as a trustworthy and capable law firm because of its central philosophy - it is our obligation to protect the best interests of our clients by fully investing ourselves in each case. We are able to provide reliable legal services because every member of our organization is expected to fulfil their duties while maintaining the highest legal standards and ethics.

Our Tradition of Excellence
The Brown family has maintained a tradition of excellence as legal practitioners for more than 65 years. For three generations the family has championed their clients in a manner that greatly exceeds the expectations of the client. The representation of their clients demonstrates the ideal practice of law. To learn more about the attorneys who make make up our team, visit: Firm History

Services We Offer
The Brown Law Firm PLLC serves clients with a wide variety of needs. The attorneys at our firm are experienced in several different areas of law including:

Civil litigation
Traffic defense
Criminal defense
We are confident in our ability to represent clients in any type of court proceedings, in addition to comprehensive assistance with contracts and other formal agreements.

Civil Litigation
Unfortunately, disputes happen in life and can vary greatly. Disagreements can occur between individuals and businesses alike. Disputes occurring between two people. different businesses, neighbors, contractors/subcontractors or any combination may require legal intervention.The Brown Law Firm PLLC is able to provide comprehensive civil litigation services that are designed to prevent potential disputes or resolve conflict through mediation or formal litigation. We pride ourselves on creative solutions and always tailor our civil litigation services in a way that minimizes stress, risk and cost for the client. For a full list of our civil litigation services, please visit: Civil Litigation

Traffic Defense
Traffic offenses are some of the most common in Virginia and most of us at some point or another have been pulled over at on point in our lives. The penalties for different types of offenses can range from minor fees, to jail time - it all depends on the charge. Regardless of what type of traffic offense you have been charged of, it is extremely useful to have an experienced lawyer on your side. Working with an attorney can help ensure that your rights are protected and in certain cases they can advocate on your behalf in order to have the charges lessened or completely dropped. Individuals who have received a serious traffic charge such as a DUI or Reckless driving especially need to hire legal representation because the penalties could have serious negative impacts on their daily lives and their future. To learn more about our traffic defense and to see our full list of services, visit: Traffic Defense

Criminal Defense
Once an individual has officially received a criminal charge, the next step is preparing for court. If you have received a criminal charge in the Commonwealth of Virginia, you are entitled to certain rights. If you are a defendant, proceeding into court proceedings without a licensed and qualified attorney is extremely unwise and you could receive a penalty for a charge you don’t deserve, or a penalty that doesn’t match your charge. The experienced trial lawyers at The Brown Law Firm PLLC have extensive experience in litigating criminal cases. Our litigators can ensure that your rights are protected and will take all measures to ensure you receive the best possible outcome for your case. To read more about our criminal defense services, please review: Criminal Defense
                    </div>
                </div>

            </div>
        </>
    )
}
export default Home