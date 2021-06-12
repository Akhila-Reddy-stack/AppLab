import '../../styles/companies.scss'
import { withSnackbar } from 'notistack';
import React, { Fragment, PureComponent } from 'react';
import smart from "../../Images/smart.png";
import rise from "../../Images/rise.png";
import bill from "../../Images/bill.png";
import auto from "../../Images/auto.png";
import bloodtest1 from "../../Images/bloodtest1.png";
import bloodtest2 from "../../Images/bloodtest2.png";
import bloodtest3 from "../../Images/bloodtest3.png";
import Network from "../../Images/Network Effect.png";
import network from "../../Images/network.png";
import badge from "../../Images/badge.png";
import rewards from "../../Images/Bigger Rewards Method.png";
import Group91 from "../../Images/Group 91.png";
import custom from "../../Images/custom.png";
import Choice from "../../Images/Why you should choose our app.png";
import integration from "../../Images/integration.png";

class Types extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: {},

        }
    }

    render() {
        const { Gender } = this.state;
        return (
            <Fragment>
                <div>
                    <div class="dis-flex dis-smart">
                        <div>
                            <img src={smart}  />
                        </div>
                        <div class="vertical"></div>
                        <div class="rise">
                            <img src={rise}  />
                        </div>
                    </div>
                    <br />  <br />
                    <div class="dis-flex network">
                        <div >
                            <img src={bill}  />
                            <img src={auto}  />
                            <img src={bloodtest1}  />
                        </div>
                        <div >
                            <img src={network}  />
                            <img src={Network}  />
                            <img src={bloodtest2}  />
                        </div>
                        <div >
                            <img src={badge}  />
                            <img src={rewards}  />
                            <img src={bloodtest3}  />
                        </div>
                    </div>
                    <br />  <br />  <br />
                    <div class="dis-flex">
                        <img src={integration}  />
                    </div>
                    <div class="trust">
                        <img src={Choice}  />
                    </div>
                    <br />  <br />
                    <div class="trust">
                        <img src={rise}  />
                    </div>
                    <br />  <br />
                    <div >
                        <div class="grp91">
                            <img src={Group91}  />
                        </div>
                        <div >
                            <img src={custom}  />
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default withSnackbar(Types);



