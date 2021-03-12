import React, { Component } from 'react'
import './tourList.scss';
import Tour from '../tour/index';
import {tourData} from '../tourData';

class TourList extends Component {
    state={
        tours: tourData
    };

    render() {
        console.log(this.state.tours);
        return(
            <div>
                <section className="tourlist"><Tour /></section>
            </div>
        );
    }
}

export default TourList; 