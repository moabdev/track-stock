"use client";

import StoreProvider from "../redux";

export const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <StoreProvider>{children}</StoreProvider>;
};
