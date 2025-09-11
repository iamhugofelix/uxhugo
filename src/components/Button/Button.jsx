import { Link } from "react-router";

export default function Button ({label, icon, to, isExternal = false}) {
  return (
    <Link
      to={to}
      className={`btn ${label ? "" : "btn-icon-only"}`}
      style={icon && label && { paddingRight: "0.75rem" }}
    >
      {label && `${label}`}
      {icon && <span>{icon}</span>}
    </Link>
  );
}