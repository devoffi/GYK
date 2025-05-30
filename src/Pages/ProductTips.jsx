import React, { useEffect } from "react";
import TextInputBox from "../components/common/TextInputBox";
import { SectionContainer } from "../components/common/SectionContainer";
import BlogCard from "../components/common/BlogCard";
import PrimaryButton from "../components/common/PrimaryButton";
import { Link } from "react-router-dom";

function ProductTips() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="bg-gray-100 text-gray-700 py-5 lg:py-16">
        <SectionContainer>
          <div className="flex flex-col lg:w-[90%] mx-auto gap-10">
            <div className="w-full lg:w-64 self-end">
              <TextInputBox placeholder={"Search"} />
            </div>

            <p className="font-extrabold text-xl lg:text-5xl text-center">
              Product Tips & Insights
            </p>
            <p className="font-bold text-md lg:text-xl text-center">
              Discover expert advice on digital parenting, product features, and
              updates. Get comprehensive safety guides and reviews on popular
              apps, games, and social platforms.
            </p>
          </div>
        </SectionContainer>
      </div>

      <SectionContainer>
        <div className="lg:w-full mx-auto my-5 lg:my-10">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-4/12 w-full">
              <BlogCard
                heading={"4 Essential Tips for a Smooth School Routine"}
                desc={"by Megan Proops on August 13, 2024"}
                button1={"Parenting Insights"}
                button2={"Product Advice"}
                image={
                  "https://static.qustodio.com/public-site/uploads/2021/09/30152614/Blog_TipsToGetBackIntoApositiveSchoolRoutine_repost_Thumbnail-480x336.jpg"
                }
              />
            </div>
            <div className="lg:w-4/12 w-full">
              <BlogCard
                heading={
                  "Mastering Screen Time with Safekidly: Time Limits Guide"
                }
                desc={"by Megan Proops on August 13, 2024"}
                button1={"Parenting Insights"}
                button2={"Product Advice"}
                image={
                  "https://static.qustodio.com/public-site/uploads/2022/02/10090428/Time-limits-cover-480x336.png"
                }
              />
            </div>
            <div className="lg:w-4/12 w-full p-5 bg-gray-50 rounded-tr-3xl">
              <p className="text-2xl lg:text-3xl font-bold lg:pr-28">
                Get Expert Parenting Tips Delivered to Your Inbox
              </p>
              <p className="text-md lg:text-lg font-medium text-gray-600 lg:pr-16 my-1 lg:my-3">
                Sign up for our monthly newsletter to receive advice from
                parenting experts directly to your inbox.
              </p>
              <div className="w-full gap-5 flex flex-col items-center">
                <TextInputBox placeholder={"your.email@example.com"} />
                <PrimaryButton>Subscribe Now</PrimaryButton>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-96 w-full">
              <BlogCard
                heading={"Practical Strategies for a Successful School Year"}
                desc={"by Megan Proops on August 13, 2024"}
                button1={"Parenting Insights"}
                button2={"Product Advice"}
                image={
                  "https://static.qustodio.com/public-site/uploads/2022/11/08091853/FeatureTips-CallsMessages_BlogImage-480x336.png"
                }
              />
            </div>
            <div className="lg:w-96 w-full">
              <BlogCard
                heading={"Proven Tips for Better School Routines"}
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
                heading={"Safekidly Guide: Setting Screen Time Boundaries"}
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
                heading={"Top Strategies for Positive School Transitions"}
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

      <div className="bg-green-400">
        <div className="flex flex-col lg:flex-row lg:w-4/5 mx-auto items-center lg:gap-10 lg:py-10 py-4">
          <div className="lg:w-[30%]">
            <img src="https://static.qustodio.com/public-site/uploads/2021/08/10150310/group-5%402x-2.png" />
          </div>
          <div className="lg:w-[70%] flex flex-col gap-5">
            <p className="text-xl lg:text-3xl font-bold text-white">
              Discover How Safekidly Can Protect Your Family
            </p>
            <p className="text-lg lg:text-xl text-white">
              Safekidly empowers you to keep your children safe online,
              promoting healthy digital habits. Leverage our parental control
              tools to manage screen time and block inappropriate content
              effortlessly.
            </p>
            <Link
              to="/signup"
              className="bg-blue-700 w-max hover:bg-blue-800 duration-500 py-2 px-4 rounded cursor-pointer text-white text-center font-medium text-lg">
              Start Your Free Trial Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTips;
