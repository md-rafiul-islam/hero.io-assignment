import React, { useState } from "react";
import useAppsData from "../Hooks/useAppsData";
import { RingLoader } from "react-spinners";
import Card from "../Components/Card";

const Apps = () => {
  const { data, loading, error } = useAppsData();
  const [text, setText] = useState("");

  let searchData = {};

  searchData = data.filter((data) =>
    data.title
      .trim()
      .toLocaleLowerCase()
      .includes(text.trim().toLocaleLowerCase())
  );

  return (
    <div className="space-y-14 mt-7">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold">Our All Applications</h1>
        <p className="text-gray-500">
          Explore All Apps on the Market developed by us. We code for Milions
        </p>
      </div>

      <div className="flex sm:flex-col md:flex-row lg:flex-row w-[calc(100%-5%)] mx-auto justify-between items-center">
        <h1 className="text-2xl font-semibold">
          ({searchData.length}) Apps Found
        </h1>

        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            onChange={(e) => {
              setText(e.target.value);
            }}
            placeholder={text}
          />
        </label>
      </div>

      <div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-6 p-5">
          {loading ? (
            <RingLoader></RingLoader>
          ) : (
            searchData.map((data) => <Card key={data.id} data={data}></Card>)
          )}
        </div>
      </div>
    </div>
  );
};

export default Apps;
