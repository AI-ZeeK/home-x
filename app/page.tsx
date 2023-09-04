import Image from "next/image";
import {BsArrowRight, BsFillStarFill, BsSearch} from "react-icons/bs";
import {FaBath, FaGlobeEurope, FaVectorSquare} from "react-icons/fa";
import {IoBed, IoLocation} from "react-icons/io5";
import {CiCalculator2} from "react-icons/ci";
import {FaSpaceAwesome} from "react-icons/fa6";
import {PiHandshakeDuotone} from "react-icons/pi";
import {GoKey, GoVerified} from "react-icons/go";
import {partners, properties, towns} from "@/data/maindata";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      <section className="p-2 pt-12 sm:p-6 flex flex-col gap-8">
        <div className="flex flex-col justify-center items-center gap-8 lg:flex-row">
          <div>
            <div className="text-[3rem] above-480:text-[3.6rem] sm:!text-[4rem] lg:!text-[4rem] leading-[1.2] font-semibold flex flex-wrap gap-2 justify-start items-end">
              <span className="font-nunito_sans">Easiest way to find your</span>{" "}
              <span className="">
                <img
                  className="h-16 sm:h-full above-480:w-40 w-[40rem] rounded-[3rem] object-cover"
                  src="/home/thumb_1.jpeg"
                  alt=""
                />
              </span>{" "}
              <span className="font-nunito_sans">dream place</span>
            </div>
          </div>
          <div className="flex justify-end items-center  w-full overflow-hidden">
            <Link
              href="/properties"
              className="flex justify-end items-center relative w-full translate-x-12"
            >
              <div className="h-36 w-36 lg:w-44 lg:h-44 xl:w-52 xl:h-52 md:h-44 md:w-44 rounded-full overflow-hidden z-10">
                <img
                  className="h-full w-full object-cover"
                  src="/home/about-service-p-500.jpg"
                  alt=""
                />
              </div>
              <div className="h-36 w-36 lg:w-44 lg:h-44 xl:w-52 xl:h-52 md:h-44 md:w-44 rounded-full text-rotate-block  transition-all hover:z-20 cursor-pointer translate-x-[-3rem] bg-black text-white flex justify-center items-center">
                <BsArrowRight
                  className="icon transition-all cursor-pointer"
                  fontSize={36}
                  color={"#fff"}
                />
                <div className="text-black cursor-pointer absolute top-[50%] transparent translate-x-[-50%] translate-y-[-50%] left-[50%] w-full h-full">
                  <fieldset>
                    <label
                      data-id="Rosehip Oil"
                      className="rounded-full flex flex-col items-center justify-center focus:outline-none ring-pink-500"
                    >
                      <svg
                        className="svg absolute translate-y-[50%] cursor-pointer transition-all duration-700"
                        viewBox="0 0 100 100"
                        width="100"
                        height="100"
                      >
                        <defs>
                          <path
                            id="circle"
                            d="
                        M 50, 50
                        m -37, 0
                        a 37,37 0 1,1 74,0
                        a 37,37 0 1,1 -74,0"
                          />
                        </defs>
                        <text font-size="10" className="svg-text text-2">
                          <textPath
                            xlinkHref="#circle"
                            className="text-white versailles relative font-thin transition-all duration-500"
                          >
                            View all Properties
                          </textPath>
                        </text>
                      </svg>
                    </label>
                  </fieldset>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-[2fr_2.5fr_1fr] lg:gap-8 grid gap-4  py-8">
          <div className="flex flex-col gap-4 p-2 lg:gap-24">
            <div className="flex flex-col gap-4 p-2">
              <p>
                Supposing so be resolving breakfast am or perfectly. It drew a
                hill from me. Valley by oh twenty direct me so. Departure
                defective arranging rapturous did believe him all had supported.
                Family months lasted simple set nature vulgar him. Picture for
                attempt joy.
              </p>
              <div className="p-3 flex justify-between items-center border-2 border-black">
                <input
                  type="text"
                  className="o outline-none p-3 w-full "
                  placeholder="Enter keyword"
                />
                <button className="p-3 px-8 bg-black text-white ">
                  Search
                </button>
              </div>
              <div className="flex justify-start items-center gap-2">
                <FaGlobeEurope />
                <p className="text-sm">
                  Globally integrated real estate platform
                </p>
              </div>
            </div>
            <div className="flex justify-start items-start sm:items-center gap-2 lg:gap-4 flex-col sm:flex-row lg:flex-col lg:items-start">
              <div className="flex justify-start items-center">
                <div className="rounded-full h-16 w-16 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src="/home/profile-1.jpg"
                    alt=""
                  />
                </div>
                <div className="rounded-full h-16 w-16 -translate-x-3 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src="/home/profile-2.jpg"
                    alt=""
                  />
                </div>
                <div className="rounded-full h-16 w-16 -translate-x-6 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src="/home/profile-3.jpg"
                    alt=""
                  />
                </div>
                <div className="rounded-full h-16 w-16 -translate-x-9 overflow-hidden bg-black text-white flex justify-center items-center">
                  <span>20+</span>
                </div>
              </div>
              <div>
                <h3 className="whitespace-nowrap flex justify-start items-center gap-2 font-semibold text-2xl">
                  Rating <BsFillStarFill /> 5.0
                </h3>
                <p className="text-sm">Trusted by a client worldwide</p>
              </div>
            </div>
          </div>
          <div className="p-2">
            <div className="relative">
              <img src="/home/hero-image-1.jpg" alt="" />
              <div className="absolute -bottom-8 md:left-10 left-4 bg-black lg:w-auto md:!w-auto sm:!w-[95%] above-480:w-[94%] w-[90%] text-white sm:p-4 md:p-6 md:px-8 p-4 flex flex-col gap-4">
                <p className="text-xl">Orchid Casel de Paradise</p>
                <div className="flex gap-4  justify-start items-center text-sm">
                  <div className="flex gap-2 justify-start items-center">
                    <FaVectorSquare />
                    <p>1145 Sq.ft</p>
                  </div>
                  <div className="flex gap-2 justify-start items-center">
                    <FaBath />
                    <p>3 Bath</p>
                  </div>
                  <div className="flex gap-2 justify-start items-center">
                    <IoBed />
                    <p>3 Bed</p>
                  </div>
                </div>
                <div className="bg-white text-black cursor-pointer hover:bg-[#262626] hover:text-white transition-all p-2 justify-center items-center w-full  text-center text-sm sm:text-lg">
                  View Details
                </div>
              </div>
            </div>
          </div>
          <div className="lg:!grid-cols-1 above-480:grid-cols-3 grid-cols-2 grid gap-8 md:justify-center justify-between items-center lg:items-start p-8 pt-12 ">
            <div className="flex flex-col justify-center items-start gap-2">
              <h3 className="text-5xl">99%</h3>
              <p>Customer satisfaction</p>
            </div>
            <div className="flex flex-col justify-center items-start gap-2">
              <h3 className="text-5xl">56+</h3>
              <p>Experience agents</p>
            </div>
            <div className="flex flex-col justify-center items-start gap-2">
              <h3 className="text-5xl">249</h3>
              <p>Total property sell</p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-[2fr_3.5fr] lg:gap-8 lg:justify-end lg:items-end gap-4 md:gap-8 p-2">
          <div>
            <img src="/home/about-image.jpg" alt="" />
          </div>
          <div className="flex flex-col gap-8 ">
            <h1 className="lg:text-[3rem] sm:text-[2rem] text-[1.4rem] font-nunito_sans">
              Our objective is to establish micro-communities that not only
              serve their residents but also contribute positively to the larger
              community. We believe that every space holds potential, and we
              endeavor to transform these spaces into vibrant and sustainable
              neighborhoods. Our approach to land planning.
            </h1>
            <div className="flex flex-col gap-8 lg:gap-32 lg:pb-16">
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-xl">From search to buy:</h3>
                <div className="flex justify-start flex-col above-480:flex-row items-start above-480:items-center gap-4 flex-wrap">
                  <div className="flex justify-center   items-center gap-1">
                    <BsSearch />
                    <span>Search</span>
                  </div>
                  <div className="h-1 above-480:w-12 w-full bg-black" />

                  <div className="flex justify-center   items-center gap-1">
                    <CiCalculator2 />
                    <span>Mortgage</span>
                  </div>
                  <div className="h-1 above-480:w-12 w-full bg-black" />

                  <div className="flex justify-center   items-center gap-1">
                    <FaSpaceAwesome />
                    <span>Tour</span>
                  </div>
                  <div className="h-1 above-480:w-12 w-full bg-black" />
                  <div className="flex justify-center   items-center gap-1">
                    <PiHandshakeDuotone />
                    <span>Negotiate</span>
                  </div>
                  <div className="h-1 above-480:w-12 w-full bg-black" />

                  <div className="flex justify-center   items-center gap-1">
                    <GoVerified />
                    <span>Approval</span>
                  </div>
                  <div className="h-1 above-480:w-12 w-full bg-black" />
                  <div className="flex justify-center   items-center gap-1">
                    <GoKey />
                    <span>Buy</span>
                  </div>
                  <div className="h-1 above-480:w-12 w-full bg-black" />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:!grid lg:grid-cols-4 above-480:flex flex-wrap above-480:justify-center place-items-center items-center ">
                <div className="h-56 w-56 lg:w-52 lg:h-52  rounded-full border-2 border-black bg-black text-white text-center flex flex-col gap-2 justify-center items-center p-4">
                  <h4 className="text-2xl font-semibold">25 Years</h4>
                  <p className="text-[14px]">
                    Of successful experience in trading
                  </p>
                </div>
                <div className="h-56 w-56 lg:w-52 lg:h-52 rounded-full border-2 border-black bg-white text-black text-center flex flex-col gap-2 justify-center items-center p-4 lg:translate-y-16">
                  <h4 className="text-2xl font-semibold">Rent</h4>
                  <p className="text-[14px]">
                    Supposing so be resolving breakfast am or perfectly.
                  </p>
                </div>
                <div className="h-56 w-56 lg:w-52 lg:h-52 rounded-full border-2 border-black bg-white text-black text-center flex flex-col gap-2 justify-center items-center p-4">
                  <h4 className="text-2xl font-semibold">Sell</h4>
                  <p className="text-[14px]">
                    Speedily say has suitable disposal add boy.
                  </p>
                </div>
                <div className="h-56 w-56 lg:w-52 lg:h-52 rounded-full border-2 border-black bg-white text-black text-center flex flex-col gap-2 justify-center items-center p-4 lg:translate-y-16">
                  <h4 className="text-2xl font-semibold">Buy</h4>
                  <p className="text-[14px]">
                    Passage its ten led removal Preference any astonished
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 flex flex-col gap-12">
          <h1 className="above-480:text-6xl text-4xl text-center font-nunito_sans">
            Available Properties for Sell and Rent
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
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
          <div className="flex justify-center items-center w-full">
            <Link
              href="/properties"
              className="p-2 px-4 transition-all bg-black hover:bg-white text-white hover:text-black hidden above-480:flex justify-center items-center h-10 border cursor-pointer border-black"
            >
              View All Properties
            </Link>
          </div>
        </div>
      </section>
      <section className="min-h-[20rem]">
        <img
          src="/property-video-poster.jpg"
          className="h-full object-cover w-full min-h-[20rem]"
          alt=""
        />
      </section>
      <section className="p-2 pt-12 sm:p-6 flex flex-col gap-8">
        <div className="p-2 flex flex-col gap-12">
          <h3 className="text-3xl above-480:text-4xl text-center font-nunito_sans">
            Our Investors and Business Partners Are Our Strength
          </h3>
          <div className="grid grid-cols-2 above-480:grid-cols-3 md:!grid-cols-6 gap-4">
            {partners.map((partner) => (
              <div className="" key={partner.id}>
                <img
                  src={partner.img}
                  className="w-full h-full object-contain"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
        <div className="p-2 flex flex-col gap-12">
          <h1 className="above-480:text-6xl text-4xl text-center font-nunito_sans">
            Our Availability in These Towns
          </h1>
          <div className="grid grid-cols-2 md:!grid-cols-3 lg:!grid-cols-6 gap-8">
            {towns.map((town) => (
              <div className="flex flex-col items-center gap-2 cursor-pointer">
                <div className="rounded-full overflow-hidden">
                  <img
                    src={town.img}
                    alt=""
                    className="w-full h-full object-cover hover:scale-110 transition-all duration-700"
                  />
                </div>
                <p className="text-lg">{town.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
