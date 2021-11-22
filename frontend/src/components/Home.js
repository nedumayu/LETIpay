import React from 'react';
import FirstSlide from "../assets/first-slide.png"
import SecondSlide from "../assets/second-slide.png"
import ThirdSlide from "../assets/third-slide.png"

import {Carousel} from "react-bootstrap";

class Home extends React.Component {
    render() {
        return (
            <div style={{margin: "20px auto", width: "90%"}}>
                <Carousel slade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={FirstSlide}
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={SecondSlide}
                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ThirdSlide}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>

            </div>
        );
    }
}

export default Home;