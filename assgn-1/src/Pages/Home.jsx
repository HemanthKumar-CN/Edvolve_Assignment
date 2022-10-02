import { Box, Input } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import Paginate from "../Components/Paginate";

import { TableComponent } from "../Components/Table";

const Home = () => {
  const [gitData, setGitData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const search = useRef("");

  useEffect(() => {
    // fetch(
    //   `https://api.github.com/search/issues?q=repo:PHP-FFMpeg/PHP-FFMpeg&page=${page}&per_page=20`,
    // )
    //   .then((res) => res.json())
    //   .then((res) => console.log(res));
    getData(page);
  }, [page]);

  async function getData(page) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.github.com/search/issues?q=repo:PHP-FFMpeg/PHP-FFMpeg&page=${page}&per_page=20`,
        {
          method: "GET",
        },
      );
      const result = await response.json();

      setGitData(result.items);
      setLoading(false);
    } catch (error) {
      // console.log(error);
    }
  }

  const handleSearch = (e) => {
    var searchVal = search.current.value;

    // console.log(searchVal.toLowerCase());

    if (e.code == "Backspace" && search.current.value.length > 0) {
      getData(page);
      // handleSearch();
    }

    if (timer) {
      clearTimeout(timer);
    } else {
      var timer = setTimeout(() => {
        const filtered = gitData.filter((el) => {
          if (el.title.toLowerCase().includes(searchVal.toLowerCase())) {
            return el;
          }
        });

        // console.log(searchVal.length);
        setSearchData(filtered);
      }, 2000);
    }
  };

  //   console.log(loading);
  return (
    <>
      <Box>
        {" "}
        <Input
          width={"50%"}
          marginBottom={2}
          variant="filled"
          placeholder="Search here..."
          ref={search}
          onChange={(e) => handleSearch(e)}
          // onKeyDown={(e) => {}}
        />
      </Box>
      <TableComponent
        searchData={searchData}
        loading={loading}
        gitData={gitData}
        search={search}
      />
      <Paginate page={page} setPage={setPage} />
    </>
  );
};

export default Home;
