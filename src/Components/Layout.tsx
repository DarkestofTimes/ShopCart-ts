import { Header } from "./Header";
import { Footer } from "./Footer";
import { SideBar } from "./SideBar";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <SideBar />
      {children}
      <Footer />
    </>
  );
};
