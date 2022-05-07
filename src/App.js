import "./App.css";
import Left from "./comp/left/leftside";
import Right from "./comp/right/rightside";
import Foot from "./comp/right/footer";
import React from "react";

function App() {
    return (
        <React.Fragment>
            <div className="ROWING">
                <Left />
                <Right />
            </div>{" "}
            <Foot />
        </React.Fragment>
    );
}

export default App;
