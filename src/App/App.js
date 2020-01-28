import React, { Component } from 'react';
import Logo from "../images/brownlogo.png"
import NavBar from "../Components/NavBar/NavBar"
import Tab from '../Components/SocialMedia/HeaderTab'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faTwitter, faFacebookf, faGooglePlusG, faLinkedinin } from '@fortawesome/free-brand-svg-icons'
// import './App.css';
// library.add(fab, faTwitter, faFacebookf, faGooglePlusG, faLinkedinin)
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
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
                    <Tab />
                    <Tab />
                    <Tab />
                    <Tab />
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
      </div>
    )
  }
}

export default App;
