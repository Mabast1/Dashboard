import React from "react";

import { Header } from "../components";
import Schedule from "../components/Schedule";

const Calendar = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Calendar" />
      <Schedule height={630} selected={false} />
    </div>
  );
};

export default Calendar;
