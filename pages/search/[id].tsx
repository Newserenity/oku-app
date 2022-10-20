import React from "react";
import SearchResult from "@components/cards/SearchResult";
import Header from "@components/navigators/Header";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { searchQuery } from "@components/atom";

function Search() {
  return (
    <>
      <Header />
      <SearchResult />
    </>
  );
}

export default Search;
