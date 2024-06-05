import styles from "./style.module.css"

export default function Header(){
    return(
        <div className={styles.back}>
        <p className={styles.tag}>Tagline</p>
        <h1 className={styles.head}>Short heading here</h1>
        <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, culpa. Sapiente quia sit illo vitae est doloribus alias impedit amet perspiciatis recusandae eveniet libero maiores, rerum quam, iure vel sed!</p>
        <div className={styles.buttom}>Button</div>
        </div>
    )
}