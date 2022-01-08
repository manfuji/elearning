import React from "react";

function Courses({Icon,title,color,icolor}) {
  return (
    <div>
      <div className={`w-64 justify-between hover:scale-110 hover:ease-in-out transform duration-150 transition-all my-2 md:my0 ${color} text-white flex font-bold font-sans flex-row justify-center items-center ml-4 md:mt-4 sm:w-48 h-20 px-4  rounded-2xl uppercase ring-1 ring-white`}>
        <Icon className={`h-14 w-14 inline-flex ${icolor}`} />
        <h1>{title} </h1>
      </div>
    </div>
  );
}

export default Courses;
