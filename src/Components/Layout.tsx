import { Header } from "./Header";
import { Footer } from "./Footer";
import { Sidebar } from "./Sidebar";
import { ReactNode } from "react";
import { DataItem } from "./ContextProvider";

interface layoutProps {
  children: ReactNode;
  Items: DataItem[];
  setItems: React.Dispatch<React.SetStateAction<DataItem[]>>;
  data: DataItem[];
}

interface noSideLayoutProps {
  children: ReactNode;
}

export const Layout = ({ children, data, setItems }: layoutProps) => {
  return (
    <main className="grid grid-cols-4">
      <Header />
      <Sidebar data={data.results} setItems={setItems} />
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
