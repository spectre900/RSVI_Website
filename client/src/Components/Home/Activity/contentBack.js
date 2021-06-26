import React from "react";
import Style from "./ActivityChild.module.css";
import cn from "classnames";
// import globalS from "../Assets/Global-Styles/bootstrap.min.module.css";

function CardContentBack(params) {
  return <div className={cn(Style.theBack)}>
    <h5 className={Style.heading}>{params.heading}</h5>
    <p className={Style.backPara}>{params.p}</p>
  </div>
}

export default CardContentBack;
