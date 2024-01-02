import { Header } from "./Header";
import { Footer } from "./Footer";
import { Sidebar } from "./Sidebar/Sidebar";
import { ReactNode, useState } from "react";
import { SidebarContextProvider } from "./Sidebar/SidebarContext/SidebarContextProvider";
import { RightSidebar } from "./RightSidebar";

interface layoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: layoutProps) => {
  const [isMobile] = useState(window.innerWidth < 640);
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(!expanded);
  };

  const height = expanded ? "h-min" : "h-16";
  return (
    <main className="grid sm:grid-cols-4 grid-cols-1 mt-10 sm:p-4 pb-0 min-h-[89vh]">
      <Header />
      <SidebarContextProvider>
        {isMobile ? (
          <div
            className={`flex flex-col overflow-hidden ${height} transition-all duration-200`}>
            <button
              className="p-2 mt-6 h-10 mr-2 ml-2 rounded transition-all duration-200 border-2 border-purple-600 hover:border-[#f0f8ff] focus:border-[#f0f8ff] text-center font-bold text-xl hover:bg-[#f0f8ff] hover:text-purple-600 focus:bg-[#f0f8ff] focus:text-purple-600 bg-purple-600 "
              onClick={handleClick}>
              Expand Search
            </button>
            <Sidebar />
          </div>
        ) : (
          <Sidebar />
        )}
      </SidebarContextProvider>
      {children}
      <Footer />
    </main>
  );
};

export const RightSideLayout = ({ children }: layoutProps) => {
  return (
    <main className="grid sm:grid-cols-4 grid-cols-1 mt-10 sm:p-4 pb-0 min-h-[89vh]">
      <Header />
      <RightSidebar />
      {children}
      <Footer />
    </main>
  );
};

export const NoSideLayout = ({ children }: layoutProps) => {
  return (
    <main className="mt-10 sm:p-4 pb-0 min-h-[89vh]">
      <Header />
      {children}
      <Footer />
    </main>
  );
};
