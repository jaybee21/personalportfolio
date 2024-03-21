import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const ExperienceCard = ({ company, position, date, description, skills }) => {
  const ref = useRef(null);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const ROTATION_RANGE = 32.5;
  const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rY = mouseX / width - HALF_ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      whileHover={{ scale: 1.05 }}
      className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1"
    >
      <h3 className="text-lg font-medium pt-8 pb-2 text-blue-600 border-b-2 border-blue-600">
        {company}
      </h3>
      <h4 className="py-4 text-blue-600 text-2xl font-semibold border-b-2 border-blue-600">
        {position}
      </h4>
      <h4 className="py-4 text-gray-600 font-medium">
        <span className="text-blue-600">{date}</span>
      </h4>
      <p className="py-2">{description}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {skills.map((skill, index) => (
          <p
            key={index}
            className="text-gray-800 py-1 inline-flex items-center justify-center rounded-full bg-blue-200 px-3"
          >
            {skill}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

// Default props declaration
ExperienceCard.defaultProps = {
  skills: [],
};

export default ExperienceCard;
