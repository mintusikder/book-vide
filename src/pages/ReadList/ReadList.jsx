import React, { useEffect, useState } from "react";
import "./read.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useLoaderData } from "react-router";
import { getStoredBook } from "../../utitliy/adToDb";
import ReadListCard from "./ReadListCard";
const ReadList = () => {
  const data = useLoaderData();
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertStoredBook = storedBookData.map((book) => parseInt(book));
    const myReadList = data.filter((book) =>
      convertStoredBook.includes(book.bookId)
    );

    setReadList(myReadList);
  }, []);

  const handelSort = (type) => {
    setSort(type);
    if (type === "pages") {
      const shortByPage = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(shortByPage);
    }
    if (type === "ratings") {
      const shortByRating = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(shortByRating);
    }
  };
  return (
    <div>

    <div className="flex items-center justify-center py-6">
    <button
        className="btn btn-success text-white"
        popoverTarget="popover-1"
        style={{ anchorName: "--anchor-1" }}
      >
        Sort By : {sort ? sort : ""}
      </button>

      <ul
        className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
        popover="auto"
        id="popover-1"
        style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}
      >
        <li>
          <a onClick={() => handelSort("pages")}>Page</a>
        </li>
        <li>
          <a onClick={() => handelSort("ratings")}>Ratings</a>
        </li>
      </ul>
    </div>

      <Tabs>
        <TabList className="read">
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div className="pt-12 gap-10 grid">
            {readList.map((read) => (
              <ReadListCard read={read} key={read.bookId}></ReadListCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
