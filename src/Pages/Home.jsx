import React from "react";
import Banner from "../Components/Banner";
import useAppsData from "../Hooks/useAppsData";
import Card from "../Components/Card";
import { RingLoader } from "react-spinners";

const Home = () => {
  const { data, loading, error } = useAppsData();
  console.log(data);

  return (
    <div className="space-y-14">
      <Banner></Banner>
      <div className="flex flex-col text-center space-y-4">
        <h1 className="text-4xl">Trending Apps</h1>
        <p className="text-gray-500">
          Explore All Apps on the Market developed by us
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6">
        {loading ? (
          <RingLoader></RingLoader>
        ) : (
          data.map((data) => <Card key={data.id} data={data}></Card>)
        )}
      </div>
    </div>
  );
};

export default Home;
