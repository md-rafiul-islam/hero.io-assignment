import React from "react";
import Banner from "../Components/Banner";
import useAppsData from "../Hooks/useAppsData";
import Card from "../Components/Card";
import { Link } from "react-router";
import Spinner from "../Components/Spinner";

const Home = () => {
  const { data, loading, error } = useAppsData();

  const homeAppSuggestion = data.slice(0, 8);

  return (
    <div className="space-y-14">
      <Banner></Banner>
      <div className="flex flex-col text-center space-y-4">
        <h1 className="text-4xl">Trending Apps</h1>
        <p className="text-gray-500">
          Explore All Apps on the Market developed by us
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-6">
        {loading ? (
          <Spinner></Spinner>
        ) : (
          homeAppSuggestion.map((data) => (
            <Card key={data.id} data={data}></Card>
          ))
        )}
      </div>
      <div className="flex justify-center">
        <Link to="/apps">
          <button className="bg-purple-600 text-white py-3 px-5 rounded font-bold">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
