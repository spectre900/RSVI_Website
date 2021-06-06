import React from "react";
import Style from "./style.module.css";

function CardContentBack() {
  return <div className={Style.theBack}>
    <button className={Style.btn}>View Vacancies</button>
  </div>
}

export default CardContentBack;
