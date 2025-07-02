import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

// Import Pages
import Header from "./markup/components/Header/Header";
import Footer from "./markup/components/Footer/Footer";
import Home from "./markup/pages/Home/Home";
import About from "./markup/pages/Main/About/About";
import Login from "./markup/pages/Main/Login/Login";
import Contact from "./markup/pages/Admin/ContactUs/Contact";
import Services from "./markup/pages/Main/Services/Services";
import Unauthorized from "./markup/pages/Main/Unauthorized/Unauthorized";
import ErrorComponent from "./markup/pages/Main/404/404";
import AdminAnnouncement from "./markup/pages/Admin/Announcement/AdminAnnouncement";
import PermissionRequest from "./markup/pages/Employee/PermissionRequest";
import PermissionReview from "./markup/pages/Admin/PermissionReview";
import AdminDashBoard from "./markup/pages/Admin/AdminDashBoard/AdminDashBoard";
import AdminLayout from "./markup/pages/Admin/AdminLayout";
import AddEmployee from "./markup/pages/Admin/Employee/AddEmployee";

// Import the PrivateAuthRoute component
import PrivateAuthRoute from "./markup/components/Auth/PrivateAuthRoute";

import ScrollToTop from "./markup/components/Scroll/ScrollToTop";

// Import css from the template
import "./assets/template/css/bootstrap.css";
import "./assets/template/css/style.css";
import "./assets/template/css/responsive.css";
import "./assets/template/css/color.css";
import "./assets/template/css/flaticon.css";

// Import custom css
import "./assets/styles/custom.css";

import usePreventBackToLogin from "./hooks/usePreventBackToLogin";

const App = () => {
  usePreventBackToLogin();
  const location = useLocation();
  const showHeader = !location.pathname.startsWith("/order-status");

  return (
    <>
      {showHeader && <Header />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/admin"
          element={
            <PrivateAuthRoute roles={[3]}>
              <AdminLayout>
                <AdminDashBoard />
              </AdminLayout>
            </PrivateAuthRoute>
          }
        />
        <Route
          path="/admin/announcement"
          element={
            <PrivateAuthRoute roles={[3]}>
              <AdminLayout>
                <AdminAnnouncement />
              </AdminLayout>
            </PrivateAuthRoute>
          }
        />
        <Route
          path="/admin/permission-review"
          element={
            <PrivateAuthRoute roles={[2, 3]}>
              <AdminLayout>
                <PermissionReview />
              </AdminLayout>
            </PrivateAuthRoute>
          }
        />
        <Route
          path="/employee/permission-request"
          element={
            <PrivateAuthRoute roles={[1]}>
              <PermissionRequest />
            </PrivateAuthRoute>
          }
        />
        <Route
          path="/admin/add-employee"
          element={
            <PrivateAuthRoute roles={[3]}>
              <AdminLayout>
                <AddEmployee />
              </AdminLayout>
            </PrivateAuthRoute>
          }
        />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<ErrorComponent />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
