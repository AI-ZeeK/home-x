"use client";
import TextInput from "@/components/Input/Input";
import Link from "next/link";
import React from "react";

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <div className="flex p-4 pt-8 pb-14 lg:pb-20 lg:pt-14 lg:p-8 flex-col gap-8">
      <div className="font-semibold px-2 p-12 lg:!py-16">
        <h1 className="text-[3rem] above-480:text-[3.8rem] sm:!text-[4.4rem] lg:!text-[5.5rem] text-center">
          Contact Us
        </h1>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr] gap-2 border-2 bg-black text-white border-black ">
        <div className="py-8 p-4 md:p-8 md:py-12 flex flex-col gap-8 ">
          <h2 className="text-5xl">Get In Touch</h2>
          <div className="flex flex-col gap-2">
            <h5 className="text-2xl font-semibold">Location</h5>
            <p className="text-sm">Chicago HQ Estica Cop. Macomb, MI 48042</p>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="text-2xl font-semibold">Email</h5>
            <Link href="mailto:122" className="underline">
              example@gmail.com
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="text-2xl font-semibold">Phone</h5>
            <Link href="tel:+1455578996" className="underline">
              +1 (455) 578 996
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center overflow-hidden w-full h-[26rem] sm:h-[100%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317716.6064841031!2d-0.4312470053939443!3d51.5286070085584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sng!4v1693716917304!5m2!1sen!2sng"
            width="600"
            height="450"
            className="h-full w-full"
            style={{border: 0}}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 ">
          <h2 className="above-480:text-4xl  text-2xl">Write a Message</h2>
        </div>
        <div className="grid grid-cols-1 above-480:grid-cols-2 gap-4 lg:gap-8">
          <TextInput label="Name" placeholder="Name" />
          <TextInput label="Email" placeholder="Email" />
          <TextInput
            label="Phone Number"
            placeholder="Phone Number"
            type="tel"
          />
          <TextInput label="Subject" placeholder="Subject" />

          <div className="flex flex-col gap-1 col-span-2 ">
            <label className="text-gray-700">Message</label>
            <textarea
              rows={6}
              cols={10}
              placeholder="Message"
              className="outline-none py-3 px-4 text-lg border-2 border-black focus-within:border-gray-500 transition-all"
            />
          </div>
        </div>
        <div className="flex justify-start items-center">
          <button className="p-3 px-6 bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-all font-semibold">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
