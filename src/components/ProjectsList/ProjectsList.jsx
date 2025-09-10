import ProjectCard from "../ProjectCard/ProjectCard";
import SectionWrapper from "../SectionWrapper/SectionWrapper";

export default function ProjectsList () {
  return (
    <div className="projects-list">
      <SectionWrapper topBorder={true} bottomBorder={true}>
        <ProjectCard
          year={"2025"}
          type={"Case Study"}
          title={"This is the project title"}
          img={"/images/test-1.jpg"}
        />
      </SectionWrapper>
      <SectionWrapper topBorder={true} bottomBorder={true}>
        <ProjectCard
          year={"2025"}
          type={"Case Study"}
          title={"This is the project title"}
          img={"/images/test-2.jpg"}
        />
      </SectionWrapper>
      <SectionWrapper topBorder={true} bottomBorder={true}>
        <ProjectCard
          year={"2025"}
          type={"Case Study"}
          title={"This is the project title"}
          img={"/images/test-3.jpg"}
        />
      </SectionWrapper>
      <SectionWrapper bottomBorder={true}>
        <div className="coming-soon">
          <p className="text-md italic">More Projects Soon...</p>
        </div>
      </SectionWrapper>
    </div>
  );
}