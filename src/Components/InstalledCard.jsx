import React from "react";
import { IoMdDownload } from "react-icons/io";
import { toast } from "react-toastify";

const InstalledCard = ({ handleRemove, data }) => {
  const { id, image, title, companyName, downloads } = data;
  return (
    <div>
      <div className="rounded-2xl bg-white shadow-sm flex items-center flex-row px-4">
        <img className="h-18 w-18 rounded" src={image} alt="Movie" />

        <div className="card-body flex flex-row justify-between items-center">
          <div>
            <h2 className="card-title">{title}</h2>
            <p>{companyName}</p>
            <p className="flex items-center">
              <IoMdDownload></IoMdDownload> {downloads}
            </p>
          </div>

          <div className="card-actions justify-end">
            <button
              onClick={() => {
                handleRemove(id);
                toast(`${title} Uninstalled Successfuly`);
              }}
              className="btn text-white bg-green-500"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstalledCard;
