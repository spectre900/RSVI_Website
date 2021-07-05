import React, { Component } from 'react';

import FAQs from './FAQs/FAQs';
import FAQImage from './FAQImage/FAQImage';
import ToContactUs from './ToContactUs/ToContactUs';

class FAQ extends Component {
    render() {
        return (
            <div>
                <FAQImage />
                <FAQs />
                <ToContactUs />
            </div>
        )
    }
}

export default FAQ;
