"use client";
import Image from "next/image";
import "./globals.css";
import { Blobs } from "@/components/ui/blobs";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const page = () => {
  return (
    <>
      <div className="flex flex-row  h-32 md:h-64" />
      <div className="flex flex-row w-full ">
        <div className="flex flex-row w-2/5" />

        <div className="flex flex-col w-1/2 ">

          <div className= 'flex flex-col font-bold md:text-3xl text-white text-sm'>
            Empower Your Business with a Digital Presence that Scales
          </div>
          <div className="flex flex-row text-md md:text-2xl text-white pr-16">
           <p>
             We specialize in crafting dynamic websites that fuel your growth journey and help you to gain a wider audience
             <span className="inline-block  pl-3">
                <img src="/right-icon.svg" width={30} height={30} alt="Right Icon" />
              </span>
              
             </p>
            
          </div>
        </div>
      </div>
      <Blobs />

    </>
  );
};

export default page;
