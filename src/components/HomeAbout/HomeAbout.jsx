import SectionWrapper from "../SectionWrapper/SectionWrapper";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import { Link } from "react-router";

export default function HomeAbout () {
  return (
    <SectionWrapper>
      <div className="home-about">
        <div className="about-content">
          <h1 className="bold text-dark">
            I’ve been designing since 2015 — brands, products, and sometimes
            things you can actually hold.
          </h1>
          <p>
            Currently, I work at Prezly, on everything from small UI details to
            big product overhauls. Some of the work I’m most proud of includes
            improving the sign-up flow (20% fewer drop-offs), rebuilding the
            entire UI, and redesigning the marketing site (which turned a 0.5%
            conversion rate into almost 2%). Quiet tweaks that made a loud
            difference.
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
        <p>
          Before Prezly, the path here wasn’t exactly straight. In high school I
          picked a product design course (back when it was still called
          “industrial design”), then went on to study it at university. Pretty
          quickly I realized I cared more about pixels than pieces, so I dropped
          out.
        </p>
      </div>
      <Link to={'/about'}>
      Read more
      </Link>
    </SectionWrapper>
  );
}


