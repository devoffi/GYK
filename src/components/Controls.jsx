import React, { useState } from "react";
import Collapsible from "react-collapsible";
import {
  FaChevronDown,
  FaChevronUp,
  FaShield,
  FaShieldHalved,
} from "react-icons/fa6";
import { BsArrowUpRight } from "react-icons/bs";
import PrimaryButton from "./common/PrimaryButton";

function Controls() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionToggle = (index) => {
    // Toggle the clicked accordion open/closed
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-20 mb-20">
      <p className="lg:text-3xl text-xl font-bold text-center lg:mt-20 mt-5">
        Parental controls made easy
      </p>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-32 gap-10">
        <div>
          <video autoPlay muted loop type="webm">
            <source src="https://static.qustodio.com/public-site/uploads/2024/04/26094644/Keep-your-child-safe_EN.webm" />
          </video>
        </div>
        <div>
          <p className="text-xl lg:text-4xl font-bold my-8">
            Keep your child safe online
          </p>
          <p className="text-lg">
            Create a risk-free environment for your kids online. Qustodio
            provides peace of mind by allowing you to easily monitor and manage
            your kids’ activity on all devices, wherever they go.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-32 gap-10">
        <div>
          <p className="text-xl lg:text-4xl font-bold my-8">
            Supervise the way you want
          </p>
          <p className="text-lg">
            Filter websites, set time limits, block apps, get detailed reports,
            and much more. Tailor your child’s digital experience based on their
            needs and your preferences.
          </p>
        </div>
        <div>
          <video autoPlay muted loop type="webm">
            <source src="https://static.qustodio.com/public-site/uploads/2024/04/26094824/supervise-the-way-you-want_EN.webm" />
          </video>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-32 gap-10">
        <div>
          <video autoPlay muted loop type="webm">
            <source src="https://static.qustodio.com/public-site/uploads/2024/04/26094831/build-positive-digital-habits.webm" />
          </video>
        </div>
        <div>
          <p className="text-xl lg:text-4xl font-bold my-8">
            Build positive digital habits
          </p>
          <p className="text-lg">
            Help your child develop a healthy relationship with technology. With
            Qustodio you can make time for your kids’ real life activities and
            build balanced digital habits as they grow.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-32 gap-10">
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
                  <div  className="flex items-center justify-between" onClick={() => handleAccordionToggle(2)}>
                    <div >
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
                  <div  className="flex items-center justify-between" onClick={() => handleAccordionToggle(3)}>
                    <div >
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
      <div className=" self-center"><PrimaryButton>Get started free</PrimaryButton></div>
    </div>
  );
}

export default Controls;
