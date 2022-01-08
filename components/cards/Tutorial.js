import { ClockIcon, HeartIcon, VideoCameraIcon } from "@heroicons/react/outline";
import Image from "next/image";

function Tutorial({ title, content, image,course }) {
  return (
    <div>
      <div className="w-full md:w-56 h-58 my-2 md:m-4 shadow-xl bg-gray-100 rounded flex-col pb-2">
        <Image
          src={require("../../public/assets/image.jpg").default}
          className="h-1/2 rounded w-56 object-center"
        
        />
        <div className="px-1">
          <div className="flex flex-row justify-between mt-2">
            <span className=" text-xs font-lighter py-0.5 text-gray-100 bg-gray-600 rounded px-2">
            {course}
            </span>
            <span className=" text-xs font-lighter  text-blue-600 rounded-xl px-2">
              <HeartIcon className="h-3 w-3" />
            </span>
          </div>
          <h1 className="text-center text-gray-800 text-lg truncate mt-2 capitalize">
            {title}
          </h1>
          <p className="text-center text-gray-700 line-clamp-3 mt-1">{content}</p>
          <div>
              <hr className="my-1" />
              <div className="flex flex-row justify-between mt-1 text-gray-400">
                  <span className="text-xs">
                      <ClockIcon className="h-4 w-4 inline-flex text-yellow-700 mr-1" />
                      <span>17h 35s</span>
                  </span>
                <span className=" text-xs">
                    <VideoCameraIcon className="h-4 w-4 inline-flex text-yellow-700 mr-1" />
                    3 videos
                </span>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tutorial;
