import React from "react";
import IconGrid from "./IconGrid";

const SkillsSection = () => {
  return (
    <section>
      <div className="skills-section skills-content-card text-light-blue p-5 overflow-auto text-sm">
        <h1>Mi aplicación de iconos</h1>
        <IconGrid />
      </div>
    </section>
  );
};

export default SkillsSection;
