import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="about" className={darkMode === true ? "bg-white" : "bg-gray-900"}>
      <div className="max-w-7xl mx-auto px-0 md:mt-0 pt-24 pb-12">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          About Me
        </h2>
        <div>
          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              A bit about me
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              I am a highly proactive and motivated full- stack developer who focuses on translating designs into high-quality code and implementing 
              highly responsive user interface components with the JavaScript framework and integrating user-facing elements with server-side logic.
              I am comfortable working on large-scale distributed systems and client-facing, single-page web apps.
              Always looking for challenging learning opportunities, I explored the machine learning space and tried to write a fast and efficient 
              recommender system still serving end users today.  Also, I am a creative problem solver who has consistently completed projects on time 
              and within budget, delivering outstanding work.
            </p>
          </motion.div>
          <motion.div
          >
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              Technologies and Tools
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              Using a combination of cutting-edge technologies and reliable
              open-source software I build user-focused, performant apps and
              websites for smartphones, tablets, and desktops.
            </p>
          </motion.div>
          <motion.div className="mt-8 justify-between ">
            {techStack.map((el, ind) => (
              <motion.div
                key={ind}
                className=""
              >
                <motion.h4 className="text-lg font-medium">
                  {el.name}
                </motion.h4>
                <motion.div className="flex flex-wrap ">
                  {
                    el.categories.map((category, index) => {
                      return <motion.div
                        key={index}
                        initial="hidden"
                        whileInView={"visible"}
                        variants={{
                          visible: {
                            y: 0,
                            opacity: 1,
                            transition: {
                              type: "spring",
                            },
                          },
                          hidden: { opacity: 1, y: 80 },
                        }}
                        className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
                      >
                        <img alt="" src={category.link} className="w-12" />
                        <h4 className="text-md ml-4">{category.name}</h4>
                      </motion.div>
                    })
                  }
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
