import React from "react";
import AppShell from "./AppShell";

interface ILayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return (
    <div>
      <AppShell>{children}</AppShell>
    </div>
  );
}

export default Layout;
