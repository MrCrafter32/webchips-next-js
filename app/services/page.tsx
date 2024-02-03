import WebDev from "@/components/ui/service_cards/webdev";
import React from "react";

const services = () => {
  return (
    <div>
        <div className="flex flex-col justify-center items-center pt-6 ">
            <h1 className="text-3xl font-bold text-white">Check out our services</h1><br/>
            <p className="text-white">Explore our different services that are tailor made for your use</p>
            <p className="text-white">to help boost your business.</p>
            <div className="flex flex-row justify-center items-center pt-6">
              <WebDev/>
           </div>
        </div>
    </div>
  )

};

export default services;
