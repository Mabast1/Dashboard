import React from "react";

import { Header } from "../../components";
import { Stacked } from "../../components";

const StackedPage = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl ">
      <Header category="Chart" title="Revenue Breakdown" />
      <Stacked />
    </div>
  );
};

export default StackedPage;
