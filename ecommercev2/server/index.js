//Creating the server
const express = require("express");
const mysql = require("mysql");
// const db = require("./config/db");
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
  const q = "SELECT * from products_list";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
