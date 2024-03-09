const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const app = express();

// Middleware
app.use(bodyParser.json());

app.use("");

// MySQL connection
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "jimmie",
//   database: "light_sacco",
// });

// connection.connect((err) => {
//   if (err) {
//     console.error("Error connecting to database: " + err.stack);
//     return;
//   }
//   console.log("Connected to database as id " + connection.threadId);
// });

// // CREATE - Add a new member
// app.post("/members", (req, res) => {
//   const {
//     first_name,
//     last_name,
//     id_number,
//     date_of_birth,
//     contact_number,
//     email,
//     address,
//   } = req.body;

//   // Check if ID number or email already exists
//   connection.query(
//     "SELECT * FROM Members WHERE id_number = ? OR email = ?",
//     [id_number, email],
//     (err, results) => {
//       if (err) {
//         console.error("Error checking member existence: " + err.stack);
//         return res.status(500).json({ error: "Internal Server Error" });
//       }

//       if (results.length > 0) {
//         // Member with the same ID number or email already exists
//         return res.status(400).json({
//           error: "Member with the same ID number or email already exists",
//         });
//       }

//       // If no member found with the same ID number or email, proceed with insertion
//       const sql =
//         "INSERT INTO Members (first_name, last_name, id_number, date_of_birth, contact_number, email, address) VALUES (?, ?, ?, ?, ?, ?, ?)";
//       const values = [
//         first_name,
//         last_name,
//         id_number,
//         date_of_birth,
//         contact_number,
//         email,
//         address,
//       ];

//       connection.query(sql, values, (err, result) => {
//         if (err) {
//           console.error("Error adding member: " + err.stack);
//           return res.status(500).json({ error: "Internal Server Error" });
//         }
//         console.log("New member added with ID: " + result.insertId);
//         res.status(201).json({
//           message: "Member added successfully",
//           member_id: result.insertId,
//         });
//       });
//     }
//   );
// });

// // READ - Get all members
// app.get("/members", (req, res) => {
//   const sql = "SELECT * FROM Members";
//   connection.query(sql, (err, results) => {
//     if (err) {
//       console.error("Error fetching members: " + err.stack);
//       return res.status(500).json({ error: "Internal Server Error" });
//     }
//     res.json(results);
//   });
// });

// // UPDATE - Update a member
// app.put("/members/:member_id", (req, res) => {
//   const memberId = req.params.member_id;
//   const {
//     first_name,
//     last_name,
//     id_number,
//     date_of_birth,
//     contact_number,
//     email,
//     address,
//   } = req.body;
//   const sql =
//     "UPDATE Members SET first_name = ?, last_name = ?, date_of_birth = ?, contact_number = ?, email = ?, address = ? WHERE member_id = ?";
//   const values = [
//     first_name,
//     last_name,
//     id_number,
//     date_of_birth,
//     contact_number,
//     email,
//     address,
//     memberId,
//   ];

//   connection.query(sql, values, (err, result) => {
//     if (err) {
//       console.error("Error updating member: " + err.stack);
//       return res.status(500).json({ error: "Internal Server Error" });
//     }
//     console.log("Member updated: " + result.affectedRows);
//     res.json({ message: "Member updated successfully" });
//   });
// });

// // DELETE - Delete a member
// app.delete("/members/:member_id", (req, res) => {
//   const memberId = req.params.member_id;
//   const sql = "DELETE FROM Members WHERE member_id = ?";
//   connection.query(sql, memberId, (err, result) => {
//     if (err) {
//       console.error("Error deleting member: " + err.stack);
//       return res.status(500).json({ error: "Internal Server Error" });
//     }
//     console.log("Member deleted: " + result.affectedRows);
//     res.json({ message: "Member deleted successfully" });
//   });
// });

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server Running on Port http://localhost:${PORT}`);
});
