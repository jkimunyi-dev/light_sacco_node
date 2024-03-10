const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const accountsRoute = express();

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

// CREATE - Add a new account
accountsRoute.post("/accounts", (req, res) => {
  const { member_id, account_type, balance } = req.body;

  const sql =
    "INSERT INTO Accounts (member_id, account_type, balance) VALUES (?, ?, ?)";
  const values = [member_id, account_type, balance];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error adding account: " + err.stack);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("New account added with ID: " + result.insertId);
    res.status(201).json({
      message: "Account added successfully",
      account_id: result.insertId,
    });
  });
});

// READ - Get all accounts
accountsRoute.get("/accounts", (req, res) => {
  const sql = "SELECT * FROM Accounts";
  connection.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching accounts: " + err.stack);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
});

// UPDATE - Update an account
accountsRoute.put("/accounts/:account_id", (req, res) => {
  const accountId = req.params.account_id;
  const { member_id, account_type, balance } = req.body;
  const sql =
    "UPDATE Accounts SET member_id = ?, account_type = ?, balance = ? WHERE account_id = ?";
  const values = [member_id, account_type, balance, accountId];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error updating account: " + err.stack);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("Account updated: " + result.affectedRows);
    res.json({ message: "Account updated successfully" });
  });
});

// DELETE - Delete an account
accountsRoute.delete("/accounts/:account_id", (req, res) => {
  const accountId = req.params.account_id;
  const sql = "DELETE FROM Accounts WHERE account_id = ?";
  connection.query(sql, accountId, (err, result) => {
    if (err) {
      console.error("Error deleting account: " + err.stack);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("Account deleted: " + result.affectedRows);
    res.json({ message: "Account deleted successfully" });
  });
});

module.exports = accountsRoute;
