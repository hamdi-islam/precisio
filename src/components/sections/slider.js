import React, { useEffect, useState } from "react";

function Slider() {
  const [imageIndex, setImageIndex] = useState(1);
  const [dragging, setDragging] = useState(true);
  const [dragStartIndex, setDragStartIndex] = useState(1);
  const [dragStart, setDragStart] = useState(0);
  const images = new Array(100);
  const pixelsPerDegree = 1;

  const handleMouseDown = (event) => {
    event.persist();
    setDragging(true);
    setDragStartIndex(imageIndex);
    setDragStart(event.screenX);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const updateImageIndex = (currentPosition) => {
    const numImages = images.length;
    const pixelsPerImage = pixelsPerDegree * (360 / numImages);

    // pixels moved
    let dx = (currentPosition - dragStart) / pixelsPerImage;
    let index = Math.floor(dx) % numImages;
    if (index < 0) {
      index = numImages + index - 1;
    }
    index = (index + dragStartIndex) % numImages;
    if (index !== imageIndex) {
      if (index === 0) {
        console.log(dragStartIndex, numImages);
      }
      setImageIndex(index === 0 ? 1 : index);
    }
  };

  const handleMouseMove = (event) => {
    if (dragging) {
      updateImageIndex(event.screenX);
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove, false);
    document.addEventListener("mouseup", handleMouseUp, false);
  });

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
            src={`images/product/${imageIndex}.png`}
            alt="First slide"
            id="3d"
            onMouseDown={(e) => handleMouseDown(e)}
            //onDrag={(e) => handleMouseDown(e)}
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
            src="images/product/2.png"
            alt="Second slide"
          />
          <div class="carousel-caption">
            <h1>Test Combo Rapide</h1>
            <p>
              Précisio est une large gamme de tests diagnostiques rapides à
              l’usage des professionnels de santé et des patients.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            className="d-block w-100"
            src="images/product/3.png"
            alt="Third slide"
          />
          <div class="carousel-caption">
            <h1>Test Antigénique Rapide</h1>
            <p>
              Précisio est une large gamme de tests diagnostiques rapides à
              l’usage des professionnels de santé et des patients.
            </p>
          </div>
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

export default Slider;
