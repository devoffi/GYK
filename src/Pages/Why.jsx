import React, { useState } from "react";
import { SectionContainer } from "../components/common/SectionContainer";
import Collapsible from "react-collapsible";
import {
  FaChevronDown,
  FaChevronUp,
  FaShield,
  FaShieldHalved,
} from "react-icons/fa6";
import Testimonial from "../components/Testimonial";
import CreateAccount from "../components/CreateAccount";

function Why() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionToggle = (index) => {
    // Toggle the clicked accordion open/closed
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const data = [
    {
      title: "Online predators",
      des: "50% of online exploitation victims are between the ages of 12 and 15. Qustodios advice articles help you talk to your children about how to spot and avoid data thieves, groomers, sexual predators, and stalkers.",
    },
    {
      title: "Mental health issues",
      des: "Severe depression has increased 58% since 2010, coinciding with an increase in cell phone ownership. Qustodio can help you limit the amount of time your child spends in front of screens.",
    },
    {
      title: "Sleep problems",
      des: "73% of high school students dont get enough sleep. This can lead to difficulty learning, poor moods, and interpersonal conflicts. Use Qustodio to set downtimes before bed, so your kids can avoid sleep-disrupting blue light.",
    },
    {
      title: "Cyberbullying",
      des: "33% of kids have experienced cyberbullying. Use Qustodio to monitor texts so you can catch and block bullies.",
    },
    {
      title: "Online predators",
      des: "50% of online exploitation victims are between the ages of 12 and 15. Qustodios advice articles help you talk to your children about how to spot and avoid data thieves, groomers, sexual predators, and stalkers.",
    },
    {
      title: "Online predators",
      des: "50% of online exploitation victims are between the ages of 12 and 15. Qustodios advice articles help you talk to your children about how to spot and avoid data thieves, groomers, sexual predators, and stalkers.",
    },
    {
      title: "Online predators",
      des: "50% of online exploitation victims are between the ages of 12 and 15. Qustodios advice articles help you talk to your children about how to spot and avoid data thieves, groomers, sexual predators, and stalkers.",
    },
    {
      title: "Online predators",
      des: "50% of online exploitation victims are between the ages of 12 and 15. Qustodios advice articles help you talk to your children about how to spot and avoid data thieves, groomers, sexual predators, and stalkers.",
    },
  ];
  return (
    <SectionContainer>
      <p className="text-xl lg:text-5xl font-bold lg:w-[40%] w-[90%] mx-auto text-center lg:pt-20 pt-5">
        We keep your childs digital activity balanced and safe
      </p>
      <p className="text-center mt-10 w-[80%] mx-auto text-md lg:text-xl">
        Screens are here to stay. With children using{" "}
        <strong>devices at increasingly younger ages</strong>, having the{" "}
        <strong>right tools to help your kids</strong> develop healthy digital
        habits is <strong>more important than ever.</strong>
      </p>

      <div className="flex flex-col lg:flex-row w-[60%] mx-auto gap-10 mt-20 justify-center items-center">
        <div>
          <p className="text-xl lg:text-3xl font-bold">
            The first <strong className="text-blue-600">fully digital</strong>{" "}
            generation
          </p>
          <p className="mt-3 lg:mt-8 text-lg lg:text-xl">
            The percentage of kids who have their own smartphones is on the
            rise.
          </p>
          <p className="mt-2 lg:mt-5 text-gray-400">
            Source: Stanford Medicine, 2022
          </p>
        </div>
        <div>
          <img src="https://static.qustodio.com/public-site/uploads/2023/11/23090422/firsgeneration-desktop%402x.png" />
        </div>
      </div>

      <p className="text-xl lg:text-3xl font-bold lg:w-[60%] w-[90%] mx-auto text-center lg:pt-20 pt-5">
        More time online exposes kids to more risks
      </p>
      <p className="text-center mt-1 w-[65%] mx-auto text-md lg:text-xl">
        We know that every child faces different risks when it comes to their
        digital lives. We have the tools to help in every situation.
      </p>

      <div className="flex flex-wrap mt-5 lg:mt-20 w-[90%] mx-auto gap-10 justify-between">
        {data?.map((item, index) => (
          <div className="lg:w-1/5">
            <p className="font-bold text-xl lg:text-2xl mb-3">{item?.title}</p>
            <p>{item?.des}</p>
          </div>
        ))}
      </div>

      <p className="text-xl lg:text-4xl font-bold lg:w-[40%] w-[90%] mx-auto text-center lg:pt-20 pt-5">
        Screen time is on the rise
      </p>
      <p className="text-center mt-3 w-[80%] mx-auto text-md lg:text-xl tracking-widest">
        AVERAGE TIME KIDS SPEND ONLINE EACH DAY
      </p>

      <div className="my-10 flex flex-col lg:flex-row justify-center">
        <div className="w-96 items-center flex flex-col gap-3">
          <p className=" font-bold text-lg lg:text-xl">Kids</p>
          <p className=" bg-blue-200 max-w-fit py-1 px-4 rounded-2xl">
            5 to 8 years
          </p>
          <div className="border-blue-200 border-4 p-20 rounded-full h-52 w-52 justify-center items-center flex flex-col">
            <p className="text-2xl lg:text-5xl">4.5</p>
            <p className="text-gray-400">hours/day</p>
          </div>
        </div>
        <div className="w-96 items-center flex flex-col gap-3">
          <p className=" font-bold text-lg lg:text-xl">Tweens</p>
          <p className=" bg-green-200 max-w-fit py-1 px-4 rounded-2xl">
            9 to 12 years
          </p>
          <div className="border-green-200 border-4 p-20 rounded-full h-52 w-52 justify-center items-center flex flex-col">
            <p className="text-2xl lg:text-5xl">6</p>
            <p className="text-gray-400">hours/day</p>
          </div>
        </div>
        <div className="w-96 items-center flex flex-col gap-3">
          <p className=" font-bold text-lg lg:text-xl">Teens</p>
          <p className=" bg-yellow-200 max-w-fit py-1 px-4 rounded-2xl">
            13 to 18 years
          </p>
          <div className="border-yellow-200 border-4 p-20 rounded-full h-52 w-52 justify-center items-center flex flex-col">
            <p className="text-2xl lg:text-5xl">9</p>
            <p className="text-gray-400">hours/day</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-32 gap-10 w-[90%] mx-auto">
        <div className="lg:w-[50%]">
          <div className="flex flex-col justify-center items-center gap-1">
            {/* Accordion Item 1 */}
            <div
              className={`w-full ${
                openAccordion === 1 ? "border-green-500" : "border-gray-300"
              } border-2 p-4`}
            >
              <Collapsible
                open={openAccordion === 1} // Control open state based on the index
                trigger={
                  <div
                    className="flex items-center justify-between"
                    onClick={() => handleAccordionToggle(1)}
                  >
                    {/* <div className="flex items-center justify-center gap-2"> */}
                    {/* <div>
                        {openAccordion === 1 ? (
                          <FaShieldHalved
                            className="mt-2 group-hover:rotate-180"
                            size={15}
                            color="green"
                          />
                        ) : (
                          <FaShieldHalved
                            className="mt-2 group-hover:rotate-180"
                            size={13}
                          />
                        )}
                      </div> */}
                    <div>
                      <p className="font-bold"> Filter content & apps</p>
                    </div>
                    {/* </div> */}
                    <div>
                      {openAccordion === 1 ? (
                        <FaChevronDown
                          className="mt-2 group-hover:rotate-180"
                          size={13}
                          color="blue"
                        />
                      ) : (
                        <FaChevronUp
                          className="mt-2 group-hover:rotate-180"
                          size={13}
                          color="blue"
                        />
                      )}
                    </div>
                  </div>
                }
              >
                <p>This is the content of the first accordion item.</p>
                <p>You can add more content here.</p>
              </Collapsible>
            </div>

            {/* Accordion Item 2 */}
            <div
              className={`w-full ${
                openAccordion === 2 ? "border-green-500" : "border-gray-300"
              } border-2 p-4`}
            >
              <Collapsible
                open={openAccordion === 2}
                trigger={
                  <div
                    className="flex items-center justify-between"
                    onClick={() => handleAccordionToggle(2)}
                  >
                    <div>
                      <p className="font-bold"> Monitor activity</p>
                    </div>
                    <div>
                      {openAccordion === 2 ? (
                        <FaChevronDown
                          className="mt-2 group-hover:rotate-180"
                          size={13}
                          color="blue"
                        />
                      ) : (
                        <FaChevronUp
                          className="mt-2 group-hover:rotate-180"
                          size={13}
                          color="blue"
                        />
                      )}
                    </div>
                  </div>
                }
              >
                <p>This is the content of the second accordion item.</p>
                <p>Additional content can be added here as well.</p>
              </Collapsible>
            </div>

            {/* Accordion Item 3 */}
            <div
              className={`w-full ${
                openAccordion === 3 ? "border-green-500" : "border-gray-300"
              } border-2 p-4`}
            >
              <Collapsible
                open={openAccordion === 3}
                trigger={
                  <div
                    className="flex items-center justify-between"
                    onClick={() => handleAccordionToggle(3)}
                  >
                    <div>
                      <p className="font-bold"> See the limits</p>
                    </div>

                    <div>
                      {openAccordion === 3 ? (
                        <FaChevronDown
                          className="mt-2 group-hover:rotate-180"
                          size={13}
                          color="blue"
                        />
                      ) : (
                        <FaChevronUp
                          className="mt-2 group-hover:rotate-180"
                          size={13}
                          color="blue"
                        />
                      )}
                    </div>
                  </div>
                }
              >
                <p>This is the content of the third accordion item.</p>
                <p>You can keep adding more items like this.</p>
              </Collapsible>
            </div>
          </div>
        </div>
        <div className="lg:w-[50%]">
          <video autoPlay muted loop type="webm">
            <source src="https://static.qustodio.com/public-site/uploads/2024/04/26094644/Keep-your-child-safe_EN.webm" />
          </video>
        </div>
      </div>

      <div className="w-[90%] mx-auto my-10">
        <Testimonial />
        <CreateAccount />
      </div>

      <div>
        <p className="text-xl lg:text-4xl font-bold lg:w-[40%] w-[90%] mx-auto text-center lg:pt-20 pt-5">
          Learn how Qustodio
        </p>
        <p className="text-xl lg:text-4xl font-bold lg:w-[50%] w-[90%] mx-auto text-center lg:pt-2 pt-1">
          makes digital parenting easier
        </p>

        <div className="flex flex-col lg:flex-row gap-10 my-5 lg:my-20">
          <div className="lg:w-1/3">
            <img src="https://static.qustodio.com/public-site/uploads/2023/11/29112821/productips-desktop%402x-1.png" />
            <p className="text-lg lg:text-xl font-bold my-1 lg:my-3">
              Product tips
            </p>
            <p>
              The latest product updates and features plus handy how-tos to help
              you get the most out of Qustodio.
            </p>
          </div>
          <div className="lg:w-1/3">
            <img src="https://static.qustodio.com/public-site/uploads/2023/11/28084530/parenttips-desktop%402x.png" />
            <p className="text-lg lg:text-xl font-bold my-1 lg:my-3">
              Parenting tips
            </p>
            <p>
              Fact-based information and research on children’s health and
              safety online, with expert insights from technology, psychology,
              medicine, and more.
            </p>
          </div>
          <div className="lg:w-1/3">
            <img src="https://static.qustodio.com/public-site/uploads/2023/11/28084646/safetyguide-desktop%402x.png" />
            <p className="text-lg lg:text-xl font-bold my-1 lg:my-3">
              App safety guides & reviews
            </p>
            <p>
              Summaries, ratings, warnings, and recommendations about the apps
              and games parents need to know about.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default Why;
