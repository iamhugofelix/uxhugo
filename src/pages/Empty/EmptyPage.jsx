import NotePad from "../../components/NotePad/NotePad";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";

export default function EmptyPage () {
  return (
    <div
      className="empty-page-layout"
      style={{
        height: "80vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap:'2rem',
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Page content...</h1>

      <NotePad />
    </div>
  );
}