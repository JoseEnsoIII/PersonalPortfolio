import React from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Project";
import { Contact } from "./pages/Contact";
import { Header } from "./Header/Header";
import { Footer } from "./pages/Footer";
export default function App() {
  
  return (
    <main className={`mt-[3.5rem]`}>
      <Header  />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
