import { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import { fetchArtwork } from "../../services/fetchArtwork";


export default function ProjectsList () {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getArtworks = async () => {
      const artworks = await fetchArtwork(1, 3);
      setProjects(artworks);
    }
    getArtworks()
  }, []);

  console.log(projects);

  return (
    <div className="projects-list">
      {projects.map((project) => {

        return (
          <SectionWrapper topBorder={true} bottomBorder={true}>
            <ProjectCard
              key={project.id}
              year={project.date_end}
              type={project.artist_title}
              title={project.title}
              // img={`https://www.artic.edu/iiif/2/${image.regular}/full/843,/0/default.jpg`}
            />
          </SectionWrapper>
        );

      })}

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