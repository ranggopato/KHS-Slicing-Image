import React from "react";
import Image from "next/image";
import { careeractivity } from "./Data";
import Dropdown from "./Dropdown";
import Link from "next/link";

import { careers } from "./Data";
import {
  BsLightbulbFill,
  BsLightningChargeFill,
  BsGearFill,
} from "react-icons/bs";

const Career = () => {
  return (
    <div className="mt-[80px] ">
      <div className="flex flex-col lg:grid lg:grid-cols-2 md:py-[43px]  px-[20px] md:px-[120px] ">
        {/* halfimage */}
        <div className="order-last lg:order-first grid grid-cols-2 gap-y-4 gap-x-4 items-center justify-items-center pr-[10%] pl-[10%] lg:pr-[20%] lg:pl-0">
          <Image
            className="col-span-2 rounded-lg lg:rounded-[20px]"
            width="800"
            height="600"
            src="/careerimage1.png"
            alt=""
            priority="false"
          />
          <Image
            className="col-span-1 rounded-lg lg:rounded-[20px]"
            width="600"
            height="300"
            src="/careerimage2.png"
            alt=""
          />
          <Image
            className="col-span-1 rounded-lg lg:rounded-[20px]"
            width="600"
            height="300"
            src="/careerimage3.png"
            alt=""
          />
        </div>
        <div className="flex flex-col space-y-4 justify-center">
          <h2 className="text-blue text-[20px] leading-[28px] font-[600] font-inter ">
            Career
          </h2>
          <h1 className="text-blacky text-sedangmobile md:text-sedang2 font-quicksand">
            Life at KHS
          </h1>
          <p className="text-grey text-kecilmobile md:text-kecil font-inter  ">
            At Kreasi Handal Selaras, we are working hard to reach our goals and
            enjoying every challenge and having fun while doing it. We hire
            talents who have a passion for creating new solutions and next-gen
            technology to help businesses and people.
          </p>
          <div className="grid md:flex pb-8">
            <button className=" text-white font-bold bg-sky-700 rounded-lg tracking-wide text-sm md:text-xl font-quicksand py-3 px-5">
              See Opportunity
            </button>
          </div>
        </div>
      </div>
      {/* page 2 */}
      <div className="flex flex-col space-y-12 md:space-y-20 px-[20px] md:px-[120px] text-black">
        {/* subpage 1 */}
        <div className="flex  md:w-1/2 flex-col space-y-2 md:space-y-6 col-span-1 mx-3">
          <h1 className="text-blacky text-sedangmobile md:text-sedang2 font-quicksand pt-8">
            Our Value
          </h1>
          <p className="text-grey text-kecilmobile md:text-kecil font-inter ">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet
            consectetur adipiscing elit sed do eiusmod tempor incididunt ut
            labore et
          </p>
        </div>
        {/* subpage 2 */}
        <div className="flex flex-col lg:grid lg:grid-cols-3  gap-8">
          <div className=" bg-white  flex lg:grid  rounded-[1rem] shadow-2xl p-[4%]">
            <BsLightningChargeFill className="text-[40px] md:text-[50px] font-bold text-sky-700 p-2 " />
            <div>
              <div className="text-2xl font-semibold text-slate-900">
                Fast and Accurate
              </div>

              <div className="text-grey text-kecilmobile md:text-kecil font-inter">
                <ul className="list-disc px-[5%]">
                  <li>Moving in high speed while keeping excellence.</li>
                  <li>Handling issues effectively and efficiently.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" bg-white  flex lg:grid  rounded-[1rem] shadow-2xl p-[4%]">
            <BsLightbulbFill className="text-[40px] md:text-[50px] font-bold text-sky-700 p-2 " />
            <div>
              <div className="text-2xl font-semibold text-slate-900">
                Inspire
              </div>

              <div className="text-grey text-kecilmobile md:text-kecil font-inter">
                <ul className="list-disc px-[5%]">
                  <li>Moving in high speed while keeping excellence.</li>
                  <li>Handling issues effectively and efficiently.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" bg-white  flex lg:grid  rounded-[1rem] shadow-2xl p-[4%]">
            <BsGearFill className="text-[40px] md:text-[50px] font-bold text-sky-700 p-2 " />
            <div>
              <div className="text-2xl font-semibold text-slate-900">
                Responsive
              </div>

              <div className="text-grey text-kecilmobile md:text-kecil font-inter">
                <ul className="list-disc px-[5%]">
                  <li>Moving in high speed while keeping excellence.</li>
                  <li>Handling issues effectively and efficiently.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* subpage 3 */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-3">
          <div className="relative w-[100%] h-[100%]">
            <Image
              className=" "
              width="800"
              height="300"
              src="/careerimageactivity1.png"
              alt=""
              layout="intrinsic"
            />
            <p className="absolute w-[90%] lg:w-[70%] pt-3 bottom-0   text-grey text-kecilmobile md:text-kecil font-inter bg-white ">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmo
            </p>
          </div>

          <div className="hidden lg:flex flex-col gap-3">
            <div className="relative w-[100%] h-[100%]">
              <Image
                className=" "
                width="800"
                height="300"
                src="/careerimageactivity2.png"
                alt=""
                layout="intrinsic"
              />
              <p className="absolute w-[70%] pt-3 bottom-0   text-grey text-kecilmobile md:text-kecil font-inter bg-white  ">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmo
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative w-[100%] h-[100%]">
                <Image
                  className=" "
                  width="800"
                  height="300"
                  src="/careerimageactivity3.png"
                  alt=""
                  layout="intrinsic"
                />
                <p className="absolute w-[90%] pt-3 bottom-0   text-grey text-kecilmobile md:text-kecil font-inter bg-white  ">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                </p>
              </div>
              <div className="relative w-[100%] h-[100%]">
                <Image
                  className=" "
                  width="800"
                  height="300"
                  src="/careerimageactivity4.png"
                  alt=""
                  layout="intrinsic"
                />
                <p className="absolute w-[90%] pt-3 bottom-0   text-grey text-kecilmobile md:text-kecil font-inter bg-white  ">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                </p>
              </div>
            </div>
          </div>
          <div className="pt-8  flex flex-col lg:hidden space-y-8 ">
            {careeractivity.map(({ activity, text, key }) => {
              return (
                <div
                  className="grid  content-center grid-cols-5 gap-4"
                  key={key}
                >
                  <Image
                    className=" col-span-2"
                    width="800"
                    height="900"
                    src={activity}
                    alt=""
                    layout="responsive"
                  />
                  <div className="col-span-3  flex justify-center items-center text-grey text-kecilmobile md:text-kecil font-inter bg-white ">
                    <p className="">{text}</p>
                  </div>
                </div>
              );
            })}{" "}
          </div>
        </div>
        <div className="flex flex-col space-y-4 ">
          <div className="text-blacky text-sedangmobile md:text-sedang2 font-quicksand">
            Join with Us
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-5 gap-8">
            <form className="col-span-4">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
              >
                Search
              </label>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block p-4 pl-10 w-full text-kecil bg-gray-50 rounded-lg border border-gray-300 font-quicksand"
                  placeholder="Search available position"
                  required
                />
                {/* <button
                  type="submit"
                  className="text-grey font-quicksand absolute right-2.5 bottom-2.5 bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button> */}
              </div>
            </form>
            <div className="col-span-1 px-[5%] lg:px-[20%] w-full text-xl text-slate-900 bg-gray-50 rounded-lg border border-gray-300  ">
              <Dropdown
                className="relative"
                title="-- Pilih Divisi --"
                texts={[
                  "Field Engineer",
                  "Management Trainee",
                  "Civil Engineer",
                ]}
              />
            </div>
          </div>
          <div className="flex flex-col  lg:grid lg:grid-cols-3 gap-2 lg:gap-12  pb-20">
            {careers.map(({ id, image, title, text, text2 }) => {
              return (
                <div
                  key={id}
                  className=" grid grid-cols-6 gap-4 lg:flex lg:flex-col justify-items-center content-center  rounded-[1rem] bg-white shadow-2xl px-[5%] py-[5%]"
                >
                  <div className="col-span-2  grid lg:px-10 content-center ">
                    <Image
                      layout=""
                      src={image}
                      alt={title}
                      width="500"
                      height="800"
                    />
                  </div>

                  <div className="col-span-4  flex flex-col justify-center space-y-[8px]">
                    <p className="text-blacky font-inter text-[16px] leading-[19px] md:text-[20px] md:leading-[24px] font-[600]">
                      {title}
                    </p>
                    <p className="text-grey text-kecilmobile md:text-kecil">
                      {text}
                    </p>
                    <p className="text-grey text-kecilmobile md:text-kecil">
                      {text2}
                    </p>
                    <Link href={`/career`} className="flex justify-between">
                      <p className="w-full text-[16px] leading-[24px] font-inter lg:p-5 text-center font-bold text-blue  bg-white rounded-lg  border-[2px] border-blue">
                        View Details
                      </p>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
