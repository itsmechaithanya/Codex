import React, { useEffect, useState } from "react";
import inner from "../assets/inner1.png";
import Footer from "./Footer";
import e1 from "../assets/e1.png";
import e2 from "../assets/e2.png";
import Api from "./Api";
import { message } from "antd";

function Events() {
  const { fetchEvents } = Api();
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const fetchAllEvents = async () => {
      try {
        const response = await fetchEvents();
        const data = await response.json();
        const sortedEvents = data?.events?.sort((a, b) => new Date(b.date) - new Date(a.date));
        setEvents(sortedEvents);
      } catch (err) {
        message.error("Something went wrong while fetching the data");
      }
    };

    fetchAllEvents();
  }, []);
  // Function to format the date
  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };
  return (
    <div className="bg-black text-white w-full overflow-hidden h-fit">
      <div className="h-screen w-full pt-[15vh] pl-[7vw] relative">
        <h1 className="lg:text-[8vw] text-[8vh] font-extrabold lg:h-[50vh] h-[50vh] mt-[1vh]">
          Events
        </h1>
        <p className="font-extralight lg:text-[2vw] text-[2vh] w-[85vw] capitalize absolute z-10">
          From workshops and hackathons to tech talks and collaborative
          sessions, each event is entirely student-led, giving members valuable
          hands-on experience in planning and execution. This approach reflects
          the club's commitment to fostering a dynamic learning environment
          through engaging, member-driven activities.
        </p>
        <img
          className=" absolute lg:h-[150vh] object-cover lg:top-[5vh] lg:left-[-35vw] left-[-35vw] top-[40vh] h-[70vh] z-0"
          src={inner}
          alt=""
        />
      </div>
      {events.map((event, index) => {
        if (event.type === "portrait") {
          return (
            <div
              key={event.id}
              className={`h-fit lg:h-screen flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse lg:ml-[-10vw]"
              } justify-center items-center lg:px-[12vw]`}
            >
              <div className="lg:h-[80vh] lg:w-[33vw] w-[90vw] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={`${import.meta.env.REACT_APP_BACKEND_URL}/${
                    event.image
                  }`}
                  alt={event.title}
                />
              </div>
              <div className="lg:h-[80vh] h-[13vh] lg:w-[33vw] w-[90vw] lg:ml-[10vw] flex flex-col justify-between lg:py-[5vh] lg:mt-[5vh] mt-[2vh] mb-[10vh] text-center lg:text-left">
                <div>
                  <h1 className="text-[3vh] lg:text-[3vw] capitalize font-medium">
                    {event.title}
                  </h1>
                  <h1 className="text-[1.4vh] lg:text-[1.4vw] capitalize lg:w-2/3 lg:mt-[2vh] font-light">
                    {event.description}
                  </h1>
                </div>
                <div>
                  <h1 className="text-[1.3vh] lg:text-[1.3vw]">
                    {formatDate(event.date)}
                  </h1>
                </div>
              </div>
            </div>
          );
        } else if (event.type === "landscape") {
          return (
            <div className="lg:w-[76vw] w-[95vw] lg:h-[90vh] lg:mx-[12vw] mx-[2.5vw] mt-[5vh] lg:mb-[20vh] mb-[20vh] ">
              <div className="flex flex-col items-center lg:items-start">
                <h1 className="text-[3vh] lg:text-[3vw] capitalize font-medium">
                  {event.title}
                </h1>
                <h1 className="text-[1.3vh] lg:text-[1.3vw]">
                  {formatDate(event.date)}
                </h1>
              </div>
              <div className="w-full mt-[5vh]">
                <img
                  className="w-full"
                  src={`${
                    import.meta.env.REACT_APP_BACKEND_URL + "/" + event.image
                  }`}
                  alt={event.image}
                />
              </div>
            </div>
          );
        }
      })}

      <Footer />
    </div>
  );
}

export default Events;
