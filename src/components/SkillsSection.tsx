import React from "react";
import IconGrid from "./IconGrid";

const SkillsSection = () => {
  return (
    <section>
      <div className="skills-section skills-content-card text-light-blue p-3 overflow-auto">
        <h1 className="pl-8 text-lg pb-5 text-blue-neon">Mi stack de tecnologías:</h1>
        <IconGrid />
      </div>
    </section>
  );
};

export default SkillsSection;
