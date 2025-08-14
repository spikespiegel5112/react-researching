import { useEffect, useState } from "react";
import "./index.scss";
export default function Interview() {
  const [startButtonActive, setStartButtonActive] = useState(false);
  const [entranceActive, setEntranceActive] = useState(false);
  const [enterActive, setEnterActive] = useState(false);
  const [bgActive, setBgActive] = useState(false);

  const menuList = [
    {
      title: "文心一言",
    },
  ];

  useEffect(() => {
    setEntranceActive(true);
    setTimeout(() => {
      setStartButtonActive(true);
    }, 300);
  }, []);

  const handleEnter = () => {
    setEntranceActive(false);
    setStartButtonActive(false);
    setEnterActive(true);
    setTimeout(() => {
      setBgActive(true);
    }, 800);
  };

  return (
    <div className={"interview_container"}>
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
              <div className="right-glow"></div>
            </span>
            <span className="bg2"></span>
            <div className="mask">
              <span className="bg1"></span>
              <span className="bg2"></span>
            </div>
            <div className="title">BAOBAOJS</div>
          </div>
        </div>
      </div>
    </div>
  );
}
