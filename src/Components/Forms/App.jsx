import { Form } from 'informed';
import '../../styles/companies.scss'
import { withSnackbar } from 'notistack';
import React, { Fragment, PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Button, FormGroup } from 'reactstrap';
import { Col, Container, Row } from 'reactstrap';
import awesome from "../../Images/Awesome apps features.png";
import smart from "../../Images/smart.png";
import rise from "../../Images/rise.png";
import bill from "../../Images/bill.png";
import auto from "../../Images/auto.png";
import bloodtest1 from "../../Images/bloodtest1.png";
import bloodtest2 from "../../Images/bloodtest2.png";
import bloodtest3 from "../../Images/bloodtest3.png";
import trial from "../../Images/trial.png";
import ultimate from "../../Images/ultimate.png";
import custom from "../../Images/custom.png";
import Group91 from "../../Images/Group 91.png";
import app from "../../Images/Why you should choose our app.png";
import client from "../../Images/client.png";
import fa from "../../Images/fa.png";
import download from "../../Images/download-app.png";
import appdev from "../../Images/appdev.png";
import planning from "../../Images/planning.png";
import getfeatures from "../../Images/getfeatures.png";
import pay from "../../Images/pay.png";
import applabhead from "../../Images/applabhead.png";
import applabfooter from "../../Images/applabfooter.png";

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: {},

        }
    }

    render() {
        return (
            <Fragment>
                <div>
                    <div class="dis-flex">
                        <div class="trust">
                            <img src={ultimate} class="appd" />
                            <img src={appdev} class="appdev" />
                        </div>
                        <div class="trust">
                            <img src={planning} class="planning" />
                        </div>
                    </div>
                    <br />  <br />
                    <div class="trust">
                        <img src={getfeatures} />
                    </div>
                    <div class="trust">
                        <img src={pay} />
                    </div>
                    <div>
                        <img src={client} />
                    </div>
                    <div class="trust">
                        <img src={fa} />
                    </div>
                    <div class="trust">
                        <img src={applabhead} />
                    </div>
                    <div class="trust">
                        <img src={applabfooter} />
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default withSnackbar(App);



