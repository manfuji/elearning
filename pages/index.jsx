import Head from 'next/head';
import Image from 'next/image';
import {
  AcademicCapIcon,
  BadgeCheckIcon,
  DesktopComputerIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';
import Courses from '../components/cards/Courses';
// import { content } from "../tailwind.config";
import Tutorial from '../components/cards/Tutorial';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect } from 'react';
export default function Home() {
  const route = useRouter();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/posts`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="">
      <Head>
        <title>Elearning</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div>
          <div className="relative block h-[500px] w-full mb-8">
            <Image
              src={require('../public/assets/bg.jpg').default}
              className="absolute w-full bg-cover z-10 object-center"
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className="absolute top-64 md:top-64 w-full flex justify-center ">
            <div className="bg-gray-50 z-50 opacity-95 h-80 container max-w-6xl 2xl:max-w-7xl rounded justify-center items-center flex flex-col text-blue-900">
              <button
                onClick={() => route.push('/account/register')}
                className="text-xl md:text-3xl font-bold tracking-widest rounded-md uppercase bg-gradient-to-r from-blue-600 text-white to-green-500 py-2 px-8 opacity-100 animate-pulse duration-100 hover:scale-105 transform"
              >
                Get Started Now
              </button>
              <blockquote className=" tracking-widest mt-5 px-2  text-center uppercase font-bold text-xl md:text-2xl">
                we provide <span className="text-red-500">quality</span> and
                <span className="text-blue-500"> Practical</span> Knowledge
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
            <h1 className="font-bold text-lg md:text-3xl mb-2 tracking-wider font-sans text-center text-blue-600 uppercase">
              Why Should i Enroll in this program ?
            </h1>
            <blockquote className="">
              Online learning has been on the rise in recent years, and it’s
              really not hard to see why. On the one hand, eLearning courses
              have become hugely popular by the simple virtue of being so much
              more convenient than traditional face to face courses.{' '}
            </blockquote>
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
                content="Looking for a career upgrade & a better salary? We can help, Choose from our no 1 ranked top programmes. 25k+ career transitions with 400 + top corporate companies
"
                url="https://www.youtube.com/embed/OP8BsGnqi9c"
                title="BIG DATA"
                course="DATA SCIENCE"
              />

              <Tutorial
                content="This complete Artificial Intelligence and Machine Learning full course video cover all the topics that you need to know to become a master in the field of AI and Machine Learning. It covers all the basics of Machine Learning, the different types of Machine Learning, and the various applications of
"
                url="https://www.youtube.com/embed/wnqkfpCpK1g"
                title="Artificial Intelligence "
                course=" Artificial Intelligence"
              />
              <Tutorial
                content="Learn the process of UI / UX design.  In this tutorial you will learn how a professional designer builds a full website design from scratch following the process of user experience and user interface. The video covers wireframing, prototyping, and designing in Figma.
                "
                url="https://www.youtube.com/embed/RYDiDpW2VkM"
                title="Create a Design system in Figma"
                course="dESIGN SYSTEM"
              />
            </div>
          </section>
          <section className="bg-blue-600 text-center my-10 rounded h-full max-w-5xl mx-auto text-gray-50 p-6 md:p-10">
            <h1 className="font-bold text-xl tracking-wider font-sans text-center text-gray-100 uppercase">
              Become an Instructor and a content Creator
            </h1>
            <div className="flex-col md:flex-row flex">
              <blockquote className="">
                Of course, what makes “good” content depends on the kind of
                business it’s made for. Nevertheless there are several things to
                keep in mind when creating content, no matter the brand:
              </blockquote>
              <div className="">
                <button className="bg-green-600 mt-5 rounded w-64 text-gray-100 font-semibold py-2 px-8 opacity-100 transition-all animate-bounce duration-100 hover:scale-105">
                  Get Started Now
                </button>
              </div>
            </div>
          </section>
          <section className="bg-gray-50 rounded h-full mb-10 max-w-5xl mt-10 mx-auto text-gray-900 p-6 md:p-10">
            <h1 className="font-bold text-3xl tracking-wider mb-10 font-sans text-center text-blue-600 uppercase">
              Tutorials
            </h1>
            <div className="flex flex-row flex-wrap justify-center">
              <Tutorial
                content=" IN THIS VIDEO YOU WILL LEARN HOW TO CREATE A NODE JS API WITH MONGODB AND ALSO IMPLEMENT FEATURES LIKE TOKENIZATION

"
                url="https://www.youtube.com/embed/-0exw-9YJBo?start=120"
                title="NODEJS API WITH MONGODB"
                course="WEB DEVELOPMENT P1"
              />

              <Tutorial
                url="https://www.youtube.com/embed/enopDSs3DRw"
                content="IN THIS VIDEO YOU WILL LEARN HOW TO SECURE YOUR API WITH JWT TOKEN

"
                title="Create a Design system in Figma"
                course="WEB DEVELOPMENT P2"
              />
              <Tutorial
                url="https://www.youtube.com/embed/mvfsC66xqj0"
                content="In this video, we will create our frontend and add authentication using Redux Toolkit to manage our global state.

"
                title="FRONTEND DEVELOPMENT"
                course="WEB DEVELOPMENT P3"
              />
              <Tutorial
                url="https://www.youtube.com/embed/UXjMo25Nnvc"
                content="In this video, we will add the goals functionality and add goals to our Redux state.

"
                title="FRONTEND DEVELOPMENT"
                course="WEB DEVELOPMENT P4"
              />
              <Tutorial
                url="https://www.youtube.com/embed/xvEKQefqQ7A"
                content="This Data Science Full Course Video will provide you with a learning path of Data Science in a correct manner. Filled with lots of Practical Examples this Latest Data Science Course of 2020 will cover all the below-given topics required for a complete Data Science Tutorial: 
                
                "
                course="DATA SCIENCE "
                title="DATA SCIENCE ANALYTICS "
              />
              <Tutorial
                url="https://www.youtube.com/embed/r-uOLxNrNk8"
                content="Data Analysis has been around for a long time, but up until a few years ago, it was practiced using closed, expensive and limited tools like Excel or Tableau. Python, SQL and other open libraries have changed Data Analysis forever.
                "
                course="DATA SCIENCE "
                title="DATA SCIENCE ANALYTICS "
              />
              <Tutorial
                url="https://www.youtube.com/embed/QKfk7YFILws"
                content="In this comprehensive computer networking course you will learn ins and out of computer networking. You will learn from the very basic of computer networking to the very advance concept of networking. The following topic has been discussed in great details in this course: "
                course="NETWORKING P1"
                title="Computer Networking Complete P1"
              />
              <Tutorial
                url="https://www.youtube.com/embed/awLnur5Yt9o"
                content="In this course you will learn the most basic of Information technology. No matter you are complete beginner or want to be IT professional, then this IT fundamental course is the right 
                course for you to start. You will learn everything you need to know about IT. You will learn each and 
                    "
                course="NETWORKING P2"
                title="Computer Networking Complete P2"
              />
              <Tutorial
                url="https://www.youtube.com/embed/fvUkbkM6vDU"
                content=" This course is very comprehensive and beginner friendly to start and learn about computer networking.  "
                course="NETWORKING P3"
                title="Computer Networking Complete P2"
              />
              <Tutorial
                url="https://www.youtube.com/embed/fNzpcB7ODxQ"
                content=" Alek - Creating Academy, Dev, and Black Pearl Capstone machines and a Discord Admin Dewalt - The one man Army of a five star support team.
                Dwight - Discord Admin and awesome hacker.  "
                course="ETHICAL HACKING P1"
                title="ETHICAL HACKING"
              />
              <Tutorial
                url="https://www.youtube.com/embed/qwA6MmbeGNo"
                content=" Hi everyone! I hope you enjoyed this video.  Please do consider subscribing so we can continue making awesome hacking content!  Below is all of the course info: "
                course="ETHICAL HACKING"
                title="OPEN SOURCE INTELLIGENCE"
              />
              <Tutorial
                url="https://www.youtube.com/embed/ncBblM920jw"
                content=" I hope you enjoyed this video.  Please do consider subscribing so we can continue making awesome hacking content!  You can find more awesome content and courses at "
                course="ETHICAL HACKING"
                title="Buffer Overflows Made Easy"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
