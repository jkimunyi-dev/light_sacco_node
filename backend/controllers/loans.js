const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const loansRoute = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "jimmy254",
  database: "light_sacco",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database: " + err.stack);
    return;
  }
  console.log("Connected to database as id " + connection.threadId);
});

// CREATE - Add a new loan
loansRoute.post("/loans", (req, res) => {
  const { account_id, loan_amount, interest_rate, start_date, end_date, status } = req.body;

  const sql =
    "INSERT INTO Loans (account_id, loan_amount, interest_rate, start_date, end_date, status) VALUES (?, ?, ?, ?, ?, ?)";
  const values = [account_id, loan_amount, interest_rate, start_date, end_date, status];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error adding loan: " + err.stack);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("New loan added with ID: " + result.insertId);
    res.status(201).json({
      message: "Loan added successfully",
      loan_id: result.insertId,
    });
  });
});

// READ - Get all loans
loansRoute.get("/loans", (req, res) => {
  const sql = "SELECT * FROM Loans";
  connection.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching loans: " + err.stack);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
});

// UPDATE - Update a loan
loansRoute.put("/loans/:loan_id", (req, res) => {
  const loanId = req.params.loan_id;
  const { account_id, loan_amount, interest_rate, start_date, end_date, status } = req.body;
  const sql =
    "UPDATE Loans SET account_id = ?, loan_amount = ?, interest_rate = ?, start_date = ?, end_date = ?, status = ? WHERE loan_id = ?";
  const values = [account_id, loan_amount, interest_rate, start_date, end_date, status, loanId];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error updating loan: " + err.stack);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("Loan updated: " + result.affectedRows);
    res.json({ message: "Loan updated successfully" });
  });
});

// DELETE - Delete a loan
loansRoute.delete("/loans/:loan_id", (req, res) => {
  const loanId = req.params.loan_id;
  const sql = "DELETE FROM Loans WHERE loan_id = ?";
  connection.query(sql, loanId, (err, result) => {
    if (err) {
      console.error("Error deleting loan: " + err.stack);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("Loan deleted: " + result.affectedRows);
    res.json({ message: "Loan deleted successfully" });
  });
});

module.exports = loansRoute;
