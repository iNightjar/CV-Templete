import React from "react";
class Contact extends React.Component {
    render() {
        return (
            <div className="contacts">
                <p>
                    <i className="fa fa-briefcase fa-fw"></i> Designer
                </p>
                <p>
                    <i className="fa fa-home fa-fw"></i> London, UK
                </p>
                <p>
                    <i className="fa fa-envelope fa-fw"></i> ex@mail.com
                </p>
                <p>
                    <i className="fa fa-phone fa-fw"></i> 1224435534
                </p>
            </div>
        );
    }
}

export default Contact;
