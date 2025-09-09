import SectionWrapper from "../components/SectionWrapper/SectionWrapper";
import PhotoGallery from "../components/PhotoGallery/PhotoGallery";

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
          <p>
            Before Prezly, the path here wasn’t exactly straight. In high school
            I picked a product design course (back when it was still called
            “industrial design”), then went on to study it at university. Pretty
            quickly I realized I cared more about pixels than pieces, so I
            dropped out.
          </p>
          <div className="about-content about-hidden">
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
            <div className="about-experience">
              <ul>
                <li>Prezly</li>
                <li>Nomad Legacy</li>
                <li>InfiniteBook</li>
                <li>EzyCities/Workshoped</li>
              </ul>
            </div>
            <p>
              On the side, I help my wife with Externa Pixel, our small studio
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
            <div className="about-education">
              <ul>
                <li>Edit</li>
                <li>Edit</li>
                <li>ESEIG</li>
              </ul>
            </div>
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
            Outside of work, I’m a husband, dad of two wild daughters, season
            ticket holder at FC Porto, and a BBQ enthusiast. I’ve lived in four
            countries so far, and I’m still curious about the next one.
          </p>
        </div>
      </SectionWrapper>
    </div>)}
