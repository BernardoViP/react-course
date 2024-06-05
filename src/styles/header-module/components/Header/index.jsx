import styles from "./style.module.css"
import Image from "../../assets/image/Image.png"

export default function Header(){
    return(
        <div className={styles.back}>
        <p className={styles.tag}>Blog</p>
        <h1 className={styles.head}>Short heading here</h1>
        <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <div className={styles.boximg}>
            <img src={Image} alt="" />
        </div>
        </div>
)
}