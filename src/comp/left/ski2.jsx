import React from "react";
class Skii extends React.Component {
    render() {
        return (
            <div className="SKII">
                <h3>
                    <i className="fa fa-asterisk fa-fw"></i>Languages
                </h3>
                <p>English</p>
                <div className="FPROGRESS">
                    <div className="curProgress cur1">90%</div>
                </div>
                <p>Spanish</p>
                <div className="FPROGRESS">
                    <div className="curProgress cur2">80%</div>
                </div>
                <p>German</p>
                <div className="FPROGRESS">
                    <div className="curProgress cur3">75%</div>
                </div>
                <br />
            </div>
        );
    }
}

export default Skii;
