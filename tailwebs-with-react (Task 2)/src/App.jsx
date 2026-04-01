import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./styles/global.css";
import "./styles/helper.css";
import "./styles/media.css";
import Navbar from "./components/layout/Navbar";
import Topbar from "./components/layout/Topbar";
import Hero from "./components/Sections/Hero/Hero";
import Stats from "./components/Sections/Stats/Stats";
import TabsSection from "./components/Sections/TabsSection/TabsSection";
import Technology from "./components/Sections/Technology/Technology";
import Articles from "./components/Articles/Articles";
import Supporters from "./components/Sections/Supporters/Supporters";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Hero />
      <Stats />
      <TabsSection />
      <Technology />
      <Articles />
      <Supporters />
      <Footer />
    </>
  );
}

export default App;
