import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const ExperienceSection = ({ experienceInView }) => {
  return (
    <motion.section
      className="relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: experienceInView ? 1 : 0,
        y: experienceInView ? 0 : 20,
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="mt-20">
        <div className="text-center">
          <motion.div
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-4xl md:text-6xl font-semibold">
  <span style={{ fontSize: "2rem" }}>Experience</span>
</h3>

          </motion.div>
        </div>
        <div className="lg:flex gap-10">
          <ExperienceCard
            company="Champions Insurance"
            position="Systems Developer"
            date="2023 - Present"
            description="Participated in building a web application for a leading insurance company, with a focus on user experience and design."
            skills={["Angular", "HTML", "CSS", "JS", "TS", "Spring Boot", "Mysql","PHP","keycloack", "Kubernetes","GCP","Docker"]}
          />
          <ExperienceCard
            company="App Cake Hong Kong"
            position="Jnr Software Developer"
            date="2022 - 2023"
            description="Participated in building web applications for clients, with a focus on user experience, accessibility, and design."
            skills={["Angular", "HTML", "CSS", "JS", "TS", "Spring Boot", "React", "Next JS","jenkins", "GCP","Docker"]}
          />
          <ExperienceCard
            company="ZUPCO"
            position="IT internship"
            date="2022 - 2023"
            description="Participated in networking , security and building web applications for the company, maintaining software for the company."
            skills={["Angular", "HTML", "CSS", "JS", "TS", ".Net", "Mysql", "Springboot"]}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
