import styles from "./comments.module.css";

export function Comments() {
  return (
    <div className={styles.comments}>
      <img
        src="imgs/gra.png"
        alt="icon"
      />
      <div>
        <div className={styles.commentsContent}>
          <header>
            <div>
            <strong>Ensino Médio Completo</strong>
            </div>
          </header>
          <p>Técnico em Eletroeletrônica - 2021 - 2023 <br></br>Escola Estadual Francisco Inácio Peixoto</p>
        </div>

        <div className={styles.commentsContent}>
          <header>
            <div>
            <strong>Desenvolvedor Fullstack</strong>
            </div>
          </header>
          <p>Rio Pomba Valley - SENAI - 2023 - 2024</p>
        </div>

        <div className={styles.commentsContent}>
          <header>
            <div>
            <strong>Técnico em Eletrônica</strong>
            </div>
          </header>
          <p>SENAI Cataguases - 2024 - 2025</p>
        </div>
      </div>
    </div>
  );
}
