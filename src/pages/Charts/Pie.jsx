import React from "react";

import { Header } from "../../components";
import { Pie } from "../../components";
import { pieChartData } from "../../data/dummy";

const PieChart = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Inflation Rates" />
      <div className="w-full">
        <Pie id="chart-pie" data={pieChartData} legendVisiblity height="full" />
      </div>
    </div>
  );
};

export default PieChart;
