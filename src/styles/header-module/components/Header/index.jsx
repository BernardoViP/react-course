import styles from "./style.module.css"

export default function Header(){
    return(
        <div className={styles.box}>
            <div className={styles.image}>
                <div className={styles.headbox}>
                    <h1 className={styles.heading}>Short heading here</h1>
                    <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
                </div>
            </div>
        </div>
    )
}