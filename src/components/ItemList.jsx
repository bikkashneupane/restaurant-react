import React from "react";
import { CDN_URL, STAR_SVG } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card.info.id}
          className="border-b-2 border-gray-200 p-2 m-2 text-left"
        >
          <div className="flex justify-between gap-6">
            <div className="w-9/12 flex flex-col gap-2">
              <div className="flex flex-col">
                <span className="font-bold">{item?.card.info.name}</span>
                <span className="font-semibold">
                  $
                  {parseInt(
                    item?.card?.info?.price / 56.51 ||
                      item?.card?.info?.variantsV2?.pricingModels
                        ?.map((item) => item?.price)
                        .reduce((acc, curr) => acc + curr, 0) /
                        item?.card?.info?.variantsV2?.pricingModels?.length /
                        56.51
                  ) / 100}
                </span>
              </div>
              <span className="flex gap-1 items-center">
                {STAR_SVG}
                {Object.keys(item?.card?.info?.ratings?.aggregatedRating).length
                  ? `${item?.card?.info?.ratings?.aggregatedRating?.rating}/
                    (${item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})`
                  : `-`}
              </span>
              <p className="text-gray-500">{item?.card?.info?.description}</p>
            </div>

            <div className="relative w-1/6 rounded-lg overflow-hidden flex justify-center">
              <img
                src={`${CDN_URL}/${item?.card?.info?.imageId}`}
                alt=""
                className="w-full h-full object-cover"
              />
              <button className="bg-green-600 px-4 py-1 rounded-lg shadow-lg text-white font-bold absolute bottom-0">
                ADD +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
