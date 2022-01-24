import React from "react";
import { Header } from "../header/Header";
import { Sidebar } from "../sidebar/Sidebar";

import "./Layout.css";

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <div className="d-flex flex-column">
        <Header />
        <div className="container">
          <div className="d-flex flex-row">
            <Sidebar />
            <div className="main">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
