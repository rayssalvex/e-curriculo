import styles from './header.module.css'

export function Header() {
  return (
    
    <header className={styles.header}>

        <img src='./imgs/programming.png' alt='icon' />

        <strong>E-Curriculo Profissional</strong>

    </header>
  )
}