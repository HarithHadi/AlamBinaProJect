import Image from 'next/image'
import Navbar from './Navbar'
import styles from './SweetPage.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      
      <section className={styles.heroSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/green background.jpg"
            alt="Measuring Soil Compaction"
            fill
            priority
            className={styles.heroImage}
          />
        </div>

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Measuring Soil Compaction Using Five-Point Pocket
          </h1>
        </div>
      </section>
    </div>
  )
}