import { Outlet } from "react-router";

export function Layout() {
  return (
    <div className="main_container">
      <Outlet />
    </div>
  );
}
