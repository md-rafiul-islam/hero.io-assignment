import React from "react";
import { useParams } from "react-router";
import useAppsData from "../Hooks/useAppsData";
import { RingLoader } from "react-spinners";
import {
  Bar,
  BarChart,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AppDetails = () => {
  const { id } = useParams();

  const { data, loading, error } = useAppsData();

  let thisAppDetails = {};
  thisAppDetails = data.find((data) => data.id == id);
  console.log(thisAppDetails);

  if (loading) {
    return <RingLoader></RingLoader>;
  } else {
    return (
      <div className="space-y-10">
        <div className="flex mt-10 card w-[calc(100%-5%)] mx-auto lg:card-side bg-base-100 shadow-sm">
          <figure>
            <img src={thisAppDetails.image} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{thisAppDetails.title}</h2>
            <p>
              Developed by{" "}
              <span className="font-bold">{thisAppDetails.companyName}</span>
            </p>
            <div className="card-actions ">
              <button className="btn btn-success text-white font-bold">
                Install Now ({thisAppDetails.size} MB)
              </button>
            </div>
          </div>
        </div>
        <p className="w-[calc(100%-5%)] mx-auto font-bold text-2xl">Ratings:</p>
        <div className="bg-base-100 p-4 h-80 w-[calc(100%-5%)] mx-auto">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={thisAppDetails.ratings}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />

              <Bar dataKey="count" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col w-[calc(100%-5%)] mx-auto">
          <p className="font-bold">Description:</p>
          <p>{thisAppDetails.description}</p>
        </div>
      </div>
    );
  }
};

export default AppDetails;
