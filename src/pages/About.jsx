import SectionWrapper from "../components/SectionWrapper/SectionWrapper";
import PhotoGallery from "../components/PhotoGallery/PhotoGallery";
import EducationAccordion from "../components/Accordions/EducationAccordion";
import WorkAccordion from "../components/Accordions/WorkAccordion";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import DownloadCard from "../components/DownloadCard/DownloadCard";
import ContactSection from "../components/ContactSection/ContactSection";

export default function About() {
  return (
    <div className="page-layout">
      <SectionWrapper>
        <div className="home-about">
          <div className="about-content">
            <h1 className="bold text-dark">
              I’ve been designing since 2015 — brands, products, and sometimes
              things you can actually hold.
            </h1>
            <p>
              Currently, I work at Prezly, on everything from small UI details
              to big product overhauls. Some of the work I’m most proud of
              includes improving the sign-up flow (20% fewer drop-offs),
              rebuilding the entire UI, and redesigning the marketing site
              (which turned a 0.5% conversion rate into almost 2%). Quiet tweaks
              that made a loud difference.
            </p>
          </div>

          <div className="about-gallery">
            <PhotoGallery
              className={"about-gallery"}
              firstImage={"/images/test-1.jpg"}
              secondImage={"/images/test-2.jpg"}
              thirdImage={"/images/test-3.jpg"}
              fourthImage={"/images/test-4.jpg"}
            />
          </div>

          <div className="about-content">
            <p>
              Before Prezly, the path here wasn’t exactly straight. In high
              school I picked a product design course (back when it was still
              called “industrial design”), then went on to study it at
              university. Pretty quickly I realized I cared more about pixels
              than pieces, so I dropped out.
            </p>
            <p>
              For a while, I worked odd jobs — bartender, cook, hostel
              receptionist — until I found my way back to design by starting
              EzyCities (2015–2017), a marketplace for local experiences. It was
              the first time I got to fully design and ship a digital product.
            </p>
            <p>
              Next came Workshoped (2017–2020), an online shop selling
              “workshops in a box.” I built the brand and product design, and
              eventually sold the company. Around the same time, I was creative
              director at Infinitebook, where I led the design of their
              best-selling collection, and later lead designer at Nomad Legacy,
              a marketing agency.
            </p>
            <div className="callout">
              <p className="title text-dark bold ">Work Experience</p>
              <p>
                A zig-zag journey through design, tech, and code — here’s the
                story of the courses that shaped how I work today.”
              </p>
              <WorkAccordion />
            </div>
          </div>

          <div className="about-content">
            <p>
              On the side, I help my wife with External Pixel, our small studio
              for side projects we care about — like creating the brand and
              website for Geridoc, a geriatric clinic where accessibility was
              the main challenge.
            </p>
            <p>
              More recently, I’ve been learning to code — mostly JavaScript and
              React. It’s equal parts fun and painful, but it’s already changing
              the way I design by helping me understand what’s actually possible
              to build.
            </p>
            <div className="callout">
              <p className="title text-dark bold ">Education</p>
              <p>
                A zig-zag journey through design, tech, and code — here’s the
                story of the courses that shaped how I work today.”
              </p>
              <EducationAccordion />
            </div>
          </div>

          <div className="about-content">
            <p>
              Outside of work, I’m a husband, dad of two wild daughters, season
              ticket holder at FC Porto, and a BBQ enthusiast. I’ve lived in
              four countries so far, and I’m still curious about the next one.
            </p>
          </div>

          <div className="about-gallery">
            <PhotoGallery
              className={"about-gallery"}
              firstImage={"/images/test-1.jpg"}
              secondImage={"/images/test-2.jpg"}
              thirdImage={"/images/test-3.jpg"}
              fourthImage={"/images/test-4.jpg"}
            />
          </div>
        </div>
      </SectionWrapper>
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
      <DownloadCard />
      <svg
        className="arrows"
        xmlns="http://www.w3.org/2000/svg"
        width="126"
        height="58"
        viewBox="0 0 126 58"
        fill="none"
      >
        <path
          d="M120.043 8.85489C116.077 27.8052 110.456 51.2847 97.0658 21.615C85.2424 -4.583 78.8385 11.7213 74.0417 30.1188C72.6061 35.6246 69.9086 44.5822 65.8426 43.5663C62.0518 42.6192 56.5525 31.2733 52.6223 27.5613C44.487 19.8775 37.0614 35.7015 31.9173 41.3698C24.3915 49.6624 17.3798 57.2807 7.47071 56.4112"
          stroke="#4A5565"
          strokeLinecap="round"
        />
      </svg>
      <ContactSection />
    </div>
  );}
