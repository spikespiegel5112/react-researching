import { Outlet } from "react-router";
import "./index.scss";
import { useEffect } from "react";
import utils from "@//utils/utils.ts";

export default function Layout() {
  useEffect(() => {
    utils.$remResizing({
      baseline: 320,
      fontSize: 30,
      threshold: 640,
    });
  }, []);

  return (
    <div className="layout_container">
      <Outlet />
    </div>
  );
}
