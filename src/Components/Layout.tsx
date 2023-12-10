import { Header } from "./Header";
import { Footer } from "./Footer";
import { Sidebar } from "./Sidebar";

export const Layout = ({ children }) => {
  return (
    <main className="grid grid-cols-4">
      <Header />
      <Sidebar />
      {children}
      <Footer />
    </main>
  );
};

export const NoSideLayout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};
