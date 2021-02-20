import React, { useEffect, useState } from "react";
import { getInitialData } from "../lib/_DATA";
import useSWR, { SWRConfig } from 'swr';
import ListHeader from "../components/ListHeader.js";
import ListBody from "../components/ListBody";

function List() {
  let listData = getInitialData();

  console.log("here3", listData);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  return (
    <div className="w-full max-w-md mx-auto">
      <SWRConfig value={{ fetcher }}>
      <ListHeader />
      <ListBody />
      </SWRConfig>
    </div>
  );
}

export default List;
