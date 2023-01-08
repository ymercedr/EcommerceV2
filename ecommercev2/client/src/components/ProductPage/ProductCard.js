import React from "react";
import "./ProductCard.css";

export default function ProductCard(props) {
  return (
    <div className="book-container">
      {props.bookInfo.map((book) => (
        <div className="book" key={book.productID}>
          <p className="title">{book.productTitle}</p>
          <p className="author">{book.productAuthor}</p>
          <img src={book.productImg} alt="book cover" />
          <p className="price">${book.productPrice}</p>
          <p>{book.productDescription}</p>
          <button className="shop-button">Buy Now!</button>
        </div>
      ))}
    </div>
  );
}
