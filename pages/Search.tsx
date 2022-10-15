import { useRouter } from "next/router";
import React from "react";
import ProductList from "../components/cards/ProductList";
import SearchResult from "../components/cards/SearchResult";
import Header from "../components/navigators/Header";

function Search() {
  return (
    <>
      <Header />
      <SearchResult />
    </>
  );
}

export default Search;
