import React from "react";
import {HiOutlineUserGroup} from "react-icons/hi";
import {GiSpookyHouse} from "react-icons/gi";
import TextInput from "@/components/Input/Input";

type Props = {};

const AddProperty = (props: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-4xl font-semibold px-2 above-480:px-4 p-16 bg-black lg:!py-20 text-white">
        <h1 className="text-[2rem] above-480:text-[2.4rem] sm:!text-[3.4rem] lg:!text-[3.5rem] text-center">
          List Your Property Now
        </h1>
      </div>
      <div className="p-4 pt-8 pb-14 lg:pb-20 lg:pt-14 lg:p-8 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 ">
            <HiOutlineUserGroup fontSize={32} />
            <h2 className="above-480:text-4xl  text-2xl font-semibold">
              Personal Information
            </h2>
          </div>
          <div className="grid grid-cols-1 above-480:grid-cols-2 gap-4 lg:gap-8">
            <div className="flex flex-col gap-1">
              <label className="text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="Full Name"
                className="outline-none py-3 px-4 text-lg border-2 border-black focus-within:border-gray-500 transition-all"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-gray-700">Email Address</label>
              <input
                type="text"
                placeholder="Email Address"
                className="outline-none py-3 px-4 text-lg border-2 border-black focus-within:border-gray-500 transition-all"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-gray-700">Phone Number</label>
              <input
                type="tel"
                placeholder="Phone Number"
                className="outline-none py-3 px-4 text-lg border-2 border-black focus-within:border-gray-500 transition-all"
              />
            </div>
          </div>
        </div>
        <div className="h-1 w-full bg-black" />
        <div className="flex flex-col gap-8">
          <div className="flex gap-2 ">
            <GiSpookyHouse fontSize={32} />
            <h2 className="above-480:text-4xl  text-2xl font-semibold">
              Property Information
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Property Basic Info</h3>
            <div className="grid grid-cols-1 above-480:grid-cols-2 gap-4 lg:gap-8">
              <TextInput label="Property Title" placeholder="Property Title" />

              <div className="flex flex-col gap-1">
                <label className="text-gray-700">Property Type</label>
                <select className="outline-none py-3 px-4 text-lg border-2 border-black focus-within:border-gray-500 transition-all">
                  <option value="">Property Type</option>
                  <option value="">House</option>
                  <option value="">Apartment</option>
                  <option value="">Villa</option>
                  <option value="">Resort</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-gray-700">Property Status</label>
                <select className="outline-none py-3 px-4 text-lg border-2 border-black focus-within:border-gray-500 transition-all">
                  <option value="">Property Status</option>
                  <option value="">Rent</option>
                  <option value="">Sell</option>
                </select>
              </div>

              <TextInput label="Property Price" placeholder="Property Price" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Property Location</h3>
            <div className="grid grid-cols-1 above-480:grid-cols-2 gap-4 lg:gap-8">
              <div className="flex flex-col gap-1">
                <label className="text-gray-700">Choose Country</label>
                <select className="outline-none py-3 px-4 text-lg border-2 border-black focus-within:border-gray-500 transition-all">
                  <option value="">Country</option>
                  <option value="">Australia</option>
                  <option value="">Armenia</option>
                  <option value="">USA</option>
                  <option value="">Argentina</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-gray-700">Choose State</label>
                <select className="outline-none py-3 px-4 text-lg border-2 border-black focus-within:border-gray-500 transition-all">
                  <option value="">State</option>
                  <option value="">Florida</option>
                  <option value="">Virginia</option>
                  <option value="">New Mexico</option>
                  <option value="">Louisiana</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-gray-700">Choose City</label>
                <select className="outline-none py-3 px-4 text-lg border-2 border-black focus-within:border-gray-500 transition-all">
                  <option value="">City</option>
                  <option value="">Saj Francisco</option>
                  <option value="">Chicago</option>
                  <option value="">San Diego</option>
                  <option value="">San Antonio</option>
                </select>
              </div>
              <TextInput label="Zip Code" placeholder="Zip Code" />
              <div className="flex flex-col gap-1 col-span-2 ">
                <label className="text-gray-700">Address</label>
                <textarea
                  rows={6}
                  cols={10}
                  placeholder="Address"
                  className="outline-none py-3 px-4 text-lg border-2 border-black focus-within:border-gray-500 transition-all"
                />
              </div>

              <TextInput label="Latitude" placeholder="Latitude" />
              <TextInput label="Longitude" placeholder="Longitude" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Property Details</h3>
            <div className="grid grid-cols-1 above-480:grid-cols-2 gap-4 lg:gap-8">
              <TextInput label="Area" placeholder="Sqft Area" />
              <div className="flex flex-col gap-1">
                <label className="text-gray-700">Bathroom</label>
                <select className="outline-none py-3 px-4 text-lg border-2 border-black focus-within:border-gray-500 transition-all">
                  <option value="">Bathroom</option>
                  <option value="">01</option>
                  <option value="">02</option>
                  <option value="">03</option>
                  <option value="">04</option>
                  <option value="">05</option>
                  <option value="">06</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-gray-700">Bedroom</label>
                <select className="outline-none py-3 px-4 text-lg border-2 border-black focus-within:border-gray-500 transition-all">
                  <option value="">Bedroom</option>
                  <option value="">01</option>
                  <option value="">02</option>
                  <option value="">03</option>
                  <option value="">04</option>
                  <option value="">05</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-gray-700">Parking</label>
                <select className="outline-none py-3 px-4 text-lg border-2 border-black focus-within:border-gray-500 transition-all">
                  <option value="">Parking</option>
                  <option value="">01</option>
                  <option value="">02</option>
                  <option value="">03</option>
                  <option value="">04</option>
                  <option value="">05</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-gray-700 text-lg">Amenities</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 w-full gap-4">
                <div className="flex gap-2 cursor-pointer">
                  <input type="checkbox" className="w-6 h-6  cursor-pointer" />
                  <label htmlFor="">Kitchen</label>
                </div>
                <div className="flex gap-2 cursor-pointer">
                  <input type="checkbox" className="w-6 h-6  cursor-pointer" />
                  <label htmlFor="">Security cameras</label>
                </div>
                <div className="flex gap-2 cursor-pointer">
                  <input type="checkbox" className="w-6 h-6  cursor-pointer" />
                  <label htmlFor="">TV</label>
                </div>
                <div className="flex gap-2 cursor-pointer">
                  <input type="checkbox" className="w-6 h-6  cursor-pointer" />
                  <label htmlFor="">Projector Room</label>
                </div>
                <div className="flex gap-2 cursor-pointer">
                  <input type="checkbox" className="w-6 h-6  cursor-pointer" />
                  <label htmlFor="">Outdoor Shower</label>
                </div>
                <div className="flex gap-2 cursor-pointer">
                  <input type="checkbox" className="w-6 h-6  cursor-pointer" />
                  <label htmlFor="">Window Covering</label>
                </div>
                <div className="flex gap-2 cursor-pointer">
                  <input type="checkbox" className="w-6 h-6  cursor-pointer" />
                  <label htmlFor="">Back yard</label>
                </div>
                <div className="flex gap-2 cursor-pointer">
                  <input type="checkbox" className="w-6 h-6  cursor-pointer" />
                  <label htmlFor="">Laundry</label>
                </div>
                <div className="flex gap-2 cursor-pointer">
                  <input type="checkbox" className="w-6 h-6  cursor-pointer" />
                  <label htmlFor="">Wifi</label>
                </div>
                <div className="flex gap-2 cursor-pointer">
                  <input type="checkbox" className="w-6 h-6  cursor-pointer" />
                  <label htmlFor="">Pool</label>
                </div>
                <div className="flex gap-2 cursor-pointer">
                  <input type="checkbox" className="w-6 h-6  cursor-pointer" />
                  <label htmlFor="">Alarm System</label>
                </div>
                <div className="flex gap-2 cursor-pointer">
                  <input type="checkbox" className="w-6 h-6  cursor-pointer" />
                  <label htmlFor="">Elevator</label>
                </div>
                <div className="flex gap-2 cursor-pointer">
                  <input type="checkbox" className="w-6 h-6  cursor-pointer" />
                  <label htmlFor="">GYM</label>
                </div>
                <div className="flex gap-2 cursor-pointer">
                  <input type="checkbox" className="w-6 h-6  cursor-pointer" />
                  <label htmlFor="">Balcony</label>
                </div>
                <div className="flex gap-2 cursor-pointer">
                  <input type="checkbox" className="w-6 h-6  cursor-pointer" />
                  <label htmlFor="">Refrigerator</label>
                </div>
                <div className="flex gap-2 cursor-pointer">
                  <input type="checkbox" className="w-6 h-6  cursor-pointer" />
                  <label htmlFor="">Air Conditioning</label>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <button className="p-3 px-6 bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-all font-semibold">
                Submit Property
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
