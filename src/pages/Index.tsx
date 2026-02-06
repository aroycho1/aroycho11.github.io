import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import OpEdSection from "@/components/sections/OpEdSection";
import AboutSection from "@/components/sections/AboutSection";
import EducationSection from "@/components/sections/EducationSection";
import ConferencesSection from "@/components/sections/ConferencesSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import StatsDashboard from "@/components/sections/StatsDashboard";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ProjectsSection />
        <OpEdSection />
        <AboutSection />
        <EducationSection />
        <ConferencesSection />
        <SkillsSection />
        <ExperienceSection />
        <StatsDashboard />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
