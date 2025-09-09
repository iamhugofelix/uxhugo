import Button from "../Button/Button";

export default function DownloadCard () {
  return (
    <div className="download-card-wrapper">
      <div className="download-card">
          <h3 className="text-lg text-dark bold"> Wanna keep a copy?</h3>
          <p>
            I've spent over 10 years helping companies turn vision to reality, and
            design to competitive advantage.
          </p>
          <a href="/files/hugo-cv.pdf" download className="btn">Download CV</a>
      </div>
    </div>
  );
}