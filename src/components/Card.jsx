import React from "react";
import { motion } from "framer-motion";

const Card = (project) => {
  console.log("project.", project.project);
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
    >
      <a href="/">
        <img
          className="rounded-t-lg w-full p-5 rounded-3xl"
          src={project.project.imgUrl[0]}
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="/">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {project.project.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {project.project.description}
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
