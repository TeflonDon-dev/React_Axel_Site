import React from "react";
import { Switch } from "@material-tailwind/react";
import headerImg from "../../assets/images/headerImage.png";
const Header = () => {
  return (
    <div className=" mx-auto pt-16">
      <div className=" grid grid-cols-2 justify-items-center items-center">
        <div className=" w-4/5 pl-24">
          <Switch />
          <h1 className=" text-5xl font-russoOne font-medium no-underline align-middle tracking-wide leading-normal text-dark normal-case  ">
            Axel Brand new{" "}
            <span className=" text-dark text-6xl font-petitformal font-bold">
              Furniture
            </span>{" "}
            mobile App
          </h1>
          <div className=" mt-4">
            <p className=" w-4/5 font-inter font-medium no-underline align-middle tracking-wide normal-case text-dark">
              Giving your home a proper makeover never was this easy. Modern and
              stylish furniture for decent prices. Take a look of what we offer
              with a simple bottom click.
            </p>
          </div>
          <div className="pb-20">
            <button className=" mt-4 pushable">
              <span className=" front">Start now</span>
            </button>
          </div>
        </div>
        <div className=" mt-4">
          <div>
            <h2 className="text-5xl pb-4  font-russoOne font-medium no-underline align-middle tracking-wide leading-normal text-dark normal-case ">
              Modern Design
            </h2>
          </div>
          <img
            src={headerImg}
            alt="header-image"
            className=" h-[765px] w-full bg-no-repeat bg-center relative  z-10 header rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
