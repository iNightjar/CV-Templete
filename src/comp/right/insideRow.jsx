import React from "react";
class Inside extends React.Component {
    render() {
        return (
            <div className="theInsideRow">
                <h3>
                    <i className="fa fa-briefcase fa-fw"></i> Work Experience
                </h3>
                <div className="jobInformation">
                    <h5>Front End Developer / w3schools.com</h5>
                    <h6>
                        <i className="fa fa-calendar fa-fw"></i>Jan 2015 -{" "}
                        <span className="cur">Current</span>
                    </h6>
                    <p>
                        Lorem ipsum dolor sit amet. Praesentium magnam
                        consectetur vel in deserunt aspernatur est reprehenderit
                        sunt hic. Nulla tempora soluta ea et odio, unde
                        doloremque repellendus iure, iste.
                    </p>
                </div>
                <hr />
                <div className="jobInformation">
                    <h5>Web Developer / something.com</h5>
                    <h6>
                        <i className="fa fa-calendar fa-fw"></i>Mar 2012 - Dec
                        2014
                    </h6>
                    <p>
                        Consectetur adipisicing elit. Praesentium magnam
                        consectetur vel in deserunt aspernatur est reprehenderit
                        sunt hic. Nulla tempora soluta ea et odio, unde
                        doloremque repellendus iure, iste.
                    </p>
                </div>
                <hr />
                <div className="jobInformation">
                    <h5>Graphic Designer / designsomething.com</h5>
                    <h6>
                        <i className="fa fa-calendar fa-fw"></i>Jun 2010 - Mar
                        2012
                    </h6>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                    </p>
                </div>
            </div>
        );
    }
}

export default Inside;
