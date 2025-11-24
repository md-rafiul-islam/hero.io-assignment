import React, { useEffect, useState } from "react";
import InstalledCard from "../Components/InstalledCard";
import useAppsData from "../Hooks/useAppsData";

const Installation = () => {
  const [installedApp, setInstalledApp] = useState([]);
  const { data, loading, error } = useAppsData();
  useEffect(() => {
    let installedItems =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApp(data.filter((data) => installedItems.includes(data.id)));
  }, [data]);

  const handleRemove = (id) => {
    let installedItems =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    let temp = installedItems.filter((data) => data != id);
    localStorage.setItem("installedApps", JSON.stringify(temp));
    let appData = installedApp.filter((appData) => appData.id != id);
    setInstalledApp(appData);

    // localStorage.setItem(JSON.stringify())
  };

  return (
    <div className="mx-auto">
      <div className="text-center bg-gray-200 space-y-6 h-40  flex flex-col  justify-center items-center">
        <h1 className="text-4xl font-bold">Your Installed Apps</h1>
        <p className="text-gray-600">
          Explore All Trending Apps on the Market developed by us.
        </p>
      </div>
      <div className="flex justify-between mx-auto w-[calc(100%-11%)]">
        <h3>{installedApp.length} Apps Found</h3>
        <div>drop down</div>
      </div>
      <div className="w-[calc(100%-10%)] mx-auto space-y-5 mt-3">
        <div className="space-y-2 shadow ">
          {installedApp.map((data) => (
            <InstalledCard
              key={data.id}
              data={data}
              appId={data.id}
              handleRemove={handleRemove}
            ></InstalledCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installation;
