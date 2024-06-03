"use client";

import React, { useState, useEffect } from "react";

const Home = () => {
  const [value, setValue] = useState("");

  const appendValue = (val) => {
    setValue(value + val);
  };

  const deleteVal = () => {
    if (value) setValue(value.slice(0, -1));
  };

  const clearVal = () => {
    setValue("");
  };

  const compute = () => {
    const result = eval(value);
    setValue(result);
  };

  const handleKeyPress = (e) => {
    const validKeys = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      ".",
      "+",
      "-",
      "*",
      "/",
    ];
    if (validKeys.includes(e.key)) {
      appendValue(e.key);
    } else if (e.key === "=" || e.key === "Enter") {
      compute();
    } else if (e.key === "Backspace") {
      deleteVal();
    } else if (e.key === "Escape") {
      clearVal();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
  });

  const common =
    "m-1 w-[92px] h-[92px] min-[400px]:w-[94px] min-[400px]:h-[94px] md:w-16 md:h-16 rounded-xl bg-white/20 col-span-1 hover:scale-[1.03] transition-all duration-150";

  const details = [
    {
      btn: "AC",
      className: common + " text-orange-500",
      func: clearVal,
    },
    {
      btn: "DEL",
      className: common + " text-orange-500",
      func: deleteVal,
    },
    {
      btn: "%",
      className: common + " text-xl text-orange-500",
      func: () => appendValue("%"),
    },
    {
      btn: "/",
      className: common + " text-xl text-orange-500",
      func: () => appendValue("/"),
    },
    {
      btn: "7",
      className: common,
      func: () => appendValue("7"),
    },
    {
      btn: "8",
      className: common,
      func: () => appendValue("8"),
    },
    {
      btn: "9",
      className: common,
      func: () => appendValue("9"),
    },
    {
      btn: "*",
      className: common + " text-3xl text-orange-500",
      func: () => appendValue("*"),
    },
    {
      btn: "4",
      className: common,
      func: () => appendValue("4"),
    },
    {
      btn: "5",
      className: common,
      func: () => appendValue("5"),
    },
    {
      btn: "6",
      className: common,
      func: () => appendValue("6"),
    },
    {
      btn: "-",
      className: common + " text-3xl text-orange-500",
      func: () => appendValue("-"),
    },
    {
      btn: "1",
      className: common,
      func: () => appendValue("1"),
    },
    {
      btn: "2",
      className: common,
      func: () => appendValue("2"),
    },
    {
      btn: "3",
      className: common,
      func: () => appendValue("3"),
    },
    {
      btn: "+",
      className: common + " text-3xl text-orange-500",
      func: () => appendValue("+"),
    },
    {
      btn: "00",
      className: common,
      func: () => appendValue("00"),
    },
    {
      btn: "0",
      className: common,
      func: () => appendValue("0"),
    },
    {
      btn: ".",
      className: common,
      func: () => appendValue("."),
    },
    {
      btn: "=",
      className: common + " text-3xl bg-orange-400",
      func: compute,
    },
  ];

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-slate-700/50">
      <div className="flex flex-col items-end justify-end w-full h-full md:w-fit md:h-fit bg-black rounded-xl md:border border-slate-500">
        <div className="bg-black w-full h-24 rounded-xl flex items-end justify-end pr-4 text-xl">
          {value}
        </div>
        <div className="grid grid-cols-4">
          {details.map((detail, index) => (
            <button
              key={index}
              className={detail.className}
              onClick={detail.func}
            >
              {detail.btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
