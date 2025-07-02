const employeeService = require("../services/employee.service");

// Create a new employee
exports.createEmployee = async (req, res) => {
  try {
    const employeeData = req.body;
    const result = await employeeService.createEmploye(employeeData);
    if (result && result.employee_id) {
      res.status(201).json({ success: true, employee_id: result.employee_id });
    } else {
      res
        .status(400)
        .json({ success: false, message: "Failed to create employee." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};
