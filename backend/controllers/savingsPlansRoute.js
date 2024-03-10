const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const savingsPlansRoute = express();

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

// CREATE - Add a new savings plan
savingsPlansRoute.post("/savings-plans", (req, res) => {
  const { plan_name, minimum_balance, interest_rate } = req.body;

  const sql =
    "INSERT INTO SavingsPlans (plan_name, minimum_balance, interest_rate) VALUES (?, ?, ?)";
  const values = [plan_name, minimum_balance, interest_rate];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error adding savings plan: " + err.stack);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("New savings plan added with ID: " + result.insertId);
    res.status(201).json({
      message: "Savings plan added successfully",
      plan_id: result.insertId,
    });
  });
});

// READ - Get all savings plans
savingsPlansRoute.get("/savings-plans", (req, res) => {
  const sql = "SELECT * FROM SavingsPlans";
  connection.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching savings plans: " + err.stack);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
});

// UPDATE - Update a savings plan
savingsPlansRoute.put("/savings-plans/:plan_id", (req, res) => {
  const planId = req.params.plan_id;
  const { plan_name, minimum_balance, interest_rate } = req.body;
  const sql =
    "UPDATE SavingsPlans SET plan_name = ?, minimum_balance = ?, interest_rate = ? WHERE plan_id = ?";
  const values = [plan_name, minimum_balance, interest_rate, planId];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error updating savings plan: " + err.stack);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("Savings plan updated: " + result.affectedRows);
    res.json({ message: "Savings plan updated successfully" });
  });
});

// DELETE - Delete a savings plan
savingsPlansRoute.delete("/savings-plans/:plan_id", (req, res) => {
  const planId = req.params.plan_id;
  const sql = "DELETE FROM SavingsPlans WHERE plan_id = ?";
  connection.query(sql, planId, (err, result) => {
    if (err) {
      console.error("Error deleting savings plan: " + err.stack);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("Savings plan deleted: " + result.affectedRows);
    res.json({ message: "Savings plan deleted successfully" });
  });
});

module.exports = savingsPlansRoute;
