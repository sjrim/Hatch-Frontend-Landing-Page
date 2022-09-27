import React from "react";
import "./Banner.scss";
import hero from "../../assets/hero-image.png";

const logger = (event) => {
  console.log("Button has been clicked!");
};

function Banner() {
  return (
    <section className="mainBody">
      <div className="banner-img-container">
        <img
          className="banner-image"
          sizes="100vw"
          src={hero}
          alt="this img didnt load"
        />
      </div>
      <div className="banner-text">
        <h1>Rise & Shine</h1>
        <p>
          Coffee cortado, qui beans galão froth to go. blue mountain et single
          origin aged flavour varitey affogato
        </p>
        <button onClick={logger}>LEARN MORE</button>
      </div>
    </section>
  );
}

export default Banner;
