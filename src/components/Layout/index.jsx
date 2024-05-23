import "./styles.css";

import ChevronRight from "../../assets/images/svg/Vector.svg";
import Image from "../../assets/images/svg/Image.svg";

export default function Layout(props) {
  return (
    <div className="layout-container">
      <div className="layout-content">
        <div className="layout-description">
          <div className="layout-text">
            <h4>{props.tag}</h4>
            <h1>{props.title}</h1>
            <p>
              {props.description}
            </p>
          </div>
          <div className="layout-button">
            <button className="button-box">{props.buttonLeft}</button>
            <button className="button-link">
              <p>{props.buttonRight}</p>
              <img src={ChevronRight} alt="" />
            </button>
          </div>
        </div>
        <img src={props.image ? props.image : Image} alt="" />
      </div>
    </div>
  );
}
