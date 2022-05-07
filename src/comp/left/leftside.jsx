import React from "react";
import Image from "./imageContainer";
import Contact from "./contact";
import Ski from "./ski1";
import Skii from "./ski2";
class Left extends React.Component {
    render() {
        return (
            <div className="leftSide">
                <Image />
                <hr />
                <Contact />
                <Ski />
                <Skii />
            </div>
        );
    }
}

export default Left;
