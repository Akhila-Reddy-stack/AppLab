import '../../styles/companies.scss'
import { withSnackbar } from 'notistack';
import React, { Fragment, PureComponent } from 'react';
import trusted from "../../Images/trusted.png";
import Group2 from "../../Images/Group 44.png";
import Group3 from "../../Images/Group 56.png";
import Group4 from "../../Images/Group 57.png";
import Group5 from "../../Images/Group 86.png";
import Group1 from "../../Images/9.png";
import awe1 from "../../Images/awe1.png";
import awe2 from "../../Images/awe2.png";

class Companies extends PureComponent {
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
                    <br /><br />
                    <div class="trust">
                        <img src={trusted} />
                    </div>
                    <br /><br />
                    <div class="companies">
                        <div class="group">
                            <img src={Group1} />
                        </div>
                        <div class="group">
                            <img src={Group2} />
                        </div>

                        <div class="group">
                            <img src={Group3} />
                        </div>
                        <div class="group">
                            <img src={Group4} />
                        </div>
                        <div class="group">
                            <img src={Group5} />
                        </div>
                    </div>
                    <br /><br />
                    <br /><br /> <br /><br />
                    <div class="dis-flex">
                        <div >
                            <img src={awe1} class="" />
                        </div>
                        <div >
                            <img src={awe2} class="" />
                        </div>
                    </div>
                    <br /><br />
                </div>

            </Fragment>
        );
    }
}

export default withSnackbar(Companies);



