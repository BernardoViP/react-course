import "../styles.css"
import {Image, Linkedin, X, Dribble} from "../../assets/images/svg"

export default function Content() {
  return (
    <div className="content-container">
      <img src={Image} alt="content-image" />
      <div className="content-tittle">
        <h1>Full name</h1>
        <h2>Job Title</h2>
        <div className="content-description">
          <p>sobre</p>
          <div className="content-icons">
            <a href="https://br.linkedin.com/" target="blank">
           <img src={Linkedin} alt="" />
           </a>
           <a href="https://x.com" target="blank">
           <img src={X} alt="" />
           </a>
           <a href="https://dribbble.com/" target="blank">
           <img src={Dribble} alt="" />
           </a>
          </div>
        </div>
      </div>
    </div>
  );
}