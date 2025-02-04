import React from "react";
import SideNav from "@/components/SideNav";
import HeaderNav from "@/components/HeaderNav";
import Footer from "@/components/Footer";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      {/* Side Navigation */}
      <SideNav />

      <div className="flex flex-col flex-1">
        {/* Header */}
        <HeaderNav />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-light-gray">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;
