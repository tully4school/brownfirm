import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Logo from "../images/brownlogo.png"
import NavBar from "../Components/NavBar/NavBar"
import Tab from '../Components/SocialMedia/HeaderTab'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTwitter, faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Home from "../Components/Home/Home"
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
                      703-828-0900
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
          <Route
            path='/'
            exact
            component={Home}
          />
        </main>
      </div>
    )
  }
}

export default App;
