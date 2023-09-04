import {properties} from "@/data/maindata";
import Link from "next/link";
import React from "react";
import {FaVectorSquare, FaBath} from "react-icons/fa";
import {IoLocation, IoBed} from "react-icons/io5";

type Props = {};

const RentProperties = (props: Props) => {
  const rent_properties = properties.filter(
    (property) => property.listing_type.toLowerCase() === "rent"
  );
  return (
    <div className="flex flex-col gap-8">
      <div className="px-2 above-480:px-4 p-16 bg-black lg:!py-20 text-white flex flex-col gap-4">
        <h1 className="text-[2rem] above-480:text-[2.4rem] sm:!text-[3.4rem] lg:!text-[3.5rem] text-center">
          Browse Properties
        </h1>
        <div className="flex gap-4 justify-center items-center">
          <Link
            href="/properties"
            className="p-2 px-4 transition-all bg-black hover:bg-white duration-300 text-white hover:text-black flex justify-center items-center h-10 border cursor-pointer border-white"
          >
            All
          </Link>
          <Link
            href="/properties/rent"
            className="p-2 px-4 transition-all bg-white hover:bg-[#A1A1A1] duration-300 text-black hover:text-black flex justify-center items-center h-10 border cursor-pointer border-white"
          >
            Rent
          </Link>
          <Link
            href="/properties/sell"
            className="p-2 px-4 transition-all bg-black hover:bg-white duration-300 text-white hover:text-black flex justify-center items-center h-10 border cursor-pointer border-white"
          >
            Sell
          </Link>
        </div>
      </div>
      <div className="p-4 sm:p-6 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rent_properties.map((property) => (
            <div
              className="flex flex-col gap-4 cursor-pointer"
              key={property.id}
            >
              <div className="relative overflow-hidden">
                <div className="absolute top-6 z-20 left-6 flex gap-4 w-full justify-start items-center">
                  <div className="bg-black text-sm text-white p-2 px-3">
                    {property.listing_type}
                  </div>
                  <div className="text-sm text-black bg-white p-2 px-3">
                    {property.property_type}
                  </div>
                </div>
                <img
                  src={property.img}
                  alt=""
                  className="h-full w-full object-cover hover:scale-110 transition-all duration-700"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-nunito_sans font-semibold text-2xl">
                  {property.property_name}
                </h4>
                <div className="flex gap-1 justify-start items-center">
                  <IoLocation className="text-lg" />
                  <p className="text-sm">{property.location}</p>
                </div>
                <div className="h-[2px] w-full bg-gray-300" />
                <div className="flex justify-between flex-wrap gap-4">
                  <div className="flex gap-4  justify-start items-center">
                    <div className="flex gap-2 justify-start items-center">
                      <FaVectorSquare />
                      <p>{property.sqft} Sq.ft</p>
                    </div>
                    <div className="flex gap-2 justify-start items-center">
                      <FaBath />
                      <p>{property.bath} Bath</p>
                    </div>
                    <div className="flex gap-2 justify-start items-center">
                      <IoBed />
                      <p>{property.bed} Bed</p>
                    </div>
                  </div>
                  <div className="text-2xl">
                    ${property.price.toLocaleString("us-en")} USD /mo
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RentProperties;
