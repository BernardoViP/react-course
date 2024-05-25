import '../../../styles.css'

import { Dribble, EmptyImage, Linkedin, X , } from "../../assets/images"

export default function Content(props) {
    return (
        <div className='content-container'>
            <img style={
                {
                    borderRadius: "10px",
                    borderRadius: "50%",
                }
            } src={props.image ? props.image : EmptyImage} alt="" className='content-image' />
            <div className="content-title">
                <h1>{props.name}</h1>
                <h2>{props.tittle}</h2>
            </div>
            <p className='content-description'>
            {props.description}
            </p>
            <div className="content-anime">
            <p>{props.anime}</p>
            </div>
        </div>
    )
}