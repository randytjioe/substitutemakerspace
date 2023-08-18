import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navBar";
import Hero from "./components/heroCard";
import AboutMe from "./components/aboutMe";
import Product from "./components/productServices";
import Facilities from "./components/facilities";
import FAQ from "./components/faq";
import Footer from "./components/footer";
import { Flex } from "@chakra-ui/react";
import Documentation from "./components/documentation";
import { useEffect } from "react";

function App() {
  return (
    <>
      <Flex flexDir={"column"} fontFamily={"Plus Jakarta Sans"}>
        <Navbar />
        <Hero />
        <AboutMe />
        <Product />
        <Facilities />
        <FAQ />
        <Documentation />
        <Footer />
      </Flex>
    </>
  );
}

export default App;
