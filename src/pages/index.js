import Image from "next/image";
import { Inter } from "next/font/google";
import Body from "./Body";
import Navbar from "./Components/Navbar";
import Explore from "./Components/Explore";
import Artist from "./Components/Artist";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Body/>
    </>
  );
}
