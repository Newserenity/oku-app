import type { NextPage } from "next";
import MainBanner from "@components/cards/MainBanner";
import ProductList from "@components/cards/ProductList";
import QuickSearch from "@components/cards/QuickSearch";
import RecomendList from "@components/cards/RecomendList";
import Header from "@components/navigators/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <MainBanner />
      <QuickSearch />
      <RecomendList />
      <ProductList />
    </>
  );
};

export default Home;
