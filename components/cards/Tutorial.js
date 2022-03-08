import {
  ClockIcon,
  HeartIcon,
  VideoCameraIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';

function Tutorial({ title, content, url, course }) {
  return (
    <div className="mb-6">
      <div className="w-full md:w-56 h-full my-2 md:m-4 shadow-xl bg-gray-100 rounded flex-col pb-2">
        {/* <Image
          src={require('../../public/assets/image.jpg').default}
          className="h-1/2 rounded w-56 object-center"
        /> */}
        <iframe
          // width="224"
          // height="100"
          src={url}
          title={title}
          frameBorder="0"
          className="h-1/2 hover:scale-150 hover:transition-all duration-500 rounded md:w-56 object-center w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen=""
        ></iframe>

        <div className="px-1">
          <div className="flex flex-row justify-between mt-2">
            <span className=" text-xs font-lighter py-0.5 text-gray-100 bg-gray-600 rounded px-2 uppercase">
              {course}
            </span>
            <span className=" text-xs font-lighter  text-blue-600 rounded-xl px-2">
              <HeartIcon className="h-3 w-3" />
            </span>
          </div>
          <h1 className="text-center text-blue-800 font-medium   truncate mt-2 uppercase">
            {title}
          </h1>
          <p className="text-justify text-sm uppercase text-gray-700 line-clamp-3 mt-1">
            {content}
          </p>
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
