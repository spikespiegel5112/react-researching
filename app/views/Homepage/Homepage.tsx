import "./index.scss";
export default function Homepage() {
  return (
    <div className="homepage_container">
      <div className="title">BAOBAOJS</div>
      <a className="startbutton+state.startButtonActive?'avtive':''"></a>
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
    </div>
  );
}
