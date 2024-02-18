import React from "react";

const teamMembers = [
  { name: "Swapneel", role: "CEO", image: "/sw.jpeg" },
  { name: "Avijith", role: "Front End", image: "/avi (2).jpeg" },
  { name: "Srachet", role: "CTO", image: "/SR.jpeg" },
  { name: "Yash", role: "Design", image: "/YASH.jpeg" },
  { name: "Jaggadeesh", role: "Back End", image: "/JG.jpeg" },
];

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center w-full pt-10">
      <p className="max-w-screen-xl justify-self-center text-3xl text-white font-bold">
        About Us
      </p>

      {teamMembers.map((member, index) => (
        <div className="flex flex-col md:flex-row pt-10" key={index}>
          <div className="window">
            <img src={member.image} width={200} height={100} />
            <div className="website-content">
              <p className="text-2xl font-bold text-white" style={{ paddingLeft: '5px' }}>
                {member.name}
              </p>
              <p className="text-white pt-10" style={{ paddingLeft: '5px' }}>
                {member.role}
              </p>
            </div>
            <img src="/bottombar.svg" alt="null" className="bottombar" width={200} />
          </div>

          <div className="desc">
            <div className="desc-content pl-10">
              <p className="flex flex-col items-center text-white pt-15 text-xl">
                {member.name} is the driving force behind Web Chips.
                He is known for his collaborative leadership style, <br />
                fostering a culture of innovation and creativity within our team.
                He believes in thorough planning ,<br />
                which drives every decision and action at Web Chips..
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutPage;
