import styles from "./habilidades.module.css";

export function Habilidades (){
    return(
        <div className={styles.habilidades}>
<img
        src="./img/dv.png"
        alt="icon"
      />

      <div className={styles.imgs}>
      <h3>Conhecimento em:</h3>
      <img
        src="./img/js.png" alt="linguagem icon"/>
      <img
        src="./img/c.png" alt="linguagem icon"/>
      <img
       src="./img/ht.png" alt="icon"/>
      <img
       src="./img/cs.png" alt="icon"/>
      <img
       src="./img/bd.png" alt="icon"/>
      <img
       src="./img/rt.png" alt="icon"/>
      <img
       src="./img/gh.png" alt="icon"/>
      
      </div>

      </div>
    )
}