import { Outlet } from "react-router";
import "./index.scss";
export function Layout() {
  return (
    <div className="layout_container">
      <Outlet />
    </div>
  );
}
