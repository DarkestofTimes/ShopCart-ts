import { Header } from "./Header";
import { Footer } from "./Footer";
import { Sidebar } from "./Sidebar/Sidebar";
import { ReactNode } from "react";
import { SidebarContextProvider } from "./Sidebar/SidebarContext/SidebarContextProvider";
import { RightSidebar } from "./RightSidebar";

interface layoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: layoutProps) => {
  return (
    <main className="grid grid-cols-4 mt-10 p-4 pb-0 min-h-[89vh]">
      <Header />
      <SidebarContextProvider>
        <Sidebar />
      </SidebarContextProvider>
      {children}
      <Footer />
    </main>
  );
};

export const RightSideLayout = ({ children }: layoutProps) => {
  return (
    <main className="grid grid-cols-4 mt-10 p-4 pb-0 min-h-[89vh]">
      <Header />
      <RightSidebar />
      {children}
      <Footer />
    </main>
  );
};

export const NoSideLayout = ({ children }: layoutProps) => {
  return (
    <main className="mt-10 p-4 pb-0 min-h-[89vh]">
      <Header />
      {children}
      <Footer />
    </main>
  );
};
