import { Header } from "./Header";
import { Footer } from "./Footer";
import { Sidebar } from "./Sidebar/Sidebar";
import { ReactNode } from "react";
import { SidebarContextProvider } from "./Sidebar/SidebarContext/SidebarContextProvider";

interface layoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: layoutProps) => {
  return (
    <main className="grid grid-cols-4">
      <Header />
      <SidebarContextProvider>
        <Sidebar />
      </SidebarContextProvider>
      {children}
      <Footer />
    </main>
  );
};

export const NoSideLayout = ({ children }: layoutProps) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};
