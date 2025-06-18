import Navbar from '../Navbar'
import styles from './Soil.module.css'

export default function Soil() {
  return (
    <div className={styles.soilPage}>
      <Navbar />
      
      <section className={styles.section}>
        <h2 className={`${styles.sectionTitle} ${styles.fadeIn}`}>Soil Compaction</h2>
        
        <div className={styles.contentWrapper}>
          <div className={styles.boxContainer}>
            <div className={styles.infoBox}>
              <h3 className={styles.fadeIn} style={{ animationDelay: '0.2s' }}>What is Soil Compaction?</h3>
              <p className={styles.fadeIn} style={{ animationDelay: '0.3s' }}>Soil compaction is the process where soil particles are pressed together, reducing the space between them. This makes the soil denser and harder, which affects its ability to absorb water and support plant growth.</p>
            </div>

            <div className={styles.infoBox}>
              <h3 className={styles.fadeIn} style={{ animationDelay: '0.4s' }}>Why is it Important?</h3>
              <p className={styles.fadeIn} style={{ animationDelay: '0.5s' }}>Soil compaction impacts agriculture, construction, and the environment. In farming, compacted soil limits root growth and water absorption. In construction, controlled compaction is essential for creating strong foundations.</p>
            </div>

            <div className={styles.infoBox}>
              <h3 className={styles.fadeIn} style={{ animationDelay: '0.6s' }}>How Does It Happen?</h3>
              <p className={styles.fadeIn} style={{ animationDelay: '0.7s' }}>It occurs naturally over time or due to human activities such as heavy machinery use, frequent foot traffic, or rainfall impact. Repeated pressure on soil without proper management leads to compaction.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}