import styles from './sidebar.module.css';


export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
        <img className={styles.cover} src="https://i.pinimg.com/564x/73/49/99/7349997a4d07fbb97180c9a526fb88ff.jpg" alt="imagem-Sidebar" />
        <div className={styles.profile}>
            <img className={styles.avatar} src="./imgs/imagem.jpeg" alt="imagem" />
            <strong>Rayssa Alves</strong>
            <span>Desenvolvedora Fullstack</span>
        </div>

        <footer>
            <a href="https://github.com/rayssalvex">gitHub</a>
            <a href="https://www.linkedin.com/in/rayssa-dos-santos-alves-764ab7296/">Linkedin</a>
            <a href="https://www.instagram.com/rayssalvex/">Instagram</a>
            
        </footer>

    </aside>
  )
}