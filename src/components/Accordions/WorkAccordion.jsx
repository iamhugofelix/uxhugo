import { Link } from "react-router";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import { ArrowUpRight } from "lucide-react";

const jobs = [
  {
    position: "Product Designer",
    year: "2020 to today",
    company: "Prezly",
    url: "https://prezly.com",
  },
  {
    position: "Marketing & UI/UX Designer",
    year: "2019 to 2020",
    company: "Nomad Legacy",
    url: "https://nomadlegacy.com",
  },
  {
    position: "Graphic Designer",
    year: "2017 - 2019",
    company: "InfiniteBook",
    url: "https://infinitebook.com",
  },
  {
    position: "Founder & Product Owner",
    year: "2015 to 2020",
    company: "EzyCities / Workshoped",
    url: "https://workshoped.com",
  },
];

export default function WorkAccordion () {

  return (
    <div className="accordion">
      {jobs.map((job) => {
        return (
          <div className="accordion-content" key={job.company}>
            <h3 className="text-lg text-dark">{job.position}</h3>
            <span>&middot;</span>
            <span className="text-lg">{job.year}</span>
            <span>&middot;</span>
              <Link
                to={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg regular work-position"
              >
                {job.company}
                <ArrowUpRight />
              </Link>
            </div>
        );
      })}
    </div>
    
  );
}