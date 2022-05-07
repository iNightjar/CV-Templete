import React from "react";
import Inside from "./insideRow";
class Right extends React.Component {
    render() {
        return (
            <div className="rightSide">
                <Inside />
                <Inside />
            </div>
        );
    }
}

export default Right;
