import { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import { fetchRandomPhotos } from "../../services/fetchPhotos";


export default function ProjectsList () {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getPhotos = async () => {
      const photos = await fetchRandomPhotos(1, 3);
      setImages(photos);
    };
    getPhotos();
  }, []);

  return (
    <div className="projects-list">
      {images.map((image) => {
        return (
          <SectionWrapper topBorder={true} bottomBorder={true} key={image.id}>
            <ProjectCard
              year={image.created_at.slice(0, 4)}
              type={image.user.name.length > 4 ? image.user.name : image.user.username}
              title={image.alt_description || "Untitled Photo"}
              img={image.urls.regular}
              url={`/projects/${image.id}/${image.slug}`}
            />
          </SectionWrapper>
        );
      })}
      <SectionWrapper bottomBorder={true}>
        <div className="coming-soon">
          <p className="text-md italic">More Projects Soon...</p>
        </div>
      </SectionWrapper>
    </div>
  );
}