import React from "react";
import axios from "axios";
import "./Filters.css";

export default function Filters(props) {
  //-------------------------- FILTER FUNCTIONS ------------------------------
  //Filter By Price
  const filterPrice = (price) => {
    const fetchFilteredPrice = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/filter/${price}`);
        props.setBooks(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchFilteredPrice();
  };

  //Filter By Genre
  const filterGenre = (genre) => {
    // console.log(genre);
    const fetchFilteredGenre = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/genre/${genre}`);
        props.setBooks(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchFilteredGenre();
  };

  //INITIAL IF ELSE FILTER
  // if (filter === "lessThanTen") {
  //   const fetchLessThanTen = async () => {
  //     try {
  //       const res = await axios.get(`http://localhost:3001/${filter}`);
  //       setBooks(res.data);
  //       console.log(res);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchLessThanTen();
  // } else if (filter === "lessThanFifteen") {
  //   const fetchLessThanFifteen = async () => {
  //     try {
  //       const res = await axios.get(`http://localhost:3001/${filter}`);
  //       setBooks(res.data);
  //       console.log(res);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchLessThanFifteen();

  return (
    <section className="filters">
      <div className="genreFilter">
        <p>Browse by Genre:</p>
        <div className="genreButtons">
          <button onClick={() => filterGenre(`"Science Fiction"`)}>
            Science Fiction
          </button>
          <button onClick={() => filterGenre(`"Historical Fiction"`)}>
            Historical Fiction
          </button>
          <button onClick={() => filterGenre(`"Mystery"`)}>Mystery</button>
          <button onClick={() => filterGenre(`"Biography"`)}>Biography</button>
          <button onClick={() => filterGenre(`"Fiction"`)}>Fiction</button>
          <button onClick={() => filterGenre(`"Romance"`)}>Romance</button>
          <button onClick={() => filterGenre(`"Young Adult"`)}>
            Young Adult
          </button>
        </div>
      </div>
      <div className="priceFilter">
        <p>Browse by Price:</p>
        <div className="priceButtons">
          <button onClick={() => filterPrice("10.00")}>Under $10!</button>
          <button onClick={() => filterPrice("15.00")}>Under $15!</button>
          <button onClick={() => filterPrice("20.00")}>Under $20!</button>
        </div>
      </div>
    </section>
  );
}
