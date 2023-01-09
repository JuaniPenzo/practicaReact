import React from "react";
import { FileX } from "react-bootstrap-icons";

function Loader(){
    const style = {
        display: "flex", 
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center"
    }
    return(
        <div style={style}>
            <div className="spinner-border m-5" role="status" >
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loader