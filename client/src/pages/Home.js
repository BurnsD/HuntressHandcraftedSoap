import React, { useState } from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import About from "../components/About";
import Hero from "../components/Hero";
import { Container } from "react-bootstrap"

const Home = () => {
  const [currentCategory, setCategory] = useState("");

  return (
    <Container fluid>
      <Hero />
      <About />
      <CategoryMenu setCategory={setCategory} />
      <ProductList currentCategory={currentCategory} />
      <Cart />
    </Container>
  );
};

export default Home;
