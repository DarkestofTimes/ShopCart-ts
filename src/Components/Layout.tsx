import { Header } from "./Header";
import { Footer } from "./Footer";
import { Sidebar } from "./Sidebar";
import { ReactNode } from "react";
import { DataItem, ShopItem } from "./ContextProvider";

interface layoutProps {
  children: ReactNode;
  Items: ShopItem[];
  data: DataItem;
}

interface noSideLayoutProps {
  children: ReactNode;
}

export const Layout = ({ children, data }: layoutProps) => {
  return (
    <main className="grid grid-cols-4">
      <Header />
      <Sidebar data={data} />
      {children}
      <Footer />
    </main>
  );
};

export const NoSideLayout = ({ children }: noSideLayoutProps) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};
