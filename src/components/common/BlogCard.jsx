import React from "react";

function BlogCard({ image, heading, desc, button1, button2 }) {
  return (
    <div className=" hover:border-blue-600 hover:border-2 p-2 ">
      <img className="w-full custom-clip" src={image} />
      <p className="pt-2 lg:pt-5 text-xl lg:text-2xl font-bold">{heading}</p>
      <p className="text-md lg:text-lg">{desc}</p>
      <div className="flex py-2 lg:py-5 gap-8 mx-4 text-gray-600">
        <p className=" font-medium">{button1}</p>
        <p  className="font-medium">{button1}</p>
      </div>
    </div>
  );
}

export default BlogCard;
