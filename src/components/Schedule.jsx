import React from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  Month,
  WorkWeek,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
  ViewsDirective,
  ViewDirective,
} from "@syncfusion/ej2-react-schedule";

import { scheduleData } from "../data/dummy";

const Schedule = ({ height, selected }) => {
  return (
    <ScheduleComponent
      height={height}
      eventSettings={{ dataSource: scheduleData }}
      selectedDate={new Date(2022, 0, 10)}
    >
      <ViewsDirective>
        <ViewDirective option="Day" />
        <ViewDirective option="Week" />
        <ViewDirective option="Month" />
        <ViewDirective option="Agenda" isSelected={selected} />
      </ViewsDirective>
      <Inject
        services={[Agenda, Day, Week, WorkWeek, Month, Resize, DragAndDrop]}
      />
    </ScheduleComponent>
  );
};

export default Schedule;
