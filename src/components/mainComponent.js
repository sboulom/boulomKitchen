import React, { Component } from 'react';
import Header from './headerComponent';
import Footer from './footerComponent';
import Carousel from './carouselComponent'

class Main extends Component {

    render() {
        return (
            <>
                <Header />
                <div className = "container carouselPhoto">

                <Carousel />
                </div>
                <Footer />
            </>
        );
    }
}

export default Main;