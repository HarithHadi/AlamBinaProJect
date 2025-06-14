"use client";
import Navbar from '../Navbar';
import styles from './penetrometer.module.css';

export default function Penetrometer() {
  return (
    <div className={styles.page}>
      <Navbar />
      
      <section className={styles.section}>
        <h1 className={styles.mainTitle}>What is a Penetrometer?</h1>
        
        <div className={styles.contentCard}>
          <div className={styles.textContent}>
            <p className={styles.leadText}>
              A penetrometer is a device used to measure the resistance of soil to penetration, 
              helping determine soil compaction levels.
            </p>
            
            <div className={styles.featureBox}>
              <h2>Key Features</h2>
              <ul className={styles.featureList}>
                <li>Measures soil strength in psi or kg/cm²</li>
                <li>Helps identify compacted soil layers</li>
                <li>Used in agriculture, construction, and geotechnical studies</li>
                <li>Portable and easy to use in field conditions</li>
              </ul>
            </div>
          </div>
          
          <div className={styles.imageContainer}>
            <img src="/images/Penetrometer.jpg" alt="Penetrometer diagram" className={styles.diagram} />
          </div>
        </div>

        <div className={styles.stepContainer}>
          <h2 className={styles.sectionTitle}>How To Use a Pocket Penetrometer</h2>
          
          <div className={styles.stepCard}>
            <div className={styles.stepHeader}>
              <div className={styles.stepNumber}>1</div>
              <h3>Prepare the Soil Surface</h3>
            </div>
            <p>Clear away grass, mulch, or loose debris. Ensure the surface is flat and undisturbed.</p>
          </div>
          
          <div className={styles.stepCard}>
            <div className={styles.stepHeader}>
              <div className={styles.stepNumber}>2</div>
              <h3>Position the Penetrometer</h3>
            </div>
            <p>Hold the penetrometer perfectly vertical above the test point.</p>
          </div>
          
          <div className={styles.stepCard}>
            <div className={styles.stepHeader}>
              <div className={styles.stepNumber}>3</div>
              <h3>Apply Steady Pressure</h3>
            </div>
            <p>Press the penetrometer into the soil at a consistent rate (about 1 cm per second).</p>
          </div>
          
          <div className={styles.stepCard}>
            <div className={styles.stepHeader}>
              <div className={styles.stepNumber}>4</div>
              <h3>Record the Measurement</h3>
            </div>
            <p>Read the pressure gauge when the penetrometer reaches the marked depth (typically 0.5-1 inch).</p>
          </div>
        </div>

        <div className={styles.dataSection}>
          <h2 className={styles.sectionTitle}>Interpreting Results</h2>
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th>Reading (psi)</th>
                <th>Compaction Level</th>
                <th>Effect on Plants</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0-100</td>
                <td>Very Loose</td>
                <td>Excellent root growth</td>
              </tr>
              <tr>
                <td>100-300</td>
                <td>Ideal</td>
                <td>Good for most crops</td>
              </tr>
              <tr>
                <td>300-500</td>
                <td>Moderate</td>
                <td>Root restriction begins</td>
              </tr>
              <tr>
                <td>500+</td>
                <td>Severe</td>
                <td>Significant growth problems</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}