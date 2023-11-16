import { useState } from "react";
import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("home");

  const renderSection = () => {
    switch (currentSection) {
      case "home":
        return <HomeSection />;
      case "about":
        return <AboutSection />;
      case "projects":
        return <ProjectsSection />;
      case "skills":
        return <SkillsSection />;
      default:
        return null;
    }
  };

  return (
    <main>
      <Navbar setCurrentSection={setCurrentSection} />
      <div className="container mx-auto flex items-center justify-center">
        {renderSection()}
      </div>
    </main>
  );
}
