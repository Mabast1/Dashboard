import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";

import { Stacked, Pie, Button, SparkLine } from "../components";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import CTA from "../data/CTA.png";
import { useStateContext } from "../contexts/ContextProvider";
import Schedule from "../components/Schedule";

const Ecommerce = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="mt-10">
      <div className="flex flex-wrap lg:flex-wrap justify-center">
        <div className="bg-white overflow-y-hidden m-3 rounded-xl">
          <div className="w-full flex justify-center">
            <div
              className="w-full p-8"
              style={{ backgroundColor: currentColor }}
            >
              <div>
                <div className="flex flex-wrap items-center justify-evenly md:flex-row flex-col-reverse">
                  <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4">
                    <div>
                      <p className=" text-xl font-bold text-gray-200">
                        Earnings
                      </p>
                      <p className="text-3xl text-green-300">$65,448.45</p>
                      <p className=" text-xl font-semibold text-gray-200 mt-4">
                        Your earnings are outstanding, becoming a millionaire is
                        not an easy task but you are off to a great start!
                      </p>
                    </div>
                    <div className="mt-6">
                      <Button
                        color="white"
                        bgColor={"#111827"}
                        text="Download"
                        borderRadius="10px"
                        size="md"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/4 w-2/3">
                    <img src={CTA} alt="cartoon avatars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full m-3 flex-wrap justify-center gap-3 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="2xl:w-72 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-80 p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3 ">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm ${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-1 flex-wrap md:justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-800">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Update</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$48,308</span>
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>
              <div className="mt-5">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>

        <div>
          <div
            className=" rounded-2xl md:w-400 p-4 m-3"
            style={{ backgroundColor: currentColor }}
          >
            <div className="flex justify-between items-center ">
              <p className="font-semibold text-white text-2xl">Earnings</p>

              <div>
                <p className="text-2xl text-white font-semibold mt-8">
                  $63,448.45
                </p>
                <p className="text-gray-200">Monthly revenue</p>
              </div>
            </div>

            <div className="mt-4">
              <SparkLine
                currentColor={currentColor}
                id="column-sparkLine"
                height="100px"
                type="Column"
                data={SparklineAreaData}
                width="320"
                color="rgb(242, 252, 253)"
              />
            </div>
          </div>

          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
            <div>
              <p className="text-2xl font-semibold ">$43,246</p>
              <p className="text-gray-400">Yearly sales</p>
            </div>

            <div className="w-40">
              <Pie
                id="pie-chart"
                data={ecomPieChartData}
                legendVisiblity={false}
                height="160px"
              />
            </div>
          </div>
        </div>

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-6 rounded-2xl md:w-780">
          <Schedule height={"450"} option={"Agenda"} selected={"true"} />
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
