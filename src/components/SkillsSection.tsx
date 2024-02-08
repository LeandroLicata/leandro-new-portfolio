import React from "react";
import IconGrid from "./IconGrid";
import { motion } from "framer-motion";

const SkillsSection = () => {
  return (
    <section>
      <div className="skills-section skills-content-card text-light-blue p-3 overflow-auto">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="pl-8 text-lg pb-5 text-blue-neon"
        >
          Mi stack de tecnologías:
        </motion.h1>
        <IconGrid />
      </div>
    </section>
  );
};

export default SkillsSection;
