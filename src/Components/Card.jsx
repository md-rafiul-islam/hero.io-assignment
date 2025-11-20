import React from "react";
import { FcRating } from "react-icons/fc";
import { IoMdDownload } from "react-icons/io";
import { Link } from "react-router";

const Card = ({ data }) => {
  return (
    <Link to={`/apps/app-details/${data.id}`}>
      <div className="card  bg-base-100 p-4 shadow-2xl hover:scale-105 transition ease-in-out">
        <img
          src={data.image}
          alt={data.title}
          className="rounded-xl m-3 shadow"
        />

        <div className="card-body">
          <h2 className="card-title">{data.title}</h2>
        </div>
        <div className="flex justify-between px-5">
          <div className="flex items-center">
            <IoMdDownload />
            <p className="text-green-700">{data.downloads}</p>
          </div>
          <div className="flex items-center gap-1">
            <FcRating />
            <p>{data.ratingAvg}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
