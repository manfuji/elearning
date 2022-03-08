import Image from "next/image"
import Tutorial from "../components/cards/Tutorial"

function courses() {
    return (
        <div className="">
             <div className="relative block h-[300px] w-full mb-8">
            <Image
              src={require("../public/assets/bg.jpg").default}
              className="absolute w-full bg-cover z-10 object-center"
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className="absolute top-28 md:top-28 w-full flex justify-center ">
            <div className="bg-gray-50 z-50 opacity-95 h-80 container max-w-7xl rounded justify-center items-center flex flex-col text-blue-900">
              <div className="text-lg md:text-3xl font-bold tracking-widest rounded-md uppercase bg-gradient-to-r from-blue-600 text-white to-green-500 py-2 px-8 opacity-100 transition-all  duration-100 hover:scale-105 transform">
                Our Courses
              </div>
              <blockquote className="mt-5 px-2  text-center uppercase">
              
              <div className="text-sm text-center text-gray-600 mb-5">
          <p className="font-bold text-blue-600  text-lg "> Enjoy the Excellence of the Courses</p>
          
          
        </div>
              </blockquote>
            </div>
          </div>
        <section className="bg-gray-50 rounded h-full mb-10 max-w-5xl mt-40 mx-auto text-gray-900 p-6 md:p-10">
            <h1 className="font-bold text-3xl tracking-wider font-sans text-center text-blue-600 uppercase">
              Graphic Design COURSES
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
          <section className="bg-gray-50 rounded h-full mb-10 max-w-5xl mt-10 mx-auto text-gray-900 p-6 md:p-10">
            <h1 className="font-bold text-3xl tracking-wider font-sans text-center text-blue-600 uppercase">
              Web Design COURSES
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
          <section className="bg-gray-50 rounded h-full mb-10 max-w-5xl mt-10 mx-auto text-gray-900 p-6 md:p-10">
            <h1 className="font-bold text-3xl tracking-wider font-sans text-center text-blue-600 uppercase">
              Photography COURSES
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
        </div>
    )
}

export default courses
