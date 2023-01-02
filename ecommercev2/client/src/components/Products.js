import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";

export default function Products() {
  const [books, setBooks] = useState([]);

  //Default Use Effect
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:3001/books");
        setBooks(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  //Filter By Price
  const filterResult = (price) => {
    const fetchFilteredPrice = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/filter/${price}`);
        setBooks(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchFilteredPrice();
  };

  // USEFUL AUTHOR
  // const filterAuthor = (author) => {
  //   const fetchFilteredAuthor = async () => {
  //     try {
  //       const res = await axios.get(`http://localhost:3001/filter/${author}`);
  //       setBooks(res.data);
  //       console.log(res);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchFilteredAuthor();
  // };

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
    <main>
      <div>
        <form>
          {/* onSubmit={() => filterAuthor()} */}
          <label for="author">Search Authors</label>
          <br />
          <input type="text" name="author" placeholder="Enter Name"></input>
        </form>
        {/* <label for="title">Search Titles</label>
        <br />
        <input type="text" name="title" placeholder="Enter Title"></input> */}
      </div>
      <div>
        <button onClick={() => filterResult("10.00")}>Less Than $10!</button>
        <button onClick={() => filterResult("15.00")}>Less Than $15!</button>
      </div>
      <div className="book-container">
        {books.map((book) => (
          <div className="book" key={book.productId}>
            <p className="title">{book.productTitle}</p>
            <p className="author">{book.productAuthor}</p>
            <img src={book.productImg} alt="book cover}" />
            <p className="price">${book.productPrice}</p>
            <p>{book.productDescription}</p>
            <button className="shop-button">Buy Now!</button>
          </div>
        ))}
      </div>
    </main>
  );
}
