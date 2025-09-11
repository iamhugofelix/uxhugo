import SectionWrapper from "../SectionWrapper/SectionWrapper";

const courses = [
  {
    name: "Front-end Engineer",
    year: "2025",
    school: "EDIT Digital School",
  },
  {
    name: "Product Design Management Workshop",
    year: "2021",
    school: "EDIT Digital School",
  },
  {
    name: "UI/UX Design",
    year: "2020",
    school: "EDIT Digital School",
  },
  {
    name: "Industrial Design",
    year: "2012",
    school: "ESEIG (University of Porto)",
  },
];

export default function EducationAccordion () {

  return (
    <div className="accordion">
      {courses.map((course) => {
        return (
            <div className="accordion-content" key={course.name}>
              <div className="main-info">
                <h3 className="text-lg text-dark">{course.name}</h3>
                <span>&middot;</span>
                <span className="text-lg">{course.year}</span>
              </div>
              <span className="mobile-hide">&middot;</span>
              <span className="text-lg">{course.school}</span>
            </div>
        );
      })}
    </div>
    
  );
}