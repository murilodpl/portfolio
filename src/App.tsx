import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Home from "./components/Home";

export default function App() {
  return (
    <div>
      <Header />

      <div className="container">
        <Home />
        <AboutMe />
      </div>
    </div>
  )
}