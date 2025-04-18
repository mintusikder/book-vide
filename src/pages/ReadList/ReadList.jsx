import React, { useEffect } from "react";
import "./read.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useLoaderData } from "react-router";
import { getStoredBook } from "../../utitliy/adToDb";
const ReadList = () => {
  const data = useLoaderData();
  console.log(data);
  useEffect(() => {
    const storedBookData = getStoredBook();
    console.log(storedBookData);
  }, []);
  return (
    <div>
      <Tabs>
        <TabList className="read">
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
