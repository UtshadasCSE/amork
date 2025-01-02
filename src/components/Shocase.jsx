"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Shocase = () => {
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("portfolio.json");
        setPortfolioData(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="text-white w-max mx-auto">
      <Tabs>
        <TabList>
          <Tab>Authentication</Tab>
          <Tab>Technology</Tab>
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

export default Shocase;
