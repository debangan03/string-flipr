import React, { use } from "react";
import Image from "next/image";
import { useRef } from "react";
import { useState } from "react";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";


import { BsFillCartFill, BsFillCartXFill ,BsClockHistory} from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import {FaCrown} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'

// import logo from "../../Images/LOCOCART.png";
import Link from "next/link";
import logo from '../../Images/Asset1.png'
const Navbar = () => {
  
  const togglecart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <>
      <div className="flex flex-col stic1 z-50 md:flex-row md:justify-start justify-center items-center md:py-4 shadow-md text-center bg-gradient-to-r from-slate-800 to-black">
        <div className="logo mx-5">
          <Link href={"/"} className="cursor-pointer">
            <Image
              width={80}
              height={10}
              className="ml-0"
              src={logo}
              alt="logo"
            ></Image>
          </Link>
        </div>
      
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center px-2 lg:mr-14 ">
        <IoMdNotificationsOutline className='text-2xl font-bolder mx-4 text-white cursor-pointer'/>
      
          <BsClockHistory className='text-xl font-bolder mx-4 text-white cursor-pointer'/>
          <FaCrown className='mx-4 text-xl  text-yellow-400 cursor-pointer'/>
    
          <Link href={"/Login"}>
            {" "}
            <BiUserCircle className="text-xl md:text-2xl  text-white  cursor-pointer mx-4 " />
          </Link>
        <div className="cart absolute right-1 top-5 mx-5 font-semibold text-2xl flex flex-wrap cursor-pointer">
      
         

          <GiHamburgerMenu
            onClick={togglecart}
            className="text-xl md:text-2xl  text-white  cursor-pointer"
          />
        </div>
        </nav>
        <div
          ref={ref}
          className="sidebar w-72 h-full transform transition-transform translate-x-full px-4 py-10 top-0 right-0 absolute z-40 rounded-md bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black"
        >
          <h2 className="font-bold text-xl">Shoping Cart</h2>
          <span
            onClick={togglecart}
            className="absolute top-1 right-2 text-xl cursor-pointer text-white hover:text-red-700 font-semibold"
          >
            <AiFillCloseCircle />
          </span>

          <ol className="list-decimal p-1 ">
            <li >
              <div className="flex my-6 ">
                <div className="w-2/4 mr-10 items-start justify-start">
                  name
                </div>
                <span className="p-1 cursor-pointer text-lg font-bold text-slate-600">
                  <AiOutlineMinusCircle/></span>
                <div className="w-1/5 flex items-center justify-center bg-pink-600 p-[1px] rounded-md ">
                1
                </div>
                <span className="p-1 cursor-pointer text-lg font-bold text-pink-600">
                  <AiOutlinePlusCircle  />
                </span>
              </div>
            </li>
          </ol>
          <div className="flex justify-evenly items-center">
            <button className="flex  mt-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-md">
              <BsFillCartFill className="m-1" />
              Checkout
            </button>
            <button
            //   onClick={clearcart}
              className="flex  mt-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-md"
            >
              <BsFillCartXFill className="m-1" />
              Clear cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
