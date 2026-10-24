import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Header, Footer, RouteEffects } from "./components/Layout";
import Background from "./components/Background";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

export default function App() {
  const { pathname } = useLocation();
  return (
    <>
      <Background />
      <a
        href="#main-content"
        className="skip-link"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("main-content")?.focus();
        }}
      >
        Skip to content
      </a>
      <div className="site-shell">
        <RouteEffects />
        <Header />
        <main
          id="main-content"
          tabIndex={-1}
          className={pathname === "/" ? "home-main" : ""}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="*"
              element={
                <div className="container page not-found">
                  <h1>This page took a different path.</h1>
                  <p>Let’s get you back to the portfolio.</p>
                  <Link className="button button-primary" to="/">
                    Back to Home
                  </Link>
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}
