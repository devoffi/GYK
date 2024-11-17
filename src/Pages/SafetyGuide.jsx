import React, { useEffect } from "react";
import TextInputBox from "../components/common/TextInputBox";
import { SectionContainer } from "../components/common/SectionContainer";
import BlogCard from "../components/common/BlogCard";
import PrimaryButton from "../components/common/PrimaryButton";
import { Link } from "react-router-dom";

function SafetyGuide() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="bg-gray-300 py-5 lg:py-16">
        <SectionContainer>
          <div className="flex flex-col lg:w-[80%] mx-auto gap-10">
            <div className="w-full lg:w-64 self-end">
              <TextInputBox placeholder={"Search"} />
            </div>

            <p className="font-extrabold text-xl lg:text-5xl text-center">
              App Safety & Expert Reviews
            </p>
            <p className="font-bold text-md lg:text-xl text-center">
              Your go-to guide for digital parenting advice, latest updates, app
              features, and safety reviews on everything from games to social
              platforms.
            </p>
          </div>
        </SectionContainer>
      </div>

      <SectionContainer>
        <div className="lg:w-2/3 mx-auto my-5 lg:my-10">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-96 w-full">
              <BlogCard
                heading={"4 Proven Tips to Smoothly Transition Back to School"}
                desc={"by Megan Proops on August 13, 2024"}
                button1={"Parenting Insights"}
                button2={"Product Advice"}
                image={
                  "https://static.qustodio.com/public-site/uploads/2021/09/30152614/Blog_TipsToGetBackIntoApositiveSchoolRoutine_repost_Thumbnail-480x336.jpg"
                }
              />
            </div>
            <div className="lg:w-96 w-full">
              <BlogCard
                heading={
                  "Safekidly How-Tos: Setting Effective Screen Time Limits"
                }
                desc={"by Megan Proops on August 13, 2024"}
                button1={"Parenting Insights"}
                button2={"Product Advice"}
                image={
                  "https://static.qustodio.com/public-site/uploads/2022/02/10090428/Time-limits-cover-480x336.png"
                }
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-96 w-full p-5">
              <p className="text-2xl lg:text-3xl font-bold lg:pr-28">
                Receive Parenting Tips Straight to Your Inbox
              </p>
              <p className="text-md lg:text-lg font-medium text-gray-600 lg:pr-16 my-1 lg:my-3">
                Sign up for our monthly newsletter to get the latest expert tips
                on smart parenting.
              </p>
              <div className="w-full gap-5 flex flex-col items-center">
                <TextInputBox placeholder={"your.email@example.com"} />
                <PrimaryButton>Subscribe Now</PrimaryButton>
              </div>
            </div>
            <div className="lg:w-96 w-full">
              <BlogCard
                heading={"Practical Tips for Establishing Healthy Routines"}
                desc={"by Megan Proops on August 13, 2024"}
                button1={"Parenting Insights"}
                button2={"Product Advice"}
                image={
                  "https://static.qustodio.com/public-site/uploads/2022/11/08091853/FeatureTips-CallsMessages_BlogImage-480x336.png"
                }
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-96 w-full">
              <BlogCard
                heading={"Expert Tips for Positive School Transitions"}
                desc={"by Megan Proops on August 13, 2024"}
                button1={"Parenting Insights"}
                button2={"Product Advice"}
                image={
                  "https://static.qustodio.com/public-site/uploads/2021/09/30152614/Blog_TipsToGetBackIntoApositiveSchoolRoutine_repost_Thumbnail-480x336.jpg"
                }
              />
            </div>
            <div className="lg:w-96 w-full">
              <BlogCard
                heading={"Mastering Screen Time: A Parent's Guide"}
                desc={"by Megan Proops on August 13, 2024"}
                button1={"Parenting Insights"}
                button2={"Product Advice"}
                image={
                  "https://static.qustodio.com/public-site/uploads/2022/02/10090428/Time-limits-cover-480x336.png"
                }
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-96 w-full">
              <BlogCard
                heading={"Top Tips for Back-to-School Success"}
                desc={"by Megan Proops on August 13, 2024"}
                button1={"Parenting Insights"}
                button2={"Product Advice"}
                image={
                  "https://static.qustodio.com/public-site/uploads/2021/09/30152614/Blog_TipsToGetBackIntoApositiveSchoolRoutine_repost_Thumbnail-480x336.jpg"
                }
              />
            </div>
          </div>
        </div>
      </SectionContainer>

      <div className="bg-green-400 px-4">
        <div className="flex flex-col lg:flex-row lg:w-4/5 mx-auto items-center lg:gap-10 lg:py-10 py-4">
          <div className="lg:w-[30%]">
            <img src="https://static.qustodio.com/public-site/uploads/2021/08/10150310/group-5%402x-2.png" />
          </div>
          <div className="lg:w-[70%] flex flex-col gap-5">
            <p className="text-xl lg:text-3xl font-bold text-white">
              Protect Your Family with Safekidly
            </p>
            <p className="text-lg lg:text-xl text-white">
              Safekidly empowers parents to guide their kids' digital
              activities, promoting healthy online habits. Our tools help you
              ensure a safe browsing experience and control screen time
              effortlessly.
            </p>
            <Link
              to="/signup"
              className="bg-blue-700 w-max hover:bg-blue-800 duration-500 py-2 px-4 rounded cursor-pointer text-white text-center font-medium text-lg">
              Start Your Free Trial
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SafetyGuide;
