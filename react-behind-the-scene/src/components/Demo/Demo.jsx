import React from "react";
const Demo = (props) => {
    console.log("DEMO RUNNING")

    return <p>{ props.show ? "Hello": " "}</p>;
};

export default React.memo(Demo);
