import gasketsPalette2 from "@/assets/images/gaskets-palette-2.png"
import styles from "./Home.module.css"

export default function Body() {
  return (
    <div className={`${styles.home} m-3`}>
      {/* use translator */}
      <img src={gasketsPalette2} alt="" className={styles.mainImage}/>
    </div>
  )
}
