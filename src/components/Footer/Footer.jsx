import { Link } from "react-router";
import SectionWrapper from "../SectionWrapper/SectionWrapper";

export default function Footer () {
  return (
    <>
      <div className="footer-wrapper">
        <svg
          viewBox="0 0 84 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="signature"
        >
          <path
            d="M24.735 1.60645C24.542 2.37857 24.349 3.15069 22.1262 9.33937C19.9034 15.5281 15.6567 27.1099 12.89 34.524C10.1232 41.9382 8.96501 44.8336 7.77173 47.2319M42.8682 4.53125C39.3936 13.7967 35.9191 23.0622 33.357 30.9238C30.795 38.7854 30.176 40.0509 28 47M1.33734 26.1743C2.88159 26.1743 6.57257 25.7882 16.1715 25.2033C33.268 24.1614 43.845 25.5835 43.5526 26.8469C43.3966 27.5207 43.4531 28.3034 43.7427 28.8942C44.0322 29.485 44.6113 29.8711 45.1992 30.07C46.3205 30.4493 47.9279 29.3037 49.3903 28.2274C50.0564 27.7371 50.4666 30.07 51.6335 30.5584C53.8827 31.4998 56.3102 28.3268 58.6528 27.9291C60.9936 27.5316 63.3295 29.099 64.9936 28.125C65.2941 27.9492 64.5198 29.1978 64.5198 35.273C64.5198 35.515 64.5195 35.7556 64.5188 35.9948M64.5188 35.9948C64.475 52.2875 62.9232 62.0149 57.6935 63.0314C51.7216 64.1922 52.5 54 54.2716 47.9312C55.691 43.069 60.7918 38.8361 64.5188 35.9948ZM64.5188 35.9948C66.0121 34.8564 67.2849 33.9414 68.0119 33.2988C70.2506 31.3203 72.1094 30.0758 73.2764 29.8799C73.8561 29.7825 74.4433 30.07 74.8382 30.459C75.233 30.8479 75.426 31.427 75.815 31.8219C76.204 32.2167 76.7831 32.4097 77.371 32.4127C77.9588 32.4156 78.5379 32.2226 78.9328 31.8336C79.7396 31.0387 79.7195 29.6898 79.43 28.6193C79.2811 28.0688 78.5613 27.7419 78.5526 27.157C78.5438 26.572 79.1229 25.7999 79.7107 25.3056C80.2986 24.8113 80.8777 24.6183 82.6442 24.4194"
            stroke="#4A5565"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>

        <div className="footer-content">
          <span>
            Designed in <Link to={"https://figma.com"}>Figma</Link>
          </span>
          <span className="mobile-hide">&middot;</span>
          <span>
            Built in{" "}
            <Link to={"https://github.com/iamhugofelix/uxhugo"}>React</Link>
          </span>
          <span className="mobile-hide">&middot;</span>
          <span>
            Hosted at <Link to={"https://vercel.com"}>Vercel</Link>
          </span>
        </div>

        <div className="footer-copyright">
          <span>
            © 2025 Hugo Felix. All rights reserved. Please do not reproduce or
            use any content without permission.
          </span>
        </div>
      </div>
    </>
  );
}