import React from "react";
import pic2 from "./pic2.jpeg";
class Image extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="imgContainer">
                    <div className="FAKEIMAGE">
                        <img
                            src={pic2}
                            alt="iNightjar"
                            height="190"
                            width="210"
                        />
                    </div>
                    <div className="name">iNightjar"Muhamed Medhat"</div>
                </div>
            </React.Fragment>
        );
    }
}

export default Image;
