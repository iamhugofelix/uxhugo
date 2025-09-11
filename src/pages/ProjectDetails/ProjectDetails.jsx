import { useParams } from "react-router";
import ContactSection from "../../components/ContactSection/ContactSection";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import { fetchPhotoDetails } from "../../services/fetchPhotos";
import { useEffect, useState } from "react";
import { Album, Camera, Loader, ThumbsUp } from "lucide-react";
import Button from "../../components/Button/Button";
import { IconBrandInstagram, IconBrandX } from "@tabler/icons-react";

export default function ProjectDetails() {
  const {id} = useParams()
  const [image, setImage] = useState(null);

  useEffect(() => {
    const getPhotos = async () => {
      const photos = await fetchPhotoDetails(id);
      setImage(photos);
    };
    getPhotos();
  }, []);

  if (!image) {
    return (
      <div>
        <p>Loading...</p>
        <Loader />
      </div>
    )
  }
  
  console.log(image);

  return (
    <div className="page-layout">
      <SectionWrapper topBorder={true}>
        <div className="project-header">
          <div className="project-metadata">
            <span>{image.created_at.slice(0, 4)}</span>
            <span>
              <span>&middot;</span>
              {image.user.name.length > 4
                ? image.user.name
                : image.user.username}
            </span>
            {image.exif.name && (
              <span>
                <span>&middot;</span>
                {image.exif.name
                  .toLowerCase()
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
              </span>
            )}
          </div>
          <div className="project-title">
            <h1 className="text-dark bold">
              {image.alt_description || "Untitled Photo"}
            </h1>
            <p>{image.location.name || "Unknown Location"}</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper topBorder={true} bottomBorder={true}>
        <div className="project-featured-image">
          <img
            src={image.urls.regular}
            alt={image.alt_description || "Untitled Photo"}
          />
        </div>
      </SectionWrapper>

      <SectionWrapper topBorder={true} bottomBorder={true}>
        <div className="project-user">
          <h2 className="headings text-dark bold">Author</h2>
          <div className="user-info">
            <div className="user-details">
              <div className="user-image">
                <img
                  src={image.user.profile_image.medium}
                  alt={image.user.name}
                />
              </div>
              <div className="user-name">
                <p className="text-md text-dark bold">
                  {image.user.name.length > 4
                    ? image.user.name
                    : image.user.username}
                </p>
                <p className="text-md">{image.user.location}</p>
              </div>
            </div>
          </div>
          <div className="user-extra-details">
            {image.user.bio && <p>{image.user.bio}</p>}
            <div className="user-analytics">
              <div className="data-item">
                <ThumbsUp />
                <span>{image.user.total_likes}</span>
              </div>
              <div className="data-item">
                <Camera />
                <span>
                  {image.user.total_photos || image.user.illustrations}
                </span>
              </div>
              <div className="data-item">
                <Album />
                <span>{image.user.total_collections}</span>
              </div>
              {image.user.twitter_username && (
                <div className="data-item">
                  <IconBrandX />
                  <a href={`https://x.com/${image.user.twitter_username}`}>
                    {`@${image.user.twitter_username}`}
                  </a>
                </div>
              )}
              {image.user.instagram_username && (
                <div className="data-item">
                  <IconBrandInstagram />
                  <a
                    href={`https://instagram.com/${image.user.instagram_username}`}
                  >
                    {`@${image.user.instagram_username}`}
                  </a>
                </div>
              )}
            </div>
            <div className="user-actions">
              <a className="btn" href={image.user.links.html} target="_blank">
                View author on Unsplash
              </a>
              <a className="btn" href={image.links.download} target="_blank">
                Download Image
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper addPadding={true} bottomBorder={true}>
        <svg
          className="arrows"
          xmlns="http://www.w3.org/2000/svg"
          width="66"
          height="106"
          viewBox="0 0 66 106"
          fill="none"
        >
          <path
            d="M45.6543 4.44956C35.3853 7.6769 21.564 12.2904 28.8626 25.3682C31.1984 29.5535 44.284 39.7235 40.7124 45.4604C36.467 52.2796 24.9298 50.8569 34.4235 59.6784C35.7459 60.9072 40.5968 64.6909 40.3457 66.8761C40.0783 69.2032 33.9989 70.9402 32.2858 72.3132C29.8937 74.2304 31.8358 78.5418 33.0706 80.5069C35.9127 85.0302 34.7838 87.1803 31.7205 90.8543C28.3185 94.9344 29.5028 97.7088 30.2091 102.384C30.4561 104.019 30.5474 105.511 32.2518 103.83C32.919 103.173 36.7208 98.608 34.8469 100.102C33.2917 101.342 32.617 104.222 31.0843 105.079C30.2467 105.547 27.7661 101.511 26.7235 100.606C25.9069 99.8978 23.899 98.7991 23.788 97.9447"
            stroke="#4A5565"
            strokeLinecap="round"
          />
        </svg>
      </SectionWrapper>

      <SectionWrapper bottomBorder={true}>
        <ContactSection />
      </SectionWrapper>
    </div>
  );
}
