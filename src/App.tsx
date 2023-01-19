import { SelectedPageContext } from "contexts/SelectedPageContext";
import { useEffect, useState } from "react";
import Benefits from "view/benefits";
import ContactUs from "view/contactUs";
import Footer from "view/Footer";
import Home from "view/home";
import OurClasses from "view/ourClasses";
import Navbar from "./components/navbar";
import { SelectedPage } from "./shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }

      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SelectedPageContext.Provider value={{ selectedPage, setSelectedPage }}>
      <div className="app bg-gray-20">
        <Navbar isTopOfPage={isTopOfPage} />
        <Home />
        <Benefits />
        <OurClasses />
        <ContactUs />
        <Footer />
      </div>
    </SelectedPageContext.Provider>
  );
}

export default App;
