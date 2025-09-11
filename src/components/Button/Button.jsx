import { Link } from "react-router";

export default function Button ({label, icon, to, isExternal = false, className}) {
  return (
    <Link
      to={to}
      className={`btn ${label ? "" : "btn-icon-only"} ${className}`}
      style={icon && label && { paddingLeft: "0.75rem" }}
    >
      {icon && <span>{icon}</span>}
      {label && `${label}`}
    </Link>
  );
}