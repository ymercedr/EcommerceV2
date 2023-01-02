//Creating the server
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

//MySQL Connection
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "devuser",
  password: "Y16road2hire",
  database: "EcomProducts",
});

app.get("/", (req, res) => res.json("Hello this is the backend."));

//Route to get all products
app.get("/books", (req, res) => {
  const q = "SELECT * FROM products_list";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//Route to get all products x amount or less
app.get("/filter/:amount", (req, res) => {
  const price = req.params.amount;
  // console.log(req.params.amount);
  // console.log(price);
  const q = `SELECT * FROM products_list WHERE productPrice <= ${price}`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//USEFULL AUTHOR
//Route to get all books from a specific author
// app.get("/filter/:author", (req, res) => {
//   const aName = req.params.author;
//   console.log(req.params.author);
//   // console.log(price);
//   const q = `SELECT * FROM products_list WHERE productAuthor = ${aName}`;
//   db.query(q, (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// });

//INITIAL ROUTES TO GET ALL PRODUCTS $10/$15 OR LESS
// app.get("/lessThanTen", (req, res) => {
//   const q = "SELECT * FROM products_list WHERE productPrice <= 10.00";
//   db.query(q, (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// });

// // Route to get all products $10 or less
// app.get("/lessThanFifteen", (req, res) => {
//   const q = "SELECT * FROM products_list WHERE productPrice <= 15.00";
//   db.query(q, (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
