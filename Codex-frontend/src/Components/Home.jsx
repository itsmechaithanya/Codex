import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import hero from "../assets/hero.png";
import circle from "../assets/CodeXEnd.png";
import "remixicon/fonts/remixicon.css";

import mentor from "../assets/mentor.png";
import Footer from "./Footer";
import { fetchMentors } from "./Api";
import { Button, message } from "antd";
import { Link } from "react-router-dom";

function Home() {
  const [mentors, setMentors] = useState([]);
  useEffect(() => {
    const fetchMentorData = async () => {
      try {
        const response = await fetchMentors();
        const data = await response.json();
        setMentors(data?.mentors);
      } catch (err) {
        message.error("Something went wrong while fetching the data");
      }
    };

    fetchMentorData();
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
      <div className="w-full h-screen relative">
        <div className="absolute z-10 lg:bottom-[10vh] bottom-[20vh] left-[5vw] lg:text-[8vw] text-[7vh] lg:leading-[7.5vw] leading-[7.5vh] font-extrabold">
          Code. <br /> Create. <br /> Collaborate.
        </div>
        <div>
          <img
            className="lg:h-[100vw] h-[100vh] object-cover lg:bottom-[-70vh] bottom-[-10vh] absolute"
            src={hero}
            alt=""
          />
        </div>
        <div className=" absolute top-[20vh] right-[5vw] lg:text-[1.3vw] text-[1.5vh]">
          <p>
            Kickstart Your Coding Journey: <br />
            Collaborate on Real Projects and <br /> Grow with Expert Guidance at{" "}
            <br /> CodeX!
          </p>
        </div>
        <div className=" absolute lg:bottom-[15vh] bottom-[5vh] right-[5vw] lg:text-[1.2vw] text-[2vh] flex items-center">
          Explore more{" "}
          <div className="pt-[.2vh]">
            <i className=" mt-[2vh] ri-arrow-left-down-line ri-2x"></i>
          </div>
        </div>
      </div>
      <div className="w-full h-screen relative">
        <div className="lg:text-[2vw] text-[2vh] absolute z-10 top-[14vh] left-[5vw]">
          {" "}
          <h1 className="lg:w-[60vw] w-[70vw] capitalize font-extralight">
            <span className="lg:text-[2.5vw] text-[2.5vh] font-bold">
              CodeX
            </span>{" "}
            Club at Woxsen University is a student-led organization aimed at
            building tech skills and fostering innovation. It offers a
            collaborative environment where students interested in coding, web
            development, and design come together to work on projects and
            develop new skills. Members participate in workshops, coding
            sessions, and hackathons, allowing them to gain hands-on experience
            in various tech fields.
          </h1>
        </div>
        <div className="lg:text-[2vw] text-[2vh] absolute z-10 bottom-[5vh] right-[5vw]">
          <h1 className="lg:w-[54vw] w-[70vw] text-end capitalize font-extralight">
            The club emphasizes creativity, teamwork, and professional growth,
            helping members expand their technical knowledge and prepare for
            careers in the tech industry. With networking opportunities and
            exposure to real-world projects, CodeX is an ideal community for
            aspiring developers and tech enthusiasts at the university.
          </h1>
        </div>
        <div className=" absolute lg:right-0 lg:bottom-[-50vh] bottom-[-10vh]">
          <img src={circle} alt="" />
        </div>
      </div>
      <div className="w-full h-fit">
        <h1 className="lg:text-[4vw] text-[4vh] font-bold pt-[10vh] pl-[6vw]">
          Meet Your Mentor!
        </h1>
        {mentors &&
          mentors.map((mentor, index) => (
            <div
              key={mentor.id}
              className={`flex flex-col-reverse  ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } lg:mt-[4vh]`}
            >
              <div className="lg:h-[79vh]  h-[40vh] lg:w-1/2  lg:pl-[5vw] flex items-center">
                <div className="lg:h-[70vh] lg:w-[30vw] w-[100vw] flex flex-col lg:justify-between lg:pl-[5vw] lg:pb-[3vh] lg:px-[0vw] px-[5vw]">
                  <div className="lg:flex-col flex flex-col justify-center lg:text-left text-center">
                    <h1 className="text-[4vh] lg:text-[4vw] lg:w-1/2 lg:leading-[4vw] leading-[4vh] font-light">
                      {mentor?.firstName} {mentor?.lastName}
                    </h1>
                    <h1 className="font-light mt-[1vh] lg:text-[1.3vw] text-[1.8vh]">
                      {mentor?.title}
                    </h1>
                  </div>
                  <div className="flex justify-center text-center lg:text-left  flex-col lg:items-start items-center">
                    <h1 className="text-[2vh] lg:text-[1.3vw] lg:mt-[0vh] mt-[10vh]">
                      {mentor?.description}
                    </h1>{" "}
                    <h1
                      onClick={() => linkedIn(mentor?.linkedIn)}
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
                      mentor?.image
                    }`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className=" w-full mt-[10vh] lg:mt-[15vh]">
        <h1 className="lg:text-[4vw] text-[4vh] font-bold pt-[10vh] pl-[6vw] capitalize">
          everything you need !
        </h1>
        <div className="mt-[8vh] flex flex-col justify-center items-center">
          <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center w-[80vw] h-[11vh] lg:h-[10vh]">
            <h1 className="font-semibold text-[2.7vh] lg:text-[2.2vw]">
              Front-End Development
            </h1>
            <h1 className="text-[#C5C5C5] text-[1.5vh] lg:text-[1.1vw]">
              React JS, HTML, CSS, JavaScript
            </h1>
          </div>
          <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center w-[80vw] h-[11vh] lg:h-[10vh]">
            <h1 className="font-semibold text-[2.7vh] lg:text-[2.2vw]">
              Back-End Development
            </h1>
            <h1 className="text-[#C5C5C5] text-[1.5vh] lg:text-[1.1vw]">
              MongoDB, Node.js, Express
            </h1>
          </div>
          <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center w-[80vw] h-[11vh] lg:h-[10vh]">
            <h1 className="font-semibold text-[2.7vh] lg:text-[2.2vw]">
              Machine Learning
            </h1>
            <h1 className="text-[#C5C5C5] text-[1.5vh] lg:text-[1.1vw]">
              Python, Scikit-Learn, TensorFlow
            </h1>
          </div>
          <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center w-[80vw] h-[11vh] lg:h-[10vh]">
            <h1 className="font-semibold text-[2.7vh] lg:text-[2.2vw]">
              Deep Learning
            </h1>
            <h1 className="text-[#C5C5C5] text-[1.5vh] lg:text-[1.1vw]">
              PyTorch, Keras, TensorFlow
            </h1>
          </div>
          <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center w-[80vw] h-[11vh] lg:h-[10vh]">
            <h1 className="font-semibold text-[2.7vh] lg:text-[2.2vw]">
              Generative AI
            </h1>
            <h1 className="text-[#C5C5C5] text-[1.5vh] lg:text-[1.1vw]">
              DALL-E, GPT Models, GANs
            </h1>
          </div>
          <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center w-[80vw] h-[11vh] lg:h-[10vh]">
            <h1 className="font-semibold text-[2.7vh] lg:text-[2.2vw]">
              Data Analysis
            </h1>
            <h1 className="text-[#C5C5C5] text-[1.5vh] lg:text-[1.1vw]">
              Pandas, NumPy, Tableau
            </h1>
          </div>
          <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center w-[80vw] h-[11vh] lg:h-[10vh]">
            <h1 className="font-semibold text-[2.7vh] lg:text-[2.2vw]">LLMs</h1>
            <h1 className="text-[#C5C5C5] text-[1.5vh] lg:text-[1.1vw]">
              GPT, BERT, Transformer Models
            </h1>
          </div>
          <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center w-[80vw] h-[11vh] lg:h-[10vh]">
            <h1 className="font-semibold text-[2.7vh] lg:text-[2.2vw]">
              Web Scraping
            </h1>
            <h1 className="text-[#C5C5C5] text-[1.5vh] lg:text-[1.1vw]">
              BeautifulSoup, Scrapy, Selenium
            </h1>
          </div>
          <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center w-[80vw] h-[11vh] lg:h-[10vh]">
            <h1 className="font-semibold text-[2.7vh] lg:text-[2.2vw]">
              Cyber Security
            </h1>
            <h1 className="text-[#C5C5C5] text-[1.5vh] lg:text-[1.1vw]">
              Network Security, Cryptography
            </h1>
          </div>
          <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center w-[80vw] h-[11vh] lg:h-[10vh]">
            <h1 className="font-semibold text-[2.7vh] lg:text-[2.2vw]">
              Ethical Hacking
            </h1>
            <h1 className="text-[#C5C5C5] text-[1.5vh] lg:text-[1.1vw]">
              Kali Linux, Metasploit, Wireshark
            </h1>
          </div>
          <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center w-[80vw] h-[11vh] lg:h-[10vh]">
            <h1 className="font-semibold text-[2.7vh] lg:text-[2.2vw]">
              Computer Vision
            </h1>
            <h1 className="text-[#C5C5C5] text-[1.5vh] lg:text-[1.1vw]">
              OpenCV, YOLO, ResNet
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <div className="text-[2vh] lg:text-[2vw] flex mt-[15vh] justify-center">
          {" "}
          <h1 className="lg:w-[72vw] w-[80vw] capitalize font-extralight">
            By joining the CodeX Club, you'll have the opportunity to learn all
            of these skills directly from experts within our community. Engage
            in real-world projects and gain practical experience while
            collaborating closely with peers through our peer-to-peer learning
            approach. This hands-on experience will help you build and refine
            your skills in a supportive and interactive environment.
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
