import React from "react";
import Carousel from "react-bootstrap/Carousel";
import icon from "../../assets/img/icon-phone.png";

function CarouselPrimary() {
  return (
    <div class="container">
      <h1>hello</h1>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-15" src={icon} alt="Phone" />
          <Carousel.Caption>
            <h1>pic 1</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-15" src={icon} alt="Phone" />
          <Carousel.Caption>
            <h1>pic 2</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-15" src={icon} alt="Phone" />
          <Carousel.Caption>
            <h1>pic 3</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default CarouselPrimary;
