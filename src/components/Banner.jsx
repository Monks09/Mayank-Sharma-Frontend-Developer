import React from "react";
import Carousel from "react-bootstrap/Carousel";
import bannerImg1 from "../assets/spacex-img1.jpg";
import bannerImg2 from "../assets/spacex-img2.jpg";
import bannerImg3 from "../assets/spacex-img3.jpg";

function Banner(props) {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 banner-img"
          src={bannerImg1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome To SpaceX</h3>
          <p>
            A private organisation planning space missions and sending stuff to
            outer space
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 banner-img"
          src={bannerImg2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Rockets</h3>
          <p>
            We have a variety of reusable rockets, some are active and some
            retired from service
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 banner-img"
          src={bannerImg3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Capsules</h3>
          <p>
            We have reusable capsules as well which have been part of multiple
            missions
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
