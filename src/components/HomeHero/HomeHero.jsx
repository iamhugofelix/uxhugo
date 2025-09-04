import SectionWrapper from "../SectionWrapper/SectionWrapper";

export default function HomeHero() {
  return (
    <>
      <SectionWrapper>
        <div className="hero-home">
          <div className="avatar">
            <img src="./images/hugo.jpg" alt="#" />
          </div>
          <div className="hero-content">
            <h1 className="bold text-dark">
              I’m Hugo, a digital product designer, curious builder, and
              occasional front-end dabbler.{" "}
              <span className="heading regular text-light">
                Always trying to design stuff that get people go “yep, this is
                cool.”
              </span>
            </h1>
            <p>
              Originally from Portugal, currently designing at{" "}
              <a href="https://prezly.com">Prezly</a>, and spending my free time{" "}
              <a href="https://github.com/iamhugofelix">learning to code</a>.
              Since 2015, I’ve designed for SaaS platforms, e-commerce brands,
              and physical products.
            </p>
          </div>
          {/* Copy email will go here */}
        </div>
      </SectionWrapper>
    </>
  );
}
