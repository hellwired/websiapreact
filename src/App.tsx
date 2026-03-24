import { Suspense, lazy } from "react";
import { Layout } from "./components/layout/Layout";
import { Hero } from "./components/sections/Hero";

// Carga perezosa de secciones para mejorar la velocidad inicial
const About = lazy(() => import("./components/sections/About").then(m => ({ default: m.About })));
const Services = lazy(() => import("./components/sections/Services").then(m => ({ default: m.Services })));
const News = lazy(() => import("./components/sections/News").then(m => ({ default: m.News })));
const Contact = lazy(() => import("./components/sections/Contact").then(m => ({ default: m.Contact })));

function App() {
  return (
    <Layout>
      <Hero />
      <Suspense fallback={<div className="h-20" />}>
        <About />
        <Services />
        <News />
        <Contact />
      </Suspense>
    </Layout>
  );
}

export default App;
