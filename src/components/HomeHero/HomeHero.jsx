import { Link } from "react-router";
import CopyToClipboard from "../CopyToClipboard/CopyToClipboard";
import SectionWrapper from "../SectionWrapper/SectionWrapper";

export default function HomeHero() {
  return (
    <>
      <div className="hero-home">
        <div className="avatar">
          <img src="./images/hugo.jpg" alt="#" />
        </div>
        <div className="hero-content">
          <h1 className="bold text-dark">
            I’m Hugo, a digital product designer, a curious builder, and
            sometimes a front-end tinkerer.
            <span className="heading regular text-light">
              {""} My goal? Design things that make people say, “yep, this is
              cool.”
            </span>
          </h1>
          <p>
            Born and raised in Portugal, I’m currently helping{" "}
            <Link to="https://prezly.com">Prezly</Link> become the best PR tool
            out there and picking up{" "} <Link to="https://github.com/iamhugofelix">coding skills</Link>{" "}
            in my spare time. Since 2015, I’ve worked on everything from SaaS
            platforms and e-commerce sites to products you can actually hold.
          </p>
        </div>
        <CopyToClipboard text={"hey@uxhugo.com"} />
      </div>
    </>
  );
}
