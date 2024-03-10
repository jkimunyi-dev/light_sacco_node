const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const loanRepaymentsRoute = express();

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

// CREATE - Add a new loan repayment
loanRepaymentsRoute.post("/loan-repayments", (req, res) => {
  const { loan_id, payment_amount, payment_date } = req.body;

  const sql =
    "INSERT INTO LoanRepayments (loan_id, payment_amount, payment_date) VALUES (?, ?, ?)";
  const values = [loan_id, payment_amount, payment_date];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error adding loan repayment: " + err.stack);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("New loan repayment added with ID: " + result.insertId);
    res.status(201).json({
      message: "Loan repayment added successfully",
      repayment_id: result.insertId,
    });
  });
});

// READ - Get all loan repayments
loanRepaymentsRoute.get("/loan-repayments", (req, res) => {
  const sql = "SELECT * FROM LoanRepayments";
  connection.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching loan repayments: " + err.stack);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
});

// UPDATE - Update a loan repayment
loanRepaymentsRoute.put("/loan-repayments/:repayment_id", (req, res) => {
  const repaymentId = req.params.repayment_id;
  const { loan_id, payment_amount, payment_date } = req.body;
  const sql =
    "UPDATE LoanRepayments SET loan_id = ?, payment_amount = ?, payment_date = ? WHERE repayment_id = ?";
  const values = [loan_id, payment_amount, payment_date, repaymentId];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error updating loan repayment: " + err.stack);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("Loan repayment updated: " + result.affectedRows);
    res.json({ message: "Loan repayment updated successfully" });
  });
});

// DELETE - Delete a loan repayment
loanRepaymentsRoute.delete("/loan-repayments/:repayment_id", (req, res) => {
  const repaymentId = req.params.repayment_id;
  const sql = "DELETE FROM LoanRepayments WHERE repayment_id = ?";
  connection.query(sql, repaymentId, (err, result) => {
    if (err) {
      console.error("Error deleting loan repayment: " + err.stack);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("Loan repayment deleted: " + result.affectedRows);
    res.json({ message: "Loan repayment deleted successfully" });
  });
});

module.exports = loanRepaymentsRoute;
