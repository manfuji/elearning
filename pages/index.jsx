import Head from "next/head";
import Image from "next/image";
import {
  AcademicCapIcon,
  BadgeCheckIcon,
  BookmarkIcon,
  BookOpenIcon,
  DesktopComputerIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Courses from "../components/cards/Courses";
import { content } from "../tailwind.config";
import Tutorial from "../components/cards/Tutorial";
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App popo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div>
          <div className="relative block h-[500px] w-full mb-8">
            <Image
              src={require("../public/assets/bg.jpg").default}
              className="absolute w-full bg-cover z-50 object-center"
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className="absolute top-56 w-full flex justify-center ">
            <div className="bg-gray-50 z-50 opacity-95 h-80 container max-w-7xl rounded justify-center items-center flex flex-col text-blue-900">
              <button className="bg-green-600 rounded-full text-gray-100 font-semibold py-4 px-8 opacity-100 transition-all animate-bounce duration-100 hover:scale-105">
                Get Started Now
              </button>
              <blockquote className="mt-5 uppercase font-bold text-xl md:text-2xl">
                we provide <span className="text-red-500">quality</span> and
                <span className="text-blue-500">Practical</span> Knowledge
              </blockquote>
            </div>
          </div>

          <section className="m-4 h-full max-w-5xl text-center flex flex-wrap justify-center items-center mx-auto mb-10 p-6 md:p-10">
            <Courses
              Icon={DesktopComputerIcon}
              title="20k Online Courses"
              color="bg-yellow-600 "
              icolor="text-white-600"
            />
            <Courses
              Icon={UserGroupIcon}
              title="10k Register Users"
              color="bg-blue-300"
              icolor="text-blue-600"
            />
            <Courses
              Icon={BadgeCheckIcon}
              title="10k Expert User"
              color="bg-violet-300"
              icolor="text-violet-600"
            />
            <Courses
              Icon={AcademicCapIcon}
              icolor="text-gray-600"
              title="10k Certified Courses"
              color="bg-gray-400"
            />
          </section>
          <section className="bg-gray-50 rounded h-full max-w-5xl mx-auto text-gray-900 p-6 md:p-10">
            <h1 className="font-bold text-3xl tracking-wider font-sans text-center text-blue-600 uppercase">
              About US
            </h1>
            <blockquote className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              eveniet sapiente! Culpa assumenda asperiores doloribus ut omnis
              voluptas error eos commodi ipsum nesciunt minus optio, vitae
              tempora perferendis. Excepturi, nostrum?
            </blockquote>
          </section>
          <div className="py-1 px-10 tracking-wider justify-center items-center space-x-4 max-w-5xl mx-auto text-zinc-100 text-center bg-blue-600 rounded-full mt-10 flex flex-row overflow-x-scroll scrollbar-hide ">
            <div className="font-semibold text-center ml-10 w-full hover:bg-blue-400 cursor-pointer rounded-xl p-2">
              Graphic design{" "}
            </div>
            <div className="font-semibold text-center w-full hover:bg-blue-400 rounded-xl p-2">
              Graphic design{" "}
            </div>
            <div className="font-semibold text-center w-full hover:bg-blue-400 rounded-xl p-2">
              Graphic design{" "}
            </div>
            <div className="font-semibold text-center w-full hover:bg-blue-400 rounded-xl p-2">
              Graphic design{" "}
            </div>
            <div className="font-semibold text-center w-full hover:bg-blue-400 rounded-xl p-2">
              Graphic design{" "}
            </div>
          </div>

          <section className="bg-gray-50 rounded h-full mb-10 max-w-5xl mt-10 mx-auto text-gray-900 p-6 md:p-10">
            <h1 className="font-bold text-3xl tracking-wider mb-10 font-sans text-center text-blue-600 uppercase">
              Tutorials
            </h1>
            <div className="flex flex-row flex-wrap justify-center">
              <Tutorial
                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nam quae corrupti tempore itaque, ipsum alias accusantium ducimus libero, amet rerum ullam nisi id necessitatibus blanditiis officia laudantium nihil at?

"
                title="Graphic Design master class"
                course="Graphic Design"
              />

              <Tutorial
                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nam quae corrupti tempore itaque, ipsum alias accusantium ducimus libero, amet rerum ullam nisi id necessitatibus blanditiis officia laudantium nihil at?

"
                title="Create a Design system in Figma"
                course=" UX/UI Design"

              />
              <Tutorial
                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nam quae corrupti tempore itaque, ipsum alias accusantium ducimus libero, amet rerum ullam nisi id necessitatibus blanditiis officia laudantium nihil at?

"
                title="Web Design master class"
                course="Web Design"
                
              />
            </div>
          </section>
        </div>

        <section className="bg-blue-500 my-10 rounded h-full max-w-5xl mx-auto text-gray-50 p-6 md:p-10">
            <h1 className="font-bold text-xl tracking-wider font-sans text-center text-gray-100 uppercase">
              Become an Instructor and a content manager
            </h1>
            <div className="flex-col md:flex-row flex">

            <blockquote className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              eveniet sapiente! Culpa assumenda asperiores doloribus ut omnis
              voluptas error eos commodi ipsum nesciunt minus optio, vitae
              tempora perferendis. Excepturi, nostrum?
            </blockquote>
            <div className="">

            <button className="bg-green-600 rounded w-64 text-gray-100 font-semibold py-2 mt-2 px-8 opacity-100 transition-all animate-bounce duration-100 hover:scale-105">
                Get Started Now
              </button>
            </div>
            </div>
          </section>
          <section className="bg-gray-50 rounded h-full mb-10 max-w-5xl mt-10 mx-auto text-gray-900 p-6 md:p-10">
            <h1 className="font-bold text-3xl tracking-wider font-sans text-center text-blue-600 uppercase">
              TRENDING COURSES
            </h1>
            <h3 className="text-xs text-center font-serif tracking-widest text-gray-500">
              Apply now and get a Free access to all our resourses
            </h3>
            <div className="flex flex-row flex-wrap justify-center">
              <Tutorial
                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nam quae corrupti tempore itaque, ipsum alias accusantium ducimus libero, amet rerum ullam nisi id necessitatibus blanditiis officia laudantium nihil at?

"
                title="Graphic Design master class"
                course="Graphic Design"
              />

              <Tutorial
                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nam quae corrupti tempore itaque, ipsum alias accusantium ducimus libero, amet rerum ullam nisi id necessitatibus blanditiis officia laudantium nihil at?

"
                title="Create a Design system in Figma"
                course=" UX/UI Design"

              />
              <Tutorial
                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nam quae corrupti tempore itaque, ipsum alias accusantium ducimus libero, amet rerum ullam nisi id necessitatibus blanditiis officia laudantium nihil at?

"
                title="Web Design master class"
                course="Web Design"
                
              />
            </div>
          </section>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}
