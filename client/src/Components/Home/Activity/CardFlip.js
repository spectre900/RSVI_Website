import React from "react";
import Style from "./ActivityChild.module.css";
import Flippy, {FrontSide, BackSide} from 'react-flippy';
import CardContentBack from "./contentBack";
import CardContentFront from "./contentFront";
import cn from "classnames";
// import globalS from "../Assets/Global-Styles/bootstrap.min.module.css";

function FlipCard(params) {

  return (<Flippy flipOnHover={true} flipOnClick={true} flipDirection="horizontal" className={cn (Style.card)}>
    <FrontSide animationDuration="300">
      <CardContentFront image={params.img}/>
    </FrontSide>
    <BackSide animationDuration="300"><CardContentBack heading={params.head} p={params.p}/></BackSide>
  </Flippy>)
}

export default FlipCard;
