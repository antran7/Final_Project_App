import React, { useCallback, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/layoutComponent/Header";
import SideBar from "../components/layoutComponent/SideBar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  const isHomePage = location.pathname === "/";
  const mainPadding = isHomePage ? "" : "pt-[50px]";

  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      {/* Sidebar: ẩn trên mobile nếu chưa mở */}
      <div
        className={`fixed md:static z-50 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      {/* Nội dung chính */}
      <div className="flex-1 flex flex-col overflow-x-hidden">
        <Header toggleSidebar={toggleSidebar} />
        <main className={`flex-1 bg-white ${mainPadding}`}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;