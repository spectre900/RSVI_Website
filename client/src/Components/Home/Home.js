import React, { Component } from 'react';
import Collaboration from './Collaboration';
import Rehabilitation from './Rehabilitation';
import Mission from './Mission';
import Journey from './Journey';
import Success from './Success';
import {SliderData} from './SliderData';
import ImageSlider from './ImageSlider';
import Work from './WorksComp/Work';


class Home extends Component {
    render() {
        return (
            <div>
                <ImageSlider slides={SliderData}/>
                <Rehabilitation />
                <Work />
                <Journey />
                <Mission />
                <Success/>
                <Collaboration/>
            </div>
        );
    }
}

export default Home;
