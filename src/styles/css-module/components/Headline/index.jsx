import styles from "./style.module.css"

export default function HeadLine() {
    return(
        <div>
            <h1 className={styles.titulo}>Descoberta revolucionária: Nova tecnlogia transforma lixo plástico em combustível limpo</h1>
            
            <p className={styles.descrição}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores obcaecati voluptatem ipsa earum velit excepturi sint perferendis, consectetur, quasi laborum eveniet eius sapiente iusto quos ex? Neque pariatur possimus ipsam.</p>
        </div>
    )
}