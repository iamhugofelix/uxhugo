import PhotoGallery from "../PhotoGallery/PhotoGallery";
import Button from "../Button/Button";
import { useState } from "react";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import WorkAccordion from "../Accordions/WorkAccordion";
import EducationAccordion from "../Accordions/EducationAccordion";
import DownloadCard from "../DownloadCard/DownloadCard";
import { Link } from "react-router";

export default function HomeAbout () {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <SectionWrapper topBorder={true} bottomBorder={!expanded && true}>
        <div className="about-content">
          <h1 className="bold text-dark">
            I’ve spent the past ten years designing—brands, digital products,
            and sometimes things you can actually hold.
          </h1>
          <p>
            As mentioned before, I’m currently at{" "}
            <Link to="https://prezly.com">Prezly</Link>, working on everything
            from tiny UI tweaks to major product overhauls. Some highlights of
            the past 5 years are: Improving the sign-up flow (which led to +20%
            sign-up completion rate), rebuilding the entire UI, and redesigning
            the marketing site—taking our conversion rate from 0.5% to almost
            2%. Quiet changes, but they made a big impact, just they way I love
            it.
          </p>
        </div>

        <div className="about-gallery">
          <PhotoGallery
            firstImage={"/images/about-1.jpeg"}
            secondImage={"/images/about-3.jpeg"}
            thirdImage={"/images/about-2.jpeg"}
            fourthImage={"/images/about-4.jpeg"}
          />
        </div>

        <div className="about-content expanded-bottom">
          <p>
            Before Prezly, my journey took a few detours. I started with a
            product design course in high school (now 'industrial design' since
            the digital world took the name from it), then went on to
            university, only to realize I was more interested in pixels than
            physical pieces — so I dropped out.
          </p>

          {!expanded && (
            <div className="read-more">
              <a className="btn" onClick={() => setExpanded(true)}>
                {" "}
                Read more
              </a>
            </div>
          )}
        </div>
      </SectionWrapper>

      {expanded && (
        <>
          <SectionWrapper>
            <div className="about-content expanded-top">
              <p>
                For a while, I worked all sorts of odd jobs: bartender, cook,
                hostel receptionist which has shown me the real world.
                Eventually, I circled back to design by starting EzyCities
                (2015–2017), a marketplace for local experiences. It eventually
                died, but this was my first time fully designing and launching a
                digital product.
              </p>
              <p>
                From the ashes of EzyCities, came Workshoped (2017–2020) - a
                "part-time venture" that was basically an online store selling
                “workshops in a box.” I built the brand and product (both
                physical and digital) design, and eventually sold the company in
                2020.
              </p>
              <p>
                While I was running Workshoped I started working as a Graphic
                Designer at{" "}
                <Link to="https://infinitebook.com">InfiniteBook</Link>{" "}
                (2017-2019) where I designed their ever best-selling collection.
              </p>
              <p>
                Right after InfiniteBook, and right before Prezly, I've spent
                around one and a half year helping{" "}
                <Link to="https://nomadlegacy.com">Nomad Legacy</Link> design
                digital experiences for their marketing clients.
              </p>
            </div>
          </SectionWrapper>
          <SectionWrapper topBorder={true}>
            <div className="about-content callout">
              <p className="title text-dark bold ">Work Experience</p>
              <p>
                My career has taken a few twists and turns, but each step taught
                me something new.
              </p>
              <WorkAccordion />
            </div>
          </SectionWrapper>
          <SectionWrapper topBorder={true}>
            <div className="about-content">
              <p>
                On the side, I (when the time allows) team up with my wife at
                External Pixel, our small studio for side projects that matter
                to us — like building the brand and website for Geridoc, a
                geriatric clinic where accessibility was front and center.
              </p>
              <p>
                More recently, I’ve started learning to code (JavaScript,
                Typescript and React). It’s both rewarding and tough, but it’s
                already changing the way I approach design by helping me
                understand what can really be built and doing some working
                prototypes.
              </p>
            </div>
          </SectionWrapper>
          <SectionWrapper topBorder={true}>
            <div className="about-content callout">
              <p className="title text-dark bold ">Education</p>
              <p>
                Here’s a quick look at the courses and experiences that have
                shaped how I think and work today.
              </p>
              <EducationAccordion />
            </div>
          </SectionWrapper>
          <SectionWrapper topBorder={true}>
            <div className="about-content">
              <p>
                Because life is not only work. Outside the office, I’m a
                husband, a proud dad of two beautiful girls (like their mother),
                a season ticket holder at FC Porto, and a BBQ enthusiast.
              </p>
              <p>
                Books are a big part of my life too. My favourite design read is
                <Link to="https://www.goodreads.com/book/show/41940285-user-friendly">
                  User Friendly
                </Link>{" "}
                by Cliff Kuang and Robert Fabricant, and at the moment, I’m
                diving into{" "}
                <Link to="https://www.goodreads.com/book/show/52879286-humankind">
                  Humankind
                </Link>{" "}
                by Rutger Bregman — highly recommended if you like stories about
                what brings people together.
              </p>
            </div>
          </SectionWrapper>
          <SectionWrapper topBorder={true} bottomBorder={true}>
            <DownloadCard />
          </SectionWrapper>
        </>
      )}
    </>
  );
}


