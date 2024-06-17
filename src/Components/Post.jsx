import { Comments } from './Comments';
import { Habilidades } from './Habilidades';
import { Softskills } from './Softskills';
import styles from './post.module.css';



export function Post() {
  return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}  >
                <img className={styles.avatar} src="./img/img.jpeg" alt="foto" />
            <div className={styles.authorInfo}>
                <strong >Rayssa dos Santos Alves</strong>
                <span>Estudante</span>
            </div>
            </div>
        </header>
        <div className={styles.content}>
            <p>Sobre mim</p>
            <p>Sou uma desenvolvedora Fullstack em formação, a procura de novas experiencias na área. Possuo formação técnica em eletroeletrônica e eletrônica, o que me proporciona uma visão abrangente e detalhista no desenvolvimento de soluções tecnológicas. Estou em busca de novas oportunidades para aplicar meus conhecimentos e contribuir para o crescimento da empresa.</p>

            <p><a href="https://github.com/rayssalvex?tab=repositories">Link Repositórios</a></p>
            <p><a href="https://github.com/rayssalvex/Mercado-Sabia">Último Projeto</a></p>
        </div>

        <form className={styles.commentsForm}>
            <strong>Escolaridade</strong>
        </form>
        <div>

            <Comments />

        </div>

        <form className={styles.hab}>
            <strong>Habilidades</strong>
        </form>
        <div>

            <Habilidades />

        </div>

        <form className={styles.softSk}>
            <strong>Soft Skills</strong>
        </form>
        <div>

        <Softskills/>

        </div>
    </article>
  )
}