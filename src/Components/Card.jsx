import React from "react";
import { FcRating } from "react-icons/fc";
import { IoMdDownload } from "react-icons/io";

const Card = ({ data }) => {
  return (
    <div className="card bg-base-100 shadow">
      <img
        src={data.image}
        alt={data.title}
        className="rounded-xl m-3 w-full"
      />

      <div className="card-body">
        <h2 className="card-title">{data.title}</h2>
      </div>
      <div className="flex justify-between px-5">
        <div className="flex items-center">
          <IoMdDownload />
          <p>{data.downloads}</p>
        </div>
        <div className="flex items-center gap-1">
          <FcRating />
          <p>{data.ratingAvg}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
