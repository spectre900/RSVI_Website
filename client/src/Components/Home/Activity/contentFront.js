import React from "react";
import Style from "./ActivityChild.module.css"
import cn from "classnames";
// import globalS from "../Assets/Global-Styles/bootstrap.min.module.css";

function CardContentFront(params) {
  return (<div >
    <img src={params.image} alt="Departmental vector" className={cn(Style.image)}/>
    {/* <h5 className={Style.heading}>{params.heading}</h5> */}
  </div>)
}

export default CardContentFront;

// className={Style.content}