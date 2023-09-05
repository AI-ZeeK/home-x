import React from "react";
import {FaFacebook} from "react-icons/fa";
import {BsPinterest, BsTwitter} from "react-icons/bs";
import {FiInstagram} from "react-icons/fi";
import Link from "next/link";
import {footer} from "@/data/maindata";
import {usePathname} from "next/navigation";

type Props = {};

const SubFooter = (props: Props) => {
  const pathname = usePathname();

  return (
    <div className="pt-8 pb-10 grid lg:grid-cols-[2fr_3.5fr] gap-8 lg:gap-16">
      <div className="flex flex-col gap-8">
        <div className="h-10 w-40">
          <img
            className="object-contain h-full w-full"
            src="/homez-logo-light.svg"
            alt=""
          />
        </div>
        <p>
          Fulfilled direction use continual set him propriety continued. Saw met
          applauded favorite deficient engrossed concealed and her. Concluded
          boy perpetual old supposing. Farther related bed and passage comfort
          civilly.
        </p>
        <div className="flex gap-4 text-[1.6rem] md:text-[2rem]">
          <div className="text-white">
            <FaFacebook />
          </div>
          <div className="text-white">
            <FiInstagram />
          </div>
          <div className="text-white">
            <BsPinterest />
          </div>
          <div className="text-white">
            <BsTwitter />
          </div>
        </div>
        <div>
          <p>
            Designed by{" "}
            <Link href={``} className="underline">
              Webestica
            </Link>
            , Powered by{" "}
            <Link href={``} className="underline">
              Webflow
            </Link>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:flex lg:gap-8">
        {footer.map((footerItem) => (
          <div key={footerItem.id} className="flex flex-col gap-4">
            <h1 className="text-2xl h-full sm:h-12 flex justify-start whitespace-nowrap items-center">
              {footerItem.head}
            </h1>
            <ul className="flex flex-col justify-center items-start gap-2">
              {footerItem.footerItems.map((item) => (
                <li
                  key={item.id}
                  className={`${
                    pathname === item.link ? "text-gray-400" : "text-white"
                  } hover:text-gray-300`}
                >
                  <Link href={item.link} className="whitespace-nowrap">
                    {" "}
                    {item.head}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl h-full sm:h-12 flex justify-start items-center">
            Subscribe to our newsletter
          </h1>
          <p>
            Meant balls it if up doubt small purse. Required his you put the
            outlived answered position.
          </p>
          <div className="border-2 border-white grid above-480:grid-cols-[2.5fr_1fr]  items-center">
            <input
              className="bg-black text-white py-3 px-2 outline-none"
              type="text"
              placeholder="your email"
            />
            <button className="bg-white text-black py-3 w-full px-3">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
