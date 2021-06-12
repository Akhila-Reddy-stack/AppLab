import { Form } from 'informed';
import '../../styles/landingpage.scss'
import { withSnackbar } from 'notistack';
import React, { Fragment, PureComponent } from 'react';
import Vector from "../../Images/vector1.png";
import Editor from "../../Images/#1 Editiors Choice App of 2020.png";
import rectangle from "../../Images/Rectangle 2 copy.png";
import crt from "../../Images/ct.png";
import Bestapp from "../../Images/Best app for your modern lifestyle.png";
import productivity from "../../Images/productivity.png";
import tryfree from "../../Images/Try for free.png";
import demo from "../../Images/Watch demo video.png";


class LandingPage extends PureComponent {
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
                    <div className="dis-flex">
                        <div className="page-wrapper">
                            <div className="dis-flex wrap-bg">
                                <div >
                                    <img src={crt} class="crt" />
                                    <img src={rectangle} />
                                </div>
                                <div class="choice" >
                                    <img src={Editor} />
                                </div>
                            </div>
                            <br /> <br />
                            <div> <img src={Bestapp} /></div> <br /> <br />
                            <div> <img src={productivity} /></div>
                            <br /> <br />
                            <div className="dis-flex">
                                <div >
                                    <img src={tryfree} class="" />
                                </div>
                                <div class="demo">
                                    <img src={demo} />
                                </div>
                            </div>
                        </div>
                        <div className="vector">
                            <img src={Vector} />
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default withSnackbar(LandingPage);



