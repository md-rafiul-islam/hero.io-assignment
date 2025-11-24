import React from "react";

const InstalledCard = ({ handleRemove, data }) => {
  console.log(data);
  const { id, image, title, companyName } = data;
  return (
    <div>
      <div className="rounded-2xl bg-white shadow-sm flex items-center flex-row px-4">
        <img className="h-18 w-18 rounded" src={image} alt="Movie" />

        <div className="card-body flex flex-row justify-between items-center">
          <div>
            <h2 className="card-title">{title}</h2>
            <p>{companyName}</p>
          </div>

          <div className="card-actions justify-end">
            <button
              onClick={() => {
                handleRemove(id);
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
