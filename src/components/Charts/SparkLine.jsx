import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

const SparkLine = ({ currentColor, id, height, width, color, data, type }) => {
  return (
    <SparklineComponent
      id={id}
      width={width}
      height={height}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width }}
      dataSource={data}
      xName="X"
      yName="Y"
      type={type}
      tooltipSettings={{
        visible: true,
        // eslint-disable-next-line no-template-curly-in-string
        format: "${x} : data ${y}",
        trackLineSettings: { visible: true },
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
