import React from "react";
import { Carousel } from "react-bootstrap";

function BannerCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="https://res.cloudinary.com/dnwlad3kp/image/upload/v1633646026/psOneBan_1_tgetpe.png" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://res.cloudinary.com/dnwlad3kp/image/upload/v1633646026/nintendoBan_1_uybiie.png" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://res.cloudinary.com/dnwlad3kp/image/upload/v1633646026/FFIXBAN_1_xaerxw.png" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default BannerCarousel;
