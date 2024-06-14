import styles from "./habilidades.module.css";

export function Habilidades (){
    return(
        <div className={styles.habilidades}>
<img
        src="./imgs/binary-code.png"
        alt="icon"
      />

      <div className={styles.imgs}>
      <h3>Conhecimento em:</h3>
      <img
        src="./imgs/c-sharp.png" alt="linguagem icon"/>
      <img
        src="./imgs/java-script (1).png" alt="linguagem icon"/>
      <img
       src="./imgs/html.png" alt="icon"/>
      <img
       src="./imgs/css-file.png" alt="icon"/>
      <img
       src="./imgs/db-transfer.png" alt="icon"/>
      <img
       src="./imgs/structure.png" alt="icon"/>
      <img
       src="./imgs/github (2).png" alt="icon"/>
      
      </div>

      </div>
    )
}