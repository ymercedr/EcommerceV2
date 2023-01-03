import React from "react";
import "./Slider.css";
import { Slide } from "react-slideshow-image";

export default function Slider() {
  const slideImages = [
    {
      img: "images/glad-died.webp",
      alt: "I'm Glad My Mon Died book cover",
      review:
        "Genuine, emotional, intense, trauma-filled roller coaster of a book… I loved it. Growing up watching Jennette on TV was a childhood staple to me and my brother. This book did not disappoint. It is an incredibly humbling experience seeing someone’s life in a completely different perspective.",
      person: "Lauren M",
    },
    {
      img: "images/addie-larue.jpg",
      alt: "The Invisible Life of Addie Laure book cover",
      review:
        "I finished this book the same evening that I bought it, I didn’t know anything about it other than what was written on the blurb. I was so engrossed in Alex and Poppy’s friendship and pending romance right from the beginning and I just had to keep reading to find out what happened in Croatia! It is so beautifully written that you are able to completely visualise both of the main characters and their personalities bounce off of each-other amazingly. It’s funny, sweet, emotional, romantic all in one. I feel the need to pick it right back up and read it again. ",
      person: "Sophie Edney",
    },
    {
      img: "images/people-vacation.jpeg",
      alt: "People We Meet on Vacation book cover",
      review:
        "Just finished this book minutes ago and The Invisible Life of Addie LaRue is one of the best books I read in quite some time. I’ve seen recommendations for it everywhere and I was so glad I got it cause it was so well written and the timelines on top made it so much better to keep track and not loose focus on what the date was in the story. And the character is so beautiful described as well as her emotions.",
      person: "Cynthia Flores",
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
              {/* <p>{slideImage.review}</p>
              <p>- {slideImage.person}</p> */}
            </div>
          ))}
        </Slide>
      </div>
    </section>
  );
}
