import ContactSection from "../../components/ContactSection/ContactSection";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import { fetchArtwork } from "../../services/fetchArtwork";

fetchArtwork();

export default function ProjectDetails() {
  return (
    <div className="page-layout">
      <SectionWrapper topBorder={true}>
        <div className="project-header">
          <div className="project-metadata">
            <span>2025</span>
            <span>&middot;</span>
            <span>Case Study</span>
            <span>&middot;</span>
            <span>10 min read</span>
          </div>
          <div className="project-title">
            <h1 className="text-dark bold">This is the project title</h1>
            <p>This is the description</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper topBorder={true} bottomBorder={true}>
        <div className="project-featured-image">
          <img src="public/images/test-3.jpg" alt="" />
        </div>
      </SectionWrapper>

      <SectionWrapper topBorder={true} bottomBorder={true}>
        <div className="project-body">
          <p>This is the body content...</p>
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

      <ContactSection />
    </div>
  );
}
