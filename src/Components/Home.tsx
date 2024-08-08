// src/components/LoginPage.js

import React from "react";
import Header from "./Header";
import { Tabs } from "antd";
import WeatherTab from "./WeatherTab";
import UserDetailsTab from "./UserDetailsTab";
import { useLocation } from "react-router-dom";

const { TabPane } = Tabs;

const Home = () => {
  const location = useLocation();
  const { user } = location.state || {};

  console.log('Location State:', location.state);

  return (
    <div>
      <Header />
      <div style={{ padding: "20px" }}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Weather" key="1">
            <WeatherTab />
          </TabPane>
          <TabPane tab="User Details" key="2">
            <UserDetailsTab user={user} />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Home;
