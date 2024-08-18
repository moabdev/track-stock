"use client";
import StoreProvider from "../../app/redux";

export const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <StoreProvider>{children}</StoreProvider>;
};
