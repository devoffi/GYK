import React, { useState } from "react";
import Collapsible from "react-collapsible";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

function Concern() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionToggle = (index) => {
    // Toggle the clicked accordion open/closed
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="my-20">
      <p className="lg:text-4xl text-xl font-bold text-center">
        Were here to help with your concerns
      </p>
      <p className="text-center my-5">
        Whatever their age and needs, Qustodios parental control tools help
        reduce the risks your kids face online.
      </p>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-0">
        <div className="lg:w-[30%]">
          <img src="https://static.qustodio.com/public-site/uploads/2023/11/16115935/studykid-image-en%402x.png" />
        </div>
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
    </div>
  );
}

export default Concern;
