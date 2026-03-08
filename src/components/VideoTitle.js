import React from "react";

const VideoTitle = (data) => {
  //   console.log(data);

  return (
    <div className="w-screen aspect-video pt-[25%] px-24 absolute  text-white bg-gradient-to-tr from-black">
      <h1 className="text-6xl font-bold ">{data.title}</h1>
      <p className="py-6 text-lg w-1/4 text-white ">{data.overview}</p>
      <div>
        <button className="border-black bg-white text-black p-4 px-16  w-auto text-lg  rounded-lg hover:bg-opacity-60">
          ▶️Play
        </button>

        <button className="border-black bg-gray-500 text-white p-4 px-16 mx-2 w-auto  text-lg bg-opacity-50 rounded-lg">
          {" "}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
