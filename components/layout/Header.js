import Link from 'next/link';
import { ArrowUpIcon, MenuIcon } from '@heroicons/react/outline';
import { useState } from 'react';
function Header() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="w-full h-full fixed-top text-white text-center tracking-wider  md:px-14 py-2 z-30 sticky top-0 font-bold md:py-2 bg-blue-600 flex flex-col md:flex-row justify-between">
      <div className="flex md:hidden px-4 flex-row justify-between">
        <h1 className="font-bold">Elearning</h1>
        {toggle ? (
          <>
            <MenuIcon
              className="h-8 w-8 text-white inline-flex"
              onClick={() => setToggle(!toggle)}
            />
          </>
        ) : (
          <ArrowUpIcon
            className="h-8 w-8 text-white inline-flex"
            onClick={() => setToggle(!toggle)}
          />
        )}
      </div>
      <ul
        className={` ${
          toggle ? 'hidden' : ''
        } md:flex flex-col md:flex-row text-center md:h-10`}
      >
        <li className="md:px-4 md:py-2 py-1 mr-2 hover:bg-blue-500 rounded-md text-center focus:bg-blue-300">
          <Link href="/">Home</Link>
        </li>
        <li className="md:px-4 md:py-2 py-1 mr-2 hover:bg-blue-500 rounded-md text-center focus:bg-blue-300">
          <Link href="/about">About</Link>
        </li>
        <li className="md:px-4 md:py-2 py-1 mr-2 hover:bg-blue-500 rounded-md text-center focus:bg-blue-300">
          <Link href="/contact">Contact</Link>
        </li>
        <li className="md:px-4 md:py-2 py-1 mr-2 hover:bg-blue-500 rounded-md text-center focus:bg-blue-300">
          <Link href="/courses">Courses</Link>
        </li>
        <li className="md:px-4 md:py-2 py-1 mr-2 hover:bg-blue-500 rounded-md text-center focus:bg-blue-300">
          <Link href="/account/dashboard">Dashboard</Link>
        </li>
      </ul>
      {/* <ul className={`${toggle?'hidden':"flex"}`}>
            <li className="mt-1 md:hidden xl:inline-flex">
                    <input placeholder="Search for a course...." className="outline-none placeholder:text-blue-600 ring-1 py-1 ring-gray-300 rounded-xl text-blue-600 pl-5 " />
                </li>
            </ul> */}
      <ul className={`flex flex-row  justify-between md:mt-0 mt-4`}>
        <li className="px-4 md:py-2 py-1  mr-2 hover:bg-blue-500 rounded-md text-center focus:bg-blue-300">
          <Link href="account/login">Login</Link>
        </li>
        <li className="px-4 md:py-2 py-1 mr-2 hover:bg-blue-500 rounded-md text-center focus:bg-blue-300">
          <Link href="/account/register">Register</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
