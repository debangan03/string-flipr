import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img from "../Images/img1.jpg";
import Explore from "./Components/Explore";
import Image from "next/image";

const Body = () => {
  return (
    <>
    <div >
      
      <Image src={img}  className="md:h-3/4 sm:h-3/4 -z-30"></Image>
      

      
    </div>
  
    <div className="sm:mt-[26px] md:mt-2">
    <Explore />
  </div>
  </>
  );
};

export default Body;
