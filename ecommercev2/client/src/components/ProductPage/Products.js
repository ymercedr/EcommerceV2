import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Filters from "./Filters";

export default function Products() {
  const [books, setBooks] = useState([]);
  const dbEnpoint = "http://44.208.33.253:3001";

  //Default Use Effect
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get(`${dbEnpoint}/books`);
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
      <Filters setBooks={setBooks} dbConnection={dbEnpoint} />
      <ProductCard bookInfo={books} />
    </main>
  );
}
