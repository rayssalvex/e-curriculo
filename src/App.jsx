import {Header} from './Components/Header'
import { Post } from './Components/Post'
import {Sidebar} from './Components/Sidebar'
import { Habilidades } from './Components/Habilidades'
import { Softskills } from './Components/Softskills'
import styles from './app.module.css'
import './styles.global.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
      <main>
        <Post />
      </main>
      </div>
      </div>  
  )
}
