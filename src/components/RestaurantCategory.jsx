import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ showItem, data, setShowIndex }) => {
  return (
    <div className="flex justify-center">
      {/* Header */}
      <div className="lg:w-2/3 w-full bg-gray-50 mb-3 px-6 py-4 shadow-lg rounded-lg">
        <div
          className="flex justify-between items-center"
          onClick={setShowIndex}
        >
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItem && <ItemList items={data.itemCards} />}
      </div>

      {/* Accordian Body */}
    </div>
  );
};

export default RestaurantCategory;
