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
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 banner-img"
          src={bannerImg2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 banner-img"
          src={bannerImg3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
