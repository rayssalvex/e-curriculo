import styles from "./softskills.module.css";

export function Softskills() {
  return (
    <div className={styles.softS}>
      <img
        src="imgs/cptc.png"
        alt="icon"
      />
      <div>
        <div className={styles.soft}>
          <header>
            <strong>Concentração</strong>
          </header>
        </div>

        <div className={styles.soft}>
          <header>
            <strong>Proatividade</strong>
          </header>
        </div>

        <div className={styles.soft}>
          <header>
            <strong>Oratória</strong>
          </header>
        </div>

        <div className={styles.soft}>
          <header>
            <strong>Inteligência Emocional</strong>
          </header>
        </div>

        <div className={styles.soft}>
          <header>
            <strong>Resiliência</strong>
          </header>
        </div>

      </div>
    </div>
  );
}
