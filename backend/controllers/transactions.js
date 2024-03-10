const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const transactionsRoute = express();

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

// CREATE - Add a new transaction
transactionsRoute.post("/transactions", (req, res) => {
  const { account_id, transaction_type, amount, transaction_date } = req.body;

  const sql =
    "INSERT INTO Transactions (account_id, transaction_type, amount, transaction_date) VALUES (?, ?, ?, ?)";
  const values = [account_id, transaction_type, amount, transaction_date];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error adding transaction: " + err.stack);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("New transaction added with ID: " + result.insertId);
    res.status(201).json({
      message: "Transaction added successfully",
      transaction_id: result.insertId,
    });
  });
});

// READ - Get all transactions
transactionsRoute.get("/transactions", (req, res) => {
  const sql = "SELECT * FROM Transactions";
  connection.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching transactions: " + err.stack);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
});

// UPDATE - Update a transaction
transactionsRoute.put("/transactions/:transaction_id", (req, res) => {
  const transactionId = req.params.transaction_id;
  const { account_id, transaction_type, amount, transaction_date } = req.body;
  const sql =
    "UPDATE Transactions SET account_id = ?, transaction_type = ?, amount = ?, transaction_date = ? WHERE transaction_id = ?";
  const values = [account_id, transaction_type, amount, transaction_date, transactionId];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error updating transaction: " + err.stack);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("Transaction updated: " + result.affectedRows);
    res.json({ message: "Transaction updated successfully" });
  });
});

// DELETE - Delete a transaction
transactionsRoute.delete("/transactions/:transaction_id", (req, res) => {
  const transactionId = req.params.transaction_id;
  const sql = "DELETE FROM Transactions WHERE transaction_id = ?";
  connection.query(sql, transactionId, (err, result) => {
    if (err) {
      console.error("Error deleting transaction: " + err.stack);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("Transaction deleted: " + result.affectedRows);
    res.json({ message: "Transaction deleted successfully" });
  });
});

module.exports = transactionsRoute;
