const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const guarantorsRoute = express();

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

// CREATE - Add a new guarantor
guarantorsRoute.post("/guarantors", (req, res) => {
  const { member_id, loan_id } = req.body;

  const sql =
    "INSERT INTO Guarantors (member_id, loan_id) VALUES (?, ?)";
  const values = [member_id, loan_id];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error adding guarantor: " + err.stack);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("New guarantor added with ID: " + result.insertId);
    res.status(201).json({
      message: "Guarantor added successfully",
      guarantor_id: result.insertId,
    });
  });
});

// READ - Get all guarantors
guarantorsRoute.get("/guarantors", (req, res) => {
  const sql = "SELECT * FROM Guarantors";
  connection.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching guarantors: " + err.stack);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
});

// UPDATE - Update a guarantor
guarantorsRoute.put("/guarantors/:guarantor_id", (req, res) => {
  const guarantorId = req.params.guarantor_id;
  const { member_id, loan_id } = req.body;
  const sql =
    "UPDATE Guarantors SET member_id = ?, loan_id = ? WHERE guarantor_id = ?";
  const values = [member_id, loan_id, guarantorId];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error updating guarantor: " + err.stack);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("Guarantor updated: " + result.affectedRows);
    res.json({ message: "Guarantor updated successfully" });
  });
});

// DELETE - Delete a guarantor
guarantorsRoute.delete("/guarantors/:guarantor_id", (req, res) => {
  const guarantorId = req.params.guarantor_id;
  const sql = "DELETE FROM Guarantors WHERE guarantor_id = ?";
  connection.query(sql, guarantorId, (err, result) => {
    if (err) {
      console.error("Error deleting guarantor: " + err.stack);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("Guarantor deleted: " + result.affectedRows);
    res.json({ message: "Guarantor deleted successfully" });
  });
});

module.exports = guarantorsRoute;
