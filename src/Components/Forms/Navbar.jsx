import { PureComponent, Fragment } from "react";
import "../../styles/Navbar.scss";
import ReactNotification from "react-notifications-component";
import tryfree from "../../Images/Try for free.png";
import * as React from "react";
import _ from "lodash";

class NavBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loggedIn: false,
    };
  }

  setFormApi = (formApi) => {
    this.formApi = formApi;
  };

  componentDidMount = async () => {
    console.log("rendering navbar", this.props);

  };



  render() {
    return (
      <Fragment>
        <ReactNotification ref={this.notificationDOMRef} />
        <nav class="navbar sticky-top navbar-expand-lg navbar-light">
          <div class="nav-flex">
            <div>
              <span class="nav-app"> App</span><span class="nav-lab"> Lab</span>
            </div>
            <div class="navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  Home
              </li>
                <li class="nav-item">
                  Key Features
              </li>
                <li class="nav-item">
                  Pricing
              </li>
                <li class="nav-item">
                  Testiminial
              </li>
                <li class="nav-item">
                  FAQ
              </li>
                <img src={tryfree} />
              </ul>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}
export default NavBar;

