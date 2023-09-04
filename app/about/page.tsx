import {_about_, _agents} from "@/data/maindata";
import React from "react";
import {BsArrowRight} from "react-icons/bs";
import {AiTwotoneStar} from "react-icons/ai";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex p-4 pt-8 pb-14 lg:pb-20 lg:pt-14 lg:p-8 flex-col gap-8">
      <div className="px-2 p-4 text-[2.6rem] font-semibold above-480:text-[3.4rem] sm:!text-[3.8rem] lg:!text-[5rem] text-center flex flex-wrap gap-2 justify-center items-center">
        <span className="font-nunito_sans">Matching a </span>
        <span className="">
          <img
            className="h-16 sm:h-18 md:h-20 above-480:w-36 w-[40rem] sm:!w-48 lg:!w-52 rounded-[3rem] object-cover"
            src="/about/hero-bg.jpg"
            alt=""
          />
        </span>
        <span className="font-nunito_sans">Home to Your Needs</span>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid lg:grid-cols-2 border-2 border-black max-w-[70rem]">
          <div className="min-h-[14rem]">
            <img
              src="/about/about-hero-800.jpg"
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-1">
            <div className="grid above-480:grid-cols-2 above-480:gap-12 sm:!gap-16 gap-4 p-8 above-480:p-12">
              <div className="flex flex-col justify-center items-start gap-2">
                <h3 className="above-480:text-5xl text-4xl">99%</h3>
                <p className="text-sm whitespace-nowrap">
                  Customer satisfaction
                </p>
              </div>
              <div className="flex flex-col justify-center items-start gap-2">
                <h3 className="above-480:text-5xl text-4xl">56+</h3>
                <p className="text-sm whitespace-nowrap">Experience agents</p>
              </div>
              <div className="flex flex-col justify-center items-start gap-2">
                <h3 className="above-480:text-5xl text-4xl">249</h3>
                <p className="text-sm whitespace-nowrap">Total property sell</p>
              </div>
              <div className="flex flex-col justify-center items-start gap-2">
                <h3 className="above-480:text-5xl text-4xl">10+</h3>
                <p className="text-sm whitespace-nowrap">Years of Experience</p>
              </div>
            </div>
            <div className="bg-black text-white p-8 py-10 sm:p-10 lg:p-16 lg:px-12 flex flex-col gap-4">
              <h2 className="text-2xl font-semibold">Why Choose Us</h2>
              <ul className="grid lg:grid-cols-2 lg:gap-4 gap-2 list-disc pl-6">
                <li>Good Reviews By Clients</li>
                <li>Top Property Places</li>
                <li>Clients Love Our Services</li>
                <li>Market-leading research</li>
                <li>Complete 24/7 Security</li>
                <li>Outstanding property</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 ">
        <div className="lg:text-[3rem] sm:text-[2.4rem] sm:leading-[2.6rem] lg:leading-[3rem] text-[1.8rem] text-center flex flex-wrap gap-2 justify-center items-center w-full">
          <span>Our approach to community building</span>{" "}
          <span className="h-10 md:h-12 sm:w-36 w-full px-4 sm:px-0">
            <img
              className="h-full w-full rounded-[3rem] object-cover"
              src="/about/hero-bg-01.jpg"
              alt=""
            />
          </span>{" "}
          <span className="">
            is centered on creating spaces that are inclusive, diverse, and
            welcoming to all. We believe that by fostering a sense of belonging
            and connection, we can create communities that are resilient,
            vibrant, and strong.
          </span>
        </div>
      </div>
      <div className="p-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {_about_.map((item) => (
          <div
            className="flex flex-col justify-start items-center gap-2"
            key={item.id}
          >
            <div className="text-[3rem]">{item.icon}</div>
            <h3 className="text-[1.4rem] font-semibold">{item.head}</h3>
            <p className="text-sm text-center"> {item.desc}</p>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 bg-black text-white border-2 border-black">
        <div className="min-h-[20rem]">
          <img
            src="/property-video-poster.jpg"
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
        <div className="grid p-4 above-480:p-8 lg:!p-12 gap-8">
          <div className="flex flex-col gap-6">
            <h3 className="above-480:text-5xl text-3xl">
              Our Selection of Properties Meets Your Needs
            </h3>
            <p className="text-sm">
              Remarkably appearance get him his projection. Diverted endeavor
              bed peculiar men the not desirous
            </p>
          </div>
          <div className="h-[2px] w-full bg-gray-600" />
          <div className="flex flex-col gap-6">
            <div className="flex gap-1 text-2xl">
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
            </div>
            <p className="text-sm">
              "Son agreed to others Exert period myself few yet nature. Mention
              Mr manners opinion if garrets enabled. To occasional sentiments.
              Do fortune account written prepare invited no passage."
            </p>
            <p className="text-lg">
              <strong>Rated 5/5 </strong>
              <span>- from over 40 reviews</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col gap-4">
        <h2 className="text-[2.8rem] above-480:text-[3.4rem] sm:!text-[3.8rem] lg:!text-[4.4rem]">
          Our professional Agents
        </h2>
        <div className="flex justify-end items-center relative w-full ">
          <div className="h-44 w-44 lg:w-60 lg:h-60 md:h-52 md:w-52 rounded-full text-rotate-block  transition-all cursor-pointer translate-x-0 bg-black text-white flex justify-center items-center">
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
                    <text font-size="10" className="svg-text">
                      <textPath
                        xlinkHref="#circle"
                        className="text-white text-[8px] versailles relative font-thin transition-all duration-500"
                      >
                        View all Agents
                      </textPath>
                    </text>
                    <text font-size="10" className="svg-text text-2">
                      <textPath
                        xlinkHref="#circle"
                        className="text-white text-[8px] versailles relative font-thin transition-all duration-500"
                      >
                        View all Agents
                      </textPath>
                    </text>
                    <text font-size="10" className="svg-text text-3">
                      <textPath
                        xlinkHref="#circle"
                        className="text-white text-[8px] versailles relative font-thin transition-all duration-500"
                      >
                        View all Agents
                      </textPath>
                    </text>
                  </svg>
                </label>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-4 above-480:grid-cols-2 lg:!grid-cols-4 lg:gap-0 lg:pb-40 lg:translate-x-12">
        {_agents.map((agent, i) => (
          <div
            key={agent.id}
            className={`overflow-hidden relative cursor-pointer agent-img 
            hover:z-20
            ${i === 1 && "lg:-translate-x-8 lg:translate-y-24"} 
            ${i === 2 && "lg:-translate-x-16 lg:translate-y-12"} 
            ${i === 3 && "lg:-translate-x-24 lg:translate-y-32"} 
            `}
          >
            <img
              src={agent.img}
              className="w-full h-full object-cover"
              alt=""
            />
            <div className="flex flex-col text-white gap-2 absolute left-0 w-full h-full items-start justify-end p-4 img-bg-cover">
              <p className="font-semibold text-xl">{agent.name}</p>
              <p className="text-lg">{agent.agent_type}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 bg-black text-white p-8 lg:p-12 gap-10">
        <div className="flex flex-col gap-10">
          <h2 className="text-5xl">Want to become a Homez agent?</h2>
          <p className="text-sm">
            Improved own provided blessing may peculiar domestic sight house has
            sex never. No visited raising gravity
          </p>
          <div className="flex justify-start">
            <button className="hover:bg-[#262626] hover:text-white cursor-pointer transition-all bg-white text-black p-3 px-6">
              Join Our Community
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <ul className="list-style-disc grid md:grid-cols-2 gap-4 list-disc pl-4 text-sm">
            <li>Good Reviews By Clients</li>
            <li>Top Property Places</li>
            <li>Clients Love Our Services</li>
            <li>Market-leading research</li>
            <li>Modern City Locations</li>
            <li>Complete 24/7 Security</li>
          </ul>
          <div className="flex justify-start items-center">
            <div className="rounded-full border-2 border-white h-20 w-20 overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="/home/profile-1.jpg"
                alt=""
              />
            </div>
            <div className="rounded-full border-2 border-white h-20 w-20 -translate-x-3 overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="/home/profile-2.jpg"
                alt=""
              />
            </div>
            <div className="rounded-full border-2 border-white h-20 w-20 -translate-x-6 overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="/home/profile-4.jpg"
                alt=""
              />
            </div>
            <div className="rounded-full border-2 border-white h-20 w-20 -translate-x-9 overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="/home/profile-3.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
