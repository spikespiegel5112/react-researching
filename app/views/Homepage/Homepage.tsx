import "./index.scss";
import { useEffect, useState } from "react";
export default function Homepage() {
  const [startButtonActive, setStartButtonActive] = useState(false);
  const [enterActive, setEnterActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStartButtonActive(true);
    }, 300);
  }, []);

  const handleEnter = () => {
    setEnterActive(true);
    setStartButtonActive(false);
  };

  return (
    <div className={"homepage_container " + (enterActive ? "active" : "")}>
      <div className="title">BAOBAOJS</div>
      <a
        className={"startbutton " + (startButtonActive ? "active" : "")}
        onClick={handleEnter}
      ></a>
      {/* <div className="entrance">
        <div className="bg">
          <div className="stripe">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div> */}
      <div className="main">
        <div className={"menubg " + (enterActive ? "active" : "")}>
          <span className="bg1"></span>
          <span className="bg2"></span>
          <div className="title">BAOBAOJS</div>
        </div>
      </div>
    </div>
  );
}
