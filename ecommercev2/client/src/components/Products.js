import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";

export default function Products() {
  const [books, setBooks] = useState([]);

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
  return (
    <main>
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
