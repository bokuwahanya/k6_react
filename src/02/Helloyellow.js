import styles from './Helloyellow.module.css'
export default function Helloyellow() {
    const st = {
        color:"yellow"
    }
    //인라인 스타일

  return (
    <div>
      <h1 className={styles.ch1}>
        안녕히 가세요.
      </h1>
    </div>
  )
}
