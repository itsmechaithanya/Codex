import React, { useEffect, useState } from "react";
import inner from "../assets/inner1.png";
import Footer from "./Footer";
import CardSM from "./CardSM";
import Api from "./Api";

function ExecutiveMembers({ users = [] }) {
  const { fetchExecutiveMembers } = Api();
  const [members, setMembers] = useState([]);
  useEffect(() => {
    const fetchMemberData = async () => {
      try {
        const response = await fetchExecutiveMembers();
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
  return (
    <div className="bg-black text-white w-full overflow-hidden h-fit">
      <div className="h-screen w-full pt-[15vh] pl-[7vw] relative">
        <h1 className="lg:text-[8vw] text-[8vh] font-extrabold lg:h-[45vh] h-[40vh] lg:leading-[7.5vw] leading-[7.5vh] mt-[5vh] ">
          Executive <br /> Members
        </h1>
        <p className="font-extralight lg:text-[2vw] text-[2vh] w-[85vw] capitalize absolute z-10">
          Executive Members focus on organizing events, workshops, and
          collaborative learning sessions, building a solid foundation in
          various tech domains. This group is perfect for those who are new to
          tech or seeking to strengthen their basics within a supportive,
          team-oriented environment. Through learning from scratch and actively
          participating in events, Executive Members gain confidence, practical
          knowledge, and valuable teamwork experience.
        </p>
        <img
          className=" absolute lg:h-[150vh] object-cover lg:top-[5vh] lg:left-[-35vw] left-[-35vw] top-[40vh] h-[70vh] z-0"
          src={inner}
          alt=""
        />
      </div>
      <div className="w-screen px-[7vw] mt-[10vh] flex flex-wrap items-center justify-between">
        {members.map((member, index) => (
          <div key={index} className="mt-[4vh]">
            <div className="lg:h-[65vh] h-[50vh] w-[42vw] lg:w-[24vw] bg-rd-500 flex flex-col items-center lg:py-[3vh] py-[2vh]">
              <div className="h-[40vh] w-[40vw] lg:h-[40vh] lg:w-[20vw] bg-zinc-800 overflow-hidden rounded-[1vw]">
                <img
                  className="h-full w-full object-cover object-bottom"
                  src={`${
                    import.meta.env.REACT_APP_BACKEND_URL + "/" + member?.image
                  }`} // Use custom image if provided, otherwise default
                  alt={member.firstName + " " + member.lastName}
                />
              </div>
              <div>
                <h1 className="text-[2vh] lg:text-[1.8vw] mt-[2vh]">
                  {member.firstname} {member.lastName}
                </h1>
              </div>
              <div className="text-center">
                <h1 className="text-[1.4vh] lg:text-[1.4vw] mt-[2vh] font-light">
                  {member.description}
                </h1>
              </div>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="bg-white text-black lg:px-[2vw] px-[3vh] lg:py-[1vh] py-[1vh] mr-[1vw] lg:mr-[0vw] rounded-full lg:text-[1.1vw] mt-[2vh] text-[4vw]">
                  LinkedIn
                </h1>
              </a>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default ExecutiveMembers;
