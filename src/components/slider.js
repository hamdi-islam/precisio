import React from "react";

export default function slider() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div class="carousel-item active">
          <img
            className="d-block w-100"
            src="images/product/0001.png"
            alt="First slide"
          />
          <div class="carousel-caption">
            <h1>Test Sérologique Rapide</h1>
            <p>
              Précisio est une large gamme de tests diagnostiques rapides à
              l’usage des professionnels de santé et des patients.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            className="d-block w-100"
            src="images/product/0002.png"
            alt="Second slide"
          />
        </div>
        <div class="carousel-item">
          <img
            className="d-block w-100"
            src="images/product/0003.png"
            alt="Third slide"
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}
