// components/layout.js
import { ReactElement } from "react";
import { AppFooter } from "../components/partials/AppFooter";
import { AppHeader } from "../components/partials/AppHeader";

interface LayoutProps {
    children: ReactElement
}

export default function AppLayout({ children }:LayoutProps) {
  return (
    <>
      <AppHeader />
      <main>{children}</main>
      <AppFooter />
    </>
  )
}