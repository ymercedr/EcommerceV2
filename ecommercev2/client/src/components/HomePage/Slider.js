import React from "react";
import "./Slider.css";
import { Slide } from "react-slideshow-image";

export default function Slider() {
  const slideImages = [
    {
      img: "images/glad-died.webp",
      alt: "I'm Glad My Mon Died book cover",
    },
    {
      img: "images/addie-larue.jpg",
      alt: "The Invisible Life of Addie Laure book cover",
    },
    {
      img: "images/people-vacation.jpeg",
      alt: "People We Meet on Vacation book cover",
    },
  ];
  return (
    <section className="staffpicks-container">
      <h3>Staff Picks</h3>
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-fill"></i>
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <img src={slideImage.img} alt={slideImage.alt} />
            </div>
          ))}
        </Slide>
      </div>
    </section>
  );
}
