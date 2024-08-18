"use client";
import StoreProvider from "../../app/redux";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <StoreProvider>{children}</StoreProvider>;
};

export default DashboardLayout;
