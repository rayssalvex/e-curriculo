import styles from './header.module.css'

export function Header() {
  return (
    
    <header className={styles.header}>

        <img src='./img/pc.png' alt='icon' />

        <strong>E-Curriculo Profissional</strong>

    </header>
  )
}