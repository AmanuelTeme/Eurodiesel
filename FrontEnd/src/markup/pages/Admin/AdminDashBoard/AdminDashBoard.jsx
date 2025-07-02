import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// Import Material-UI icons for admin dashboard cards
import AnnouncementIcon from "@mui/icons-material/Announcement";
import PeopleIcon from "@mui/icons-material/People";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import "./dashBoard.css";

const adminCards = [
  {
    icon: <AnnouncementIcon style={{ fontSize: 48, color: "#b0b0b0" }} />, // gray icon
    section: "COMMUNICATION",
    title: "Announcements",
    link: "/admin/announcements",
  },
  {
    icon: <AssignmentIcon style={{ fontSize: 48, color: "#b0b0b0" }} />,
    section: "TIME OFF",
    title: "Permission Review",
    link: "/admin/permission-review",
  },
  {
    icon: <PersonAddIcon style={{ fontSize: 48, color: "#b0b0b0" }} />,
    section: "EMPLOYEE MANAGEMENT",
    title: "Add Employee",
    link: "/admin/add-employee",
  },
  {
    icon: <PeopleIcon style={{ fontSize: 48, color: "#b0b0b0" }} />,
    section: "EMPLOYEE MANAGEMENT",
    title: "Manage Employees",
    link: "/admin/employees",
  },
  {
    icon: <ContactSupportIcon style={{ fontSize: 48, color: "#b0b0b0" }} />,
    section: "CUSTOMER SUPPORT",
    title: "Contact Messages",
    link: "/admin/contact-us",
  },
  {
    icon: <SettingsIcon style={{ fontSize: 48, color: "#b0b0b0" }} />,
    section: "SYSTEM CONFIGURATION",
    title: "Settings",
    link: "/admin/settings",
  },
  {
    icon: <NotificationsIcon style={{ fontSize: 48, color: "#b0b0b0" }} />,
    section: "SYSTEM ALERTS",
    title: "Notifications",
    link: "/admin/notifications",
  },
];

const AdminDashBoard = () => {
  const { t } = useTranslation();

  return (
    <section
      className="services-section"
      style={{ background: "#f7f7f7", minHeight: "100vh" }}
    >
      <div className="auto-container">
        <div className="sec-title style-two" style={{ marginBottom: 40 }}>
          <h2 style={{ color: "#19223a", fontWeight: 700 }}>Admin Dashboard</h2>
          <div className="text" style={{ color: "#333" }}>
            Welcome, Admin! Manage your system from here.
          </div>
        </div>
        <div className="row">
          {adminCards.map((card) => (
            <div className="col-lg-4 service-block-one" key={card.title}>
              <Link to={card.link} style={{ textDecoration: "none" }}>
                <div
                  className="inner-box hvr-float-shadow text-left p-4"
                  style={{
                    background: "#19223a",
                    borderRadius: 8,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    height: 220,
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    borderBottom: "4px solid #e60023",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: "#fff",
                        textTransform: "uppercase",
                        letterSpacing: 1,
                        marginBottom: 8,
                      }}
                    >
                      {card.section}
                    </div>
                    <h2
                      style={{
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: 28,
                        marginBottom: 16,
                      }}
                    >
                      {card.title}
                    </h2>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      className="read-more"
                      style={{
                        color: "#e60023",
                        fontWeight: 700,
                        fontSize: 16,
                        textTransform: "uppercase",
                        letterSpacing: 1,
                      }}
                    >
                      Read More +
                    </span>
                    <span className="icon" style={{ marginLeft: 10 }}>
                      {card.icon}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminDashBoard;
