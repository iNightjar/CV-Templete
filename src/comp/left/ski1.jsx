import React from "react";
class Ski extends React.Component {
    render() {
        return (
            <div className="SKII">
                <h3>
                    <i className="fa fa-asterisk fa-fw"></i>Skills
                </h3>
                <p>Adobe Photoshop</p>
                <div className="FPROGRESS">
                    <div className="curProgress cur1">90%</div>
                </div>
                <p>Photography</p>
                <div className="FPROGRESS">
                    <div className="curProgress cur2">80%</div>
                </div>
                <p>Illustrator</p>
                <div className="FPROGRESS">
                    <div className="curProgress cur3">75%</div>
                </div>
                <p>Media</p>
                <div className="FPROGRESS">
                    <div className="curProgress cur4">50%</div>
                </div>
            </div>
        );
    }
}

export default Ski;
