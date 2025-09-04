import HomeHero from "../components/HomeHero/HomeHero";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import ProjectsList from "../components/ProjectsList/ProjectsList";
import SectionWrapper from "../components/SectionWrapper/SectionWrapper";

export default function Home() {
  return (
    <>
      <div className="page-layout">
        <HomeHero />
        <img
          src="src/assets/images/arrow-1.svg"
          alt="Arrow down"
          height="100px"
        />
        <ProjectsList />
      </div>
    </>
  );
}
