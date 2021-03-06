import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Logo from "../images/brownlogo.png"
import NavBar from "../Components/NavBar/NavBar"
import Tab from '../Components/SocialMedia/HeaderTab'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTwitter, faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Home from "../Components/Home/Home"
import History from '../Components/History/History'
import CriminalDefense from '../Components/CriminalDefense/CriminalDefense'
import Felonies from '../Components/Felonies/Felonies'
import Footer from "../Components/Footer/Footer"
library.add(fab, faTwitter, faFacebookF, faGooglePlusG, faLinkedinIn)
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="row header-main m-auto align-items-center">
              <div className="col-lg-6 text-center text-md-left">
                <img src={Logo} alt="The Brown Firm PLLC" className="Logo" />
              </div>
              <div className="d-none d-lg-block col-lg-6 text-center text-xl-right">
                <div className="row">
                  <div className="col-lg-12">
                    <Tab social="twitter" sml="https://twitter.com/ChrisB3933" />
                    <Tab social="facebook-f" sml="https://www.facebook.com/pages/The-Brown-Firm-PLLC/144745835593043" />
                    <Tab social="google-plus-g" sml="https://plus.google.com/b/103250200687561064007/103250200687561064007/" />
                    <Tab social="linkedin-in" sml="https://www.linkedin.com/pub/christopher-brown/16/497/619" />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-12">
                    <h4 className="header-text">
                      <a href="tel:703-828-0900" className="text-decoration-none text-dark">703-828-0900</a>
                    </h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <h4 className="header-text">
                      Call to schedule a consultation.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <NavBar />
          </div>
        </div>
        <main className="m-lg-5">
          <Switch>
            <Route
              path='/:felonies-and-misdemeanors'
              exact
              component={Felonies}
            />
            <Route
              path='/:criminal-defense'
              exact
              component={CriminalDefense}
            />
            <Route
              path='/:history'
              exact
              component={History}
            />
            <Route
              path='/'
              exact
              component={Home}
            />
          </Switch>
        </main>
        <div className="row mt-3">
          <div className="col-lg-12">
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
