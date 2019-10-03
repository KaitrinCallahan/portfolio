import React from "react";
import Carousel from "react-bootstrap/Carousel";
import icon1 from "../../assets/img/icon-phone.png";
import icon2 from "../../assets/img/light-bulb.svg";

function CarouselPrimary() {
  return (
    <div className="container">
      <div className="row spacer-m">
        <div className="col col-sm-4">
          <img src={icon1} alt="phone"></img>
          <h2>Inuitive U.I.</h2>
        </div>
        <div className="col col-sm-4">
          <img src={icon1} alt="lightbulb"></img>
          <h2>Fully Responsive</h2>
        </div>
        <div className="col col-sm-4">
          <img src={icon1} alt="phone"></img>
          <h2>Dynamic</h2>
        </div>
      </div>

      {/* <Carousel>
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
      </Carousel> */}
    </div>
  );
}
export default CarouselPrimary;
