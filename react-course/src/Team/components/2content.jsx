import "../styles.css"
import Image from "../../assets/images/svg/cimage.svg";
import Linkedin from "../../assets/images/svg/LinkedIn.svg"
import X from "../../assets/images/svg/X.svg"
import Drible from "../../assets/images/svg/Dribble.svg"

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
           <img src={Drible} alt="" />
           </a>
          </div>
        </div>
      </div>
    </div>
  );
}