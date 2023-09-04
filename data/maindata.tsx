import React from "react";
import {GiDiscGolfBag, GiLuckyFisherman} from "react-icons/gi";
import {IoReceiptOutline} from "react-icons/io5";
import {MdOutlineRealEstateAgent} from "react-icons/md";

export const navData: NavType[] = [
  {
    id: "5Q6PYU",
    head: "Home",
    link: "/",
    state: true,
  },
  {
    id: "0P1AKL",
    head: "About",
    link: "/about",
    state: false,
  },
  {
    id: "1P7PAZ",
    head: "Properties",
    link: "/properties",
    state: false,
  },
  {
    id: "8Z3IVB",
    head: "Contact Us",
    link: "/contact-us",
    state: false,
  },
];

export interface NavType {
  id: string;
  head: string;
  link: string;
  state: boolean;
}
export interface FooterType {
  id: string;
  head: string;
  footerItems: FooterItemsType[];
}

export interface FooterItemsType {
  id: string;
  head: string;
  link: string;
}
export const footer: FooterType[] = [
  {
    id: "P7ZY6U",
    head: "Pages",
    footerItems: [
      {
        id: "Z89XJS",
        head: "Home",
        link: "/",
      },
      {
        id: "Z89LAK",
        head: "Properties",
        link: "/properties",
      },
      {
        id: "Z12UAK",
        head: "Apartments",
        link: "/apartments",
      },
      {
        id: "A02XIS",
        head: "Add Property",
        link: "/add-property",
      },
      {
        id: "P12AJS",
        head: "Agents",
        link: "/agents",
      },
    ],
  },
  {
    id: "L1ZY6U",
    head: "",
    footerItems: [
      {
        id: "Z89XJS",
        head: "About",
        link: "/about",
      },
      {
        id: "Z01XJS",
        head: "Blog",
        link: "/blog",
      },
      {
        id: "Z89LAK",
        head: "Careers",
        link: "/careers",
      },
      {
        id: "Z82XJS",
        head: "Services",
        link: "/services",
      },
      {
        id: "Q91SKS",
        head: "FAQs",
        link: "faqs",
      },
      {
        id: "Z12UAK",
        head: "Contact Us",
        link: "/contact-us",
      },
      {
        id: "A02XIS",
        head: "Coming Soon",
        link: "/coming-soon",
      },
    ],
  },
  {
    id: "L1RT2U",
    head: "Utility Pages",
    footerItems: [
      {
        id: "Z89XJS",
        head: "Style Guide",
        link: "/style-guide",
      },
      {
        id: "Z01XJS",
        head: "Instructions",
        link: "/instructions",
      },
      {
        id: "Z89LAK",
        head: "Licenses",
        link: "/licenses",
      },
      {
        id: "Z82XJS",
        head: "Changelog",
        link: "/changelog",
      },
      {
        id: "Q91SKS",
        head: "Error 404",
        link: "/error-404",
      },
      {
        id: "Z12UAK",
        head: "Password Protected",
        link: "password-protected",
      },
    ],
  },
];

export const _about_ = [
  {
    id: "113DFF",
    icon: <IoReceiptOutline />,
    head: "Tax Advantage",
    desc: "Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct me so.",
  },
  {
    id: "12POS6I",
    icon: <MdOutlineRealEstateAgent />,
    head: "Property Insurance",
    desc: "Departure defective arranging rapturous did believe him all had supported. Family months",
  },
  {
    id: "PA82US",
    icon: <GiDiscGolfBag />,
    head: "Lowest Commission",
    desc: "Timed voice share led him to widen noisy young. At weddings believed laughing.",
  },
  {
    id: "LA810T",
    icon: <GiLuckyFisherman />,
    head: "Experience Agents",
    desc: "Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen",
  },
];

export const _agents = [
  {
    id: "YSU90SI",
    name: "Joan Wallace",
    agent_type: "Selling Agent",
    img: "/img/team-01.jpg",
  },
  {
    id: "YAP90SI",
    name: "Dennis Barrett",
    agent_type: "Buying Agent",
    img: "/img/team-02.jpg",
  },
  {
    id: "YSU12SI",
    name: "Carolyn Ortiz",
    agent_type: "Selling Agent",
    img: "/img/team-03.jpg",
  },
  {
    id: "YAP90PA",
    name: "Larry Lawson",
    agent_type: "Selling Agent",
    img: "/img/team-04.jpg",
  },
];
export const properties = [
  {
    id: "YSU90SI",
    property_name: "Loft in Mid City Paradise",
    property_type: "Resort",
    listing_type: "Sell",
    img: "/home/pr-01.jpg",
    price: 28854,
    location: "Randall mill ave. Mentor, oh 44060",
    sqft: 1455,
    bath: 2,
    bed: 3,
  },
  {
    id: "YAP90SI",
    property_name: "Sinomen Plant Palace",
    property_type: "House",
    listing_type: "Sell",
    img: "/home/pr-02.jpg",
    price: 24458,
    location: "Van buren st quincy, illinois(il), 62301",
    sqft: 925,
    bath: 3,
    bed: 2,
  },
  {
    id: "YSU12SI",
    property_name: "Central House Villa",
    property_type: "Villa",
    listing_type: "Rent",
    img: "/home/pr-03.jpg",
    price: 24458,
    location: "106 Grant Ave. Logansport, IN 46947",
    sqft: 780,
    bath: 2,
    bed: 3,
  },
  {
    id: "YAP90PA",
    property_name: "Elite Garden Residence",
    property_type: "House",
    listing_type: "Sell",
    img: "/home/pr-04.jpg",
    price: 87584,
    location: "Robin Hill Dr Hamilton, Illinois(IL), 62341",
    sqft: 1840,
    bath: 4,
    bed: 5,
  },
  {
    id: "QIY12SI",
    property_name: "Morningstar Avenue Paradise",
    property_type: "Resort",
    listing_type: "Rent",
    img: "/home/pr-05.jpg",
    price: 24458,
    location: "State 270b Wewoka, Oklahoma(OK), 74884",
    sqft: 1000,
    bath: 2,
    bed: 2,
  },
  {
    id: "YAK81PA",
    property_name: "Camico Orchid Coloring",
    property_type: "House",
    listing_type: "Rent",
    img: "/home/pr-06.jpg",
    price: 1050,
    location: "1220C Queen Street West - Toronto, ON",
    sqft: 1650,
    bath: 2,
    bed: 4,
  },
];

export const towns = [
  {
    id: "YSU90SI",
    city: "San Francisco",
    img: "/home/town-1.jpg",
  },
  {
    id: "YAP90SI",
    city: "Los Angeles",
    img: "/home/town-2.jpg",
  },
  {
    id: "YSU12SI",
    city: "New York",
    img: "/home/town-3.jpg",
  },
  {
    id: "YSU12SI",
    city: "Las Vegas",
    img: "/home/town-4.jpg",
  },
  {
    id: "YAP12SI",
    city: "North Justen",
    img: "/home/town-5.jpg",
  },
  {
    id: "YSU10AI",
    city: "Chicago",
    img: "/home/town-6.jpg",
  },
];
export const partners = [
  {
    id: "YSU90SI",
    img: "/partners/client-1.svg",
  },
  {
    id: "YAP90SI",
    img: "/partners/client-2.svg",
  },
  {
    id: "YSU12SI",
    img: "/partners/client-3.svg",
  },
  {
    id: "YZX12SI",
    img: "/partners/client-4.svg",
  },
  {
    id: "YAP12SI",
    img: "/partners/client-5.svg",
  },
  {
    id: "YSU10AI",
    img: "/partners/client-6.svg",
  },
];
