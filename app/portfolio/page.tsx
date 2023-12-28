import React from "react";

const PortfolioPage = () => {
  return (
    <>
      <div className=" flex flex-col items-center w-full pt-10">
        <p className=" max-w-screen-xl justify-self-center text-3xl text-white font-bold">
          Some Glimpses of our work
        </p>
        <div className=" flex flex-col md:flex-row pt-10">
          <div className="window">
            <img src="/topbar.svg" alt="null" className="topbar" />
            <div className="webstie-content">
              <embed
                type="text/html"
                src="http://krunker.io"
                width="500"
                height="200"
                className="w-full h-full" 
              />
            </div>
            <img src="/bottombar.svg" alt="null" className="bottombar" />
          </div>
          <div className="desc">
            <div className="desc-content pl-10">
              <p className="text-2xl font-bold text-white">Krunker.io</p>
              <p className="text-white pt-10">
                A multiplayer FPS game with a wide variety of game modes and
                maps.
              </p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row pt-10">
          <div className="window">
            <img src="/topbar.svg" alt="null" className="topbar" />
            <div className="webstie-content">
              <embed
                type="text/html"
                src="http://krunker.io"
                width="500"
                height="200"                                   
                className="w-full h-full" 
              />
            </div>
            <img src="/bottombar.svg" alt="null" className="bottombar" />
          </div>
          <div className="desc">
            <div className="desc-content pl-10">
              <p className="text-2xl font-bold text-white">Krunker.io</p>
              <p className="text-white pt-10">
                A multiplayer FPS game with a wide variety of game modes and
                maps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
