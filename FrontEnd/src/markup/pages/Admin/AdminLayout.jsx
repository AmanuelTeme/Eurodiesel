import React from "react";
import AdminMenu from "../../components/Admin/AdminMenu/AdminMenu";

const AdminLayout = ({ children }) => (
  <div style={{ display: "flex", minHeight: "100vh", background: "#f5f6fa" }}>
    <aside
      style={{
        width: "270px",
        background: "#19223a",
        color: "#fff",
        minHeight: "100vh",
        borderRight: "2px solid #10182b",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        paddingTop: "0",
        zIndex: 2,
      }}
    >
      <AdminMenu />
    </aside>
    <main style={{ flex: 1, padding: "2.5rem 2rem", background: "#f5f6fa" }}>
      {children}
    </main>
  </div>
);

export default AdminLayout;
