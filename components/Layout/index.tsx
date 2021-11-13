import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="text-white">
      <Header />
      <div className="bg-gradient-to-bl from-purple-900 to-black pt-5 pb-32">
        <div className="container mx-auto">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
