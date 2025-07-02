const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employee.controller");

// Add employee (POST /api/employees)
router.post("/", employeeController.createEmployee);

module.exports = router;
