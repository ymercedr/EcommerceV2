import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Filters from "./Filters";

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

  return (
    <main>
      <Filters setBooks={setBooks} />
      <ProductCard bookInfo={books} />
    </main>
  );
}
