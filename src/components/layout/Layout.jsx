
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MarqueeSection from "../home/MarqueeSection";

const Layout = ({ children }) => {
  useEffect(() => {
    // Apply fade-in animation to the main content when the component mounts
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.classList.add('opacity-0');
      setTimeout(() => {
        mainContent.classList.remove('opacity-0');
        mainContent.classList.add('animate-fade-in');
      }, 100);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <MarqueeSection />
      <Header />
      <main className="flex-grow transition-opacity duration-500">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
