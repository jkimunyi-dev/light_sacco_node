const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const loanApplicationsRoute = express();

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

// CREATE - Add a new loan application
loanApplicationsRoute.post("/loan-applications", (req, res) => {
  const { member_id, loan_type_id, application_date, status } = req.body;

  const sql =
    "INSERT INTO LoanApplications (member_id, loan_type_id, application_date, status) VALUES (?, ?, ?, ?)";
  const values = [member_id, loan_type_id, application_date, status];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error adding loan application: " + err.stack);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("New loan application added with ID: " + result.insertId);
    res.status(201).json({
      message: "Loan application added successfully",
      application_id: result.insertId,
    });
  });
});

// READ - Get all loan applications
loanApplicationsRoute.get("/loan-applications", (req, res) => {
  const sql = "SELECT * FROM LoanApplications";
  connection.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching loan applications: " + err.stack);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
});

// UPDATE - Update a loan application
loanApplicationsRoute.put("/loan-applications/:application_id", (req, res) => {
  const applicationId = req.params.application_id;
  const { member_id, loan_type_id, application_date, status } = req.body;
  const sql =
    "UPDATE LoanApplications SET member_id = ?, loan_type_id = ?, application_date = ?, status = ? WHERE application_id = ?";
  const values = [
    member_id,
    loan_type_id,
    application_date,
    status,
    applicationId,
  ];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error updating loan application: " + err.stack);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("Loan application updated: " + result.affectedRows);
    res.json({ message: "Loan application updated successfully" });
  });
});

// DELETE - Delete a loan application
loanApplicationsRoute.delete(
  "/loan-applications/:application_id",
  (req, res) => {
    const applicationId = req.params.application_id;
    const sql = "DELETE FROM LoanApplications WHERE application_id = ?";
    connection.query(sql, applicationId, (err, result) => {
      if (err) {
        console.error("Error deleting loan application: " + err.stack);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      console.log("Loan application deleted: " + result.affectedRows);
      res.json({ message: "Loan application deleted successfully" });
    });
  }
);

module.exports = loanApplicationsRoute;
