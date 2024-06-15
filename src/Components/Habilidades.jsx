import styles from "./habilidades.module.css";

export function Habilidades (){
    return(
        <div className={styles.habilidades}>
<img
        src="./imgs/bc.png"
        alt="icon"
      />

      <div className={styles.imgs}>
      <h3>Conhecimento em:</h3>
      <img
        src="./imgs/cs.png" alt="linguagem icon"/>
      <img
        src="./imgs/js.png" alt="linguagem icon"/>
      <img
       src="./imgs/html.png" alt="icon"/>
      <img
       src="./imgs/css.png" alt="icon"/>
      <img
       src="./imgs/db.png" alt="icon"/>
      <img
       src="./imgs/rct.png" alt="icon"/>
      <img
       src="./imgs/git.png" alt="icon"/>
      
      </div>

      </div>
    )
}