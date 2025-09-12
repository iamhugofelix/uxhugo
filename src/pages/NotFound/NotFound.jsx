import { ArrowLeft } from "lucide-react";
import Button from "../../components/Button/Button";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";

export default function NotFound () {
  return (
    <div className="not-found-page">
      <SectionWrapper topBorder={true} bottomBorder={true}>
        <div className="not-found-content">
          <img src="src/assets/images/not-found.png" alt="Pile of paper" />
          <div className="not-found-title">
            <h1 className="text-dark bold">
              Seems like this page didn't make the final cut!
            </h1>
            <p>
              Don’t worry — head back to the portfolio and check out the
              projects that did.
            </p>
          </div>
          <Button to={"/"} icon={<ArrowLeft />} label={"Back Homepage"} />
        </div>
      </SectionWrapper>
    </div>
  );
}