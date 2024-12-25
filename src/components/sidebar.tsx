import { Link } from "@tanstack/react-router";

export function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <h1>WordHoard</h1>
        <Link to="/writer">
          <p>Writer</p>
        </Link>
        <Link to="/stats">
          <p>Stats</p>
        </Link>
        <Link to="/practice">
          <p>Practice</p>
        </Link>
        <Link to="/settings">
          <p>Settings</p>
        </Link>
      </div>
    </div>
  );
}
