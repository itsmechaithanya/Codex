import React, { useEffect, useState } from "react";
import inner from "../assets/inner1.png";
import C1 from "../assets/C1.png";
import C2 from "../assets/C2.png";
import C3 from "../assets/C3.png";
import C4 from "../assets/C4.png";
import C5 from "../assets/C5.png";
import Footer from "./Footer";
import CardSM from "./CardSM";
import Api from "./Api";

function CoreMembers() {
  const { fetchCoreMembers, fetchMembers } = Api();
  const [members, setMembers] = useState([]);
  useEffect(() => {
    const fetchMemberData = async () => {
      try {
        const response = await fetchCoreMembers();
        const data = await response.json();
        setMembers(data?.members);
      } catch (err) {
        message.error("Something went wrong while fetching the data");
      }
    };

    fetchMemberData();
  }, []);
  const linkedIn = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      console.error("No LinkedIn URL provided");
    }
  };
  // Filter members with and without subroles
  const membersWithSubRoles = members.filter((member) => member?.subrole);
  console.log(membersWithSubRoles);
  const membersWithoutSubRoles = members.filter((member) => !member?.subrole);
  return (
    <div className="bg-black text-white w-full overflow-hidden h-fit">
      <div className="h-screen w-full pt-[15vh] pl-[7vw] relative">
        <h1 className="lg:text-[8vw] text-[8vh] font-extrabold lg:h-[45vh] h-[40vh] lg:leading-[7.5vw] leading-[7.5vh] mt-[5vh]">
          Core <br /> Members 
        </h1>
        <p className="font-extralight lg:text-[2vw] text-[2vh] w-[85vw] capitalize absolute z-10">
          Core Members focus on creating impactful university projects and
          advancing their own personal tech projects. They dive deep into
          hands-on experience, developing advanced technical skills,
          problem-solving abilities, and innovation through real-world
          applications. Core Members are encouraged to push boundaries, take on
          challenging tasks, and create impressive portfolio pieces that
          showcase their expertise.
        </p>
        <img
          className=" absolute lg:h-[150vh] object-cover lg:top-[5vh] lg:left-[-35vw] left-[-35vw] top-[40vh] h-[70vh] z-0"
          src={inner}
          alt=""
        />
      </div>
      <div className=" w-screen">
        {membersWithSubRoles &&
          membersWithSubRoles.map((member, index) => (
            <div
              key={member.id}
              className={`flex flex-col-reverse  ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } lg:mt-[4vh]`}
            >
              <div className="lg:h-[79vh]  h-[40vh] lg:w-1/2  lg:pl-[5vw] flex items-center">
                <div className="lg:h-[70vh] lg:w-[30vw] w-[100vw] flex flex-col lg:justify-between lg:pl-[5vw] lg:pb-[3vh] lg:px-[0vw] px-[5vw]">
                  <div className="lg:flex-col flex flex-col justify-center lg:text-left text-center">
                    <h1 className="text-[4vh] lg:text-[4vw] lg:w-1/2 lg:leading-[4vw] leading-[4vh] font-light">
                      {member?.firstName} {member?.lastName}
                    </h1>
                    <h1 className="font-light mt-[1vh] lg:text-[1.3vw] text-[1.8vh]">
                      {member?.title}
                    </h1>
                  </div>
                  <div className="flex justify-center text-center lg:text-left  flex-col lg:items-start items-center">
                    <h1 className="text-[2vh] lg:text-[1.3vw] lg:mt-[0vh] mt-[10vh]">
                      {member?.description}
                    </h1>{" "}
                    <h1
                      onClick={() => linkedIn(member?.linkedIn)}
                      className="bg-white text-black lg:px-[2vw] px-[3vh] lg:py-[1vh] py-[1vh] mr-[1vw] lg:mr-[0vw] rounded-full lg:text-[1.1vw] mt-[2vh] text-[4vw] cursor-pointer"
                    >
                      LinkedIn
                    </h1>
                  </div>
                </div>
              </div>
              <div className=" lg:h-[79vh] h-fit lg:w-1/2  flex items-center justify-center">
                <div className="lg:h-[79vh] w-[90vw]  rounded-[3vh] overflow-hidden h-[55vh] lg:w-[35vw] bg-zinc-800 lg:mb-[13vh]">
                  <img
                    className="h-full w-full object-cover object-bottom"
                    src={`${
                      import.meta.env.REACT_APP_BACKEND_URL +
                      "/" +
                      member?.image
                    }`}
                    alt={member.firstName + " " + member.lastName}
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="w-screen flex justify-between mt-[5vh] px-[7vw] flex-wrap">
        <CardSM Users={membersWithoutSubRoles} />
      </div>
      <Footer />
    </div>
  );
}

export default CoreMembers;
