import { BookOpenIcon, PhoneIcon, PhoneOutgoingIcon } from "@heroicons/react/outline";
import {InboxIcon} from "@heroicons/react/solid"
import Image from "next/image";

const contact = () => {

  return (
    <div className="bg-gray-50 w-full h-full">
         <div className="relative block h-[300px] w-full mb-8">
            <Image
              src={require("../public/assets/bg.jpg").default}
              className="absolute w-full bg-cover z-10 object-center"
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className="absolute top-96 md:top-28 w-full flex justify-center ">
            <div className="bg-gray-50 z-50 opacity-95 h-80 container max-w-7xl rounded justify-center items-center flex flex-col text-blue-900">
            <button className="text-3xl animate-bounce antialiased font-bold tracking-widest rounded-md uppercase bg-gradient-to-r from-blue-600 text-white to-green-600 py-2 px-8 opacity-100 transition-all  duration-100 hover:scale-105 transform">
                <PhoneOutgoingIcon className="h-6 w-6 inline-flex " /> Give Us A call
              </button>
              <blockquote className="mt-5 px-2  text-center uppercase">
              
              <div className="text-sm text-center text-gray-600 mb-5">
          <p className="font-bold text-blue-600  text-lg "> <PhoneIcon className="h-4 w-4 inline-flex text-blue-600" /> Call</p>
           0218838283 0234829832 283823923892
          <p className="font-bold text-blue-600  text-lg ">  <InboxIcon className="h-4 w-4 inline-flex text-blue-600" /> Whatsapp</p>
         0218838283 0234829832 283823923892
          
        </div>
              </blockquote>
            </div>
          </div>
    
      <div className="max-w-3xl mx-auto bg-gray-100 shadow-lg p-10 rounded-lg">
        <form className="flex flex-col space-y-2 py-4 ">
          <div className="flex flex-col justify-center items-center">

          <BookOpenIcon className=" text-blue-600 h-16 w-16" />
          <h1 className="text-4xl font-bold text-blue-900 text-center">
            Contact Form
          </h1>
          </div>
          <input
            type="text"
            required
            placeholder="Fullname eg John Doe"
            className="px-10 py-2 outline-none focus:ring-1 ring-blue-900 rounded-md placeholder-blue-900"
          />
          <input
            required
            type="email"
            placeholder="Email eg John@doe.com"
            className="px-10 py-2 outline-none focus:ring-1 ring-blue-900 rounded-md placeholder-blue-900"
          />
          <input
            required
            type="number"
            placeholder="Number (+233-540-000-000)"
            className="px-10 py-2 outline-none focus:ring-1 ring-blue-900 rounded-md placeholder-blue-900"
          />

          <textarea
            required
            cols="3"
            type="text"
            placeholder="Your Message"
            className="px-10  outline-none focus:ring-1 ring-blue-900 rounded-md placeholder-blue-900"
          />
          <button className="mt-2 px-8 py-2 text-lg text-white bg-green-500 rounded-lg hover:bg-green-400 active:bg-green-300 focus:ring-1 ring-green-900">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default contact;
