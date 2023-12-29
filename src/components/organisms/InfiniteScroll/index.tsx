"use client";
import React, { useState } from "react";

import { Box } from "@chakra-ui/react";

import delay from "delay";
import InfiniteScrollComponent from "react-infinite-scroll-component";

export const InfiniteScroll = () => {
  const [items, setItems] = useState(Array.from(Array(20).keys()));

  const [hasMore, setHasMore] = useState(true);

  async function fetchData() {
    console.log("fetchData");
    await delay(1000);

    setItems((prev) => [...prev, ...Array.from(Array(20).keys())]);

    if (items.length >= 100) {
      setHasMore(false);
    }
  }

  async function refresh() {
    console.log("refresh");
  }

  return (
    <InfiniteScrollComponent
      pullDownToRefresh
      dataLength={items.length}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      next={fetchData}
      pullDownToRefreshContent={<h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>}
      pullDownToRefreshThreshold={50}
      refreshFunction={refresh}
      releaseToRefreshContent={<h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>}
    >
      <Box>
        {items.map((_, index) => (
          <Box backgroundColor="red.500" className={`rendered-${index + 1}`} h="20" key={index} mb="4" w="20">
            div - #{index + 1}
          </Box>
        ))}
      </Box>
    </InfiniteScrollComponent>
  );
};
