import React from "react";
import AddEmployeeForm from "../../../components/Admin/AddEmployeeForm/AddEmployeeForm";
import { useAuth } from "../../../../Context/AuthContext";
import Unauthorized from "../../Main/Unauthorized/Unauthorized";
import LoginForm from "../../../components/LoginForm/LoginForm";

const AddEmployee = () => {
  const { isLogged, isAdmin_manager, isAdmin } = useAuth();

  if (!isLogged) {
    // User is not logged in
    return <LoginForm />;
  }

  if (!isAdmin_manager && !isAdmin) {
    // User is logged in but does not have admin permissions
    return <Unauthorized />;
  }

  // User is logged in and has admin permissions
  return <AddEmployeeForm />;
};

export default AddEmployee;
