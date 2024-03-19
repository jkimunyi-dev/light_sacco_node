const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const loanTypesRoute = express();

require("dotenv").config();
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database: " + err.stack);
    return;
  }
  console.log("Connected to database as id " + connection.threadId);
});

// CREATE - Add a new loan type
loanTypesRoute.post("/loan-types", (req, res) => {
  const { loan_type_name, max_loan_amount, interest_rate } = req.body;

  const sql =
    "INSERT INTO LoanTypes (loan_type_name, max_loan_amount, interest_rate) VALUES (?, ?, ?)";
  const values = [loan_type_name, max_loan_amount, interest_rate];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error adding loan type: " + err.stack);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("New loan type added with ID: " + result.insertId);
    res.status(201).json({
      message: "Loan type added successfully",
      loan_type_id: result.insertId,
    });
  });
});

// READ - Get all loan types
loanTypesRoute.get("/loan-types", (req, res) => {
  const sql = "SELECT * FROM LoanTypes";
  connection.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching loan types: " + err.stack);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
});

// UPDATE - Update a loan type
loanTypesRoute.put("/loan-types/:loan_type_id", (req, res) => {
  const loanTypeId = req.params.loan_type_id;
  const { loan_type_name, max_loan_amount, interest_rate } = req.body;
  const sql =
    "UPDATE LoanTypes SET loan_type_name = ?, max_loan_amount = ?, interest_rate = ? WHERE loan_type_id = ?";
  const values = [loan_type_name, max_loan_amount, interest_rate, loanTypeId];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error updating loan type: " + err.stack);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("Loan type updated: " + result.affectedRows);
    res.json({ message: "Loan type updated successfully" });
  });
});

// DELETE - Delete a loan type
loanTypesRoute.delete("/loan-types/:loan_type_id", (req, res) => {
  const loanTypeId = req.params.loan_type_id;
  const sql = "DELETE FROM LoanTypes WHERE loan_type_id = ?";
  connection.query(sql, loanTypeId, (err, result) => {
    if (err) {
      console.error("Error deleting loan type: " + err.stack);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("Loan type deleted: " + result.affectedRows);
    res.json({ message: "Loan type deleted successfully" });
  });
});

module.exports = loanTypesRoute;
