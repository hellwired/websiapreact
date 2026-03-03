import { Layout } from "./components/layout/Layout";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { News } from "./components/sections/News";
import { Contact } from "./components/sections/Contact";

function App() {
  return (
    <Layout>
      <Hero />
      <Services />
      <News />
      <Contact />
    </Layout>
  );
}

export default App;
