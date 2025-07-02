import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Dashboard as DashboardIcon,
  ListAlt as OrdersIcon,
  AddBox as NewOrderIcon,
  PersonAdd as AddEmployeeIcon,
  Group as EmployeesIcon,
  PersonAddAlt as AddCustomerIcon,
  People as CustomersIcon,
  Build as ServicesIcon,
  Campaign as CampaignIcon,
  Garage as GarageIcon,
  PersonAdd as PersonAddIcon,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../../../Context/AuthContext";

const SIDEBAR_BG = "#19223a";
const TEXT_COLOR = "#fff";
const ACTIVE_BORDER = "4px solid #fff";

const menuItemStyle = {
  border: "none",
  borderRadius: "0",
  fontWeight: 500,
  display: "flex",
  alignItems: "center",
  padding: "1.1rem 2rem",
  textDecoration: "none",
  fontSize: "1.08rem",
  letterSpacing: 0.2,
  transition: "font-weight 0.2s, border-left 0.2s",
  marginBottom: "0.2rem",
  background: SIDEBAR_BG,
  color: TEXT_COLOR,
};

const AdminMenu = () => {
  const { t } = useTranslation();
  const { employee } = useAuth();
  const role = employee?.employee_role;
  const location = useLocation();
  // role: 1 = employee, 2 = manager, 3 = admin
  const sidebarTitle = role === 1 ? t("Employee Menu") : t("Admin Menu");
  return (
    <div
      style={{
        background: SIDEBAR_BG,
        color: TEXT_COLOR,
        minHeight: "100vh",
        width: "100%",
        borderRight: "2px solid #10182b",
        boxShadow: "2px 0 8px rgba(0,0,0,0.04)",
        paddingTop: "1.5rem",
      }}
    >
      <div
        className="admin-menu"
        style={{
          padding: "0 2rem 1.5rem 2rem",
          fontWeight: 700,
          letterSpacing: 1,
          fontSize: 20,
          color: "#fff",
          textTransform: "uppercase",
        }}
      >
        {sidebarTitle}
      </div>
      <div
        className="list-group"
        style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}
      >
        {(role === 2 || role === 3) && (
          <>
            <Link
              to="/admin"
              className="list-group-item py-3"
              style={{
                ...menuItemStyle,
                fontWeight: location.pathname === "/admin" ? 700 : 500,
                borderLeft:
                  location.pathname === "/admin"
                    ? ACTIVE_BORDER
                    : "4px solid transparent",
                color: "#fff",
              }}
            >
              <DashboardIcon
                style={{
                  marginRight: 16,
                  fontSize: 24,
                  verticalAlign: "middle",
                  color: "#fff",
                }}
              />
              <span style={{ color: "#fff" }}>{t("Dashboard")}</span>
            </Link>
            <Link
              to="/admin/announcement"
              className="list-group-item py-3"
              style={{
                ...menuItemStyle,
                fontWeight:
                  location.pathname === "/admin/announcement" ? 700 : 500,
                borderLeft:
                  location.pathname === "/admin/announcement"
                    ? ACTIVE_BORDER
                    : "4px solid transparent",
                color: "#fff",
              }}
            >
              <CampaignIcon
                style={{
                  marginRight: 16,
                  fontSize: 24,
                  verticalAlign: "middle",
                  color: "#fff",
                }}
              />
              <span style={{ color: "#fff" }}>{t("Admin Announcement")}</span>
            </Link>
            <Link
              to="/admin/add-employee"
              className="list-group-item py-3"
              style={{
                ...menuItemStyle,
                fontWeight:
                  location.pathname === "/admin/add-employee" ? 700 : 500,
                borderLeft:
                  location.pathname === "/admin/add-employee"
                    ? ACTIVE_BORDER
                    : "4px solid transparent",
                color: "#fff",
              }}
            >
              <PersonAddIcon
                style={{
                  marginRight: 16,
                  fontSize: 24,
                  verticalAlign: "middle",
                  color: "#fff",
                }}
              />
              <span style={{ color: "#fff" }}>{t("Add Employee")}</span>
            </Link>
            <Link
              to="/admin/permission-review"
              className="list-group-item py-3"
              style={{
                ...menuItemStyle,
                fontWeight:
                  location.pathname === "/admin/permission-review" ? 700 : 500,
                borderLeft:
                  location.pathname === "/admin/permission-review"
                    ? ACTIVE_BORDER
                    : "4px solid transparent",
                color: "#fff",
              }}
            >
              <span
                style={{
                  marginRight: 16,
                  fontSize: 22,
                  verticalAlign: "middle",
                  color: "#fff",
                }}
              >
                📝
              </span>
              <span style={{ color: "#fff" }}>
                {t("Review Time Off Requests")}
              </span>
            </Link>
          </>
        )}
        {role === 1 && (
          <Link
            to="/employee/permission-request"
            className="list-group-item py-3"
            style={{
              ...menuItemStyle,
              fontWeight:
                location.pathname === "/employee/permission-request"
                  ? 700
                  : 500,
              borderLeft:
                location.pathname === "/employee/permission-request"
                  ? ACTIVE_BORDER
                  : "4px solid transparent",
              color: "#fff",
            }}
          >
            <span
              style={{
                marginRight: 16,
                fontSize: 22,
                verticalAlign: "middle",
                color: "#fff",
              }}
            >
              📝
            </span>
            <span style={{ color: "#fff" }}>{t("Request Time Off")}</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default AdminMenu;
