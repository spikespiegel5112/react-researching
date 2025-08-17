import { Outlet, Route } from "react-router";
import { useNavigate } from "react-router";
import utils from "@//utils/utils.ts";

import { useEffect, useState } from "react";
import "./index.scss";
export default function Homepage() {
  const navigate = useNavigate();

  const [startButtonActive, setStartButtonActive] = useState(false);
  const [entranceActive, setEntranceActive] = useState(false);
  const [enterActive, setEnterActive] = useState(false);
  const [bgActive, setBgActive] = useState(false);

  interface MenuList {
    title: string;
    id: string;
  }

  const menuList: MenuList[] = [
    {
      title: "文心一言",
      id: "erniebot",
    },
    {
      title: "面试题",
      id: "Interview",
    },
  ];

  useEffect(() => {
    utils.$remResizing({
      baseline: 320,
      fontSize: 30,
      threshold: 640,
    });
    setEntranceActive(true);
    setTimeout(() => {
      setStartButtonActive(true);
    }, 300);
    handleEnter();
  }, []);

  const handleEnter = () => {
    setEntranceActive(false);
    setStartButtonActive(false);
    setEnterActive(true);
    setTimeout(() => {
      setBgActive(true);
    }, 800);
  };

  const handleNavigate = (item: MenuList) => {
    navigate(utils.$findRoutePathById(item.id));
  };

  return (
    <div className={"homepage_container"}>
      <div className={"entrance night " + (entranceActive ? "active" : "")}>
        <div className={"title"}>BAOBAOJS</div>
        <a
          className={"startbutton " + (startButtonActive ? "active" : "")}
          onClick={handleEnter}
        ></a>
      </div>

      <div className={"main " + (enterActive ? "active" : "")}>
        <div className={"menu " + (bgActive ? "active" : "")}>
          <div className="menubg">
            <span className="bg1">
              <div className="rightglow"></div>
            </span>
            <div className="mask">
              <span className="bg1"></span>
            </div>
            <div className="title">BAOBAOJS</div>
          </div>
          <div className="list">
            <ul>
              {menuList.map((item) => (
                <li key={item.title} onClick={() => handleNavigate(item)}>
                  <a>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="layout_container">
        <Outlet />
      </div>
    </div>
  );
}
