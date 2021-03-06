import {
  BriefcaseIcon,
  ChevronDoubleDownIcon,
  HomeIcon,
  InformationCircleIcon,
  MapIcon,
} from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
//   import { appState } from "../../components/context/Context";
import image from '../../public/assets/bg.jpg';
export default function Profile() {
  //   const {user,dispatch} = appState()
  return (
    <>
      <main className="">
        <section className="relative block h-[500px]">
          <Image
            src={require('../../public/assets/profile.jpg').default}
            className="absolute top-0 w-full h-full bg-center bg-cover"
            layout="fill"
            objectFit="cover"
          />

          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-20 bg-black"
          ></span>
        </section>

        <section className="relative py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-gray-50 w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <Image
                        alt="Profile"
                        src={require('../../public/assets/profile.jpg').default}
                        className="shadow-xl rounded-full max-w-[70px] h-auto align-middle border-none absolute -mt-16 -top-24 -ml-20 lg:-ml-16"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-gradient-to-r from-blue-600 to-green-500 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded-full outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style={{ transition: 'all .15s ease' }}
                      >
                        Edit Profile
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex flex-col md:flex-row justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          22
                        </span>
                        <span className="text-sm text-gray-500">
                          Pending Courses
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          10
                        </span>
                        <span className="text-sm text-gray-500">
                          Completed Courses
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-lg font-bold block uppercase tracking-wide text-gray-700">
                          Photographer
                        </span>
                        <span className="text-sm text-gray-500 capitalize">
                          my target goal of the year
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row ml-10 ">
                  <div className=" justify-center w-full mt-12 md:w-1/2  mx-auto">
                    <h3 className="text-4xl font-semibold text-gray-700 leading-normal mb-2">
                      Courses
                    </h3>

                    <div className="text-sm items-center flex flex-col leading-normal mt-0 text-gray-500  uppercase">
                      <div className="flex flex-row w-full">
                        <div className="w-20 flex h-20 relative  flex-col">
                          <Image
                            src={
                              require('../../public/assets/profile.jpg').default
                            }
                            className="absolute"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-semibold ml-3 tracking-widest">
                            Graphic Design
                          </span>
                          <span className="ml-3 text-xs tracking-widest">
                            50 minutes
                          </span>
                          <span className=" text-xs ml-3 tracking-widest">
                            5 videos
                          </span>
                        </div>

                        <span className="font-semibold ml-3 tracking-widest bg-green-300 text-green-600 rounded w-28 flex  h-7 text-center px-1.5 py-1">
                          Completed
                        </span>
                      </div>
                      <div className="flex flex-row w-full">
                        <div className="w-20 flex h-20 relative  flex-col">
                          <Image
                            src={
                              require('../../public/assets/profile.jpg').default
                            }
                            className="absolute"
                          />
                        </div>
                        <div className="flex flex-col ">
                          <span className="font-semibold ml-3 tracking-widest">
                            Graphic Design
                          </span>
                          <span className=" ml-3 text-xs tracking-widest">
                            50 minutes
                          </span>
                          <span className=" text-xs ml-3 tracking-widest">
                            5 videos
                          </span>
                        </div>

                        <span className="font-semibold ml-3 tracking-widest bg-red-300 text-red-600 rounded w-28 flex  h-7 text-center px-1.5 py-1">
                          Start now
                        </span>
                      </div>
                      <div className="flex flex-row w-full">
                        <div className="w-20 flex h-20 relative  flex-col">
                          <Image
                            src={
                              require('../../public/assets/profile.jpg').default
                            }
                            className="absolute"
                          />
                        </div>
                        <div className="flex flex-col ">
                          <span className="font-semibold ml-3 tracking-widest">
                            Graphic Design
                          </span>
                          <span className=" text-xs ml-3 tracking-widest">
                            50 minutes
                          </span>
                          <span className=" text-xs ml-3 tracking-widest">
                            5 videos
                          </span>
                        </div>

                        <span className="font-semibold ml-3 tracking-widest bg-sky-300 text-sky-600 rounded w-28 flex  h-7 text-center px-1.5 py-1">
                          Continue
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-12 w-full md:w-1/2">
                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-blue-700">
                      Profile Information
                    </h3>
                    <h3 className="text-3xl font-semibold leading-normal mb-2 text-gray-800">
                      {/* {user?.username} */}
                    </h3>
                    <div className="text-xs items-center flex flex-col leading-normal mt-0 text-gray-500 font-bold uppercase">
                      <MapIcon className="h-8 w-8 text-pink-600 inline-block" />{' '}
                      Greater Accra, Awoshie-Ablekuma
                    </div>
                    <div className="mb-2 flex flex-col items-center  text-gray-700 mt-4">
                      <BriefcaseIcon className="h-8 w-8 text-pink-600 inline-block" />{' '}
                      Manufacturer - Green pepper
                    </div>
                    <div className="mb-2 text-gray-700 items-center flex flex-col">
                      <HomeIcon className="h-8 w-8 text-pink-600 inline-block" />
                      24 warehouses in 12 Country
                    </div>
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <div className="flex flex-col justify-center text-gray-800 text-center items-center mb-8">
                        {/* <InformationCircleIcon className="h-8 w-8 inline-block text-pink-600" /> */}
                        <h1 className="font-bold text-4xl uppercase text-blue-700 ">
                          Biography interest and hobby
                        </h1>
                      </div>
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
