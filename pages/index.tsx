import type { NextPage } from "next";
import Image from "next/image";
import Logo from "../assets/Logo";
import ProductList from "../components/cards/ProductList";
import QuickSearch from "../components/cards/QuickSearch";
import RecomendList from "../components/cards/RecomendList";

const Home: NextPage = () => {
  return (
    <>
      <QuickSearch />
      <RecomendList />
      <ProductList />;
    </>
  );
};

export default Home;
