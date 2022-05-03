import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";

export default function App() {
  return (
    <div>
      <Header />

      <div className="container">
        <Home />
        <AboutMe />
        <Contact />
      </div>
    </div>
  )
}