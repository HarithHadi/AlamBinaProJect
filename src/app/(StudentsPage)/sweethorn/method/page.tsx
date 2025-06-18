"use client";
import { 
  FaMapMarkerAlt,
  FaBorderAll,
  FaSeedling,
  FaTools,
  FaClipboardList
} from "react-icons/fa";
import Navbar from '../Navbar'
import styles from './Method.module.css';
import { useEffect, useState } from 'react';

export default function Method() {
  const [isVisible, setIsVisible] = useState(false);
  const steps = [
    {
      title: "STEP 1: Identify the Test Area",
      content: "Choose a specific area of soil you want to test. Ensure it represents the general conditions of the field or site.",
      icon: <FaMapMarkerAlt className={styles.stepIcon} />,
    },
    {
      title: "STEP 2: Identify Five Sampling Points",
      content: "Make the points in an 'X' or 'Y' pattern\n• One center point\n• Four outer points (equal distance from the center, like 1-2 meters)",
      icon: <FaBorderAll className={styles.stepIcon} />,
    },
    {
      title: "STEP 3: Prepare the Soil Surface",
      content: "• Clear away grass, mulch, or loose debris at each sampling point.\n• Ensure the soil surface is flat and undisturbed.",
      icon: <FaSeedling className={styles.stepIcon} />,
    },
    {
      title: "STEP 4: Use the Pocket Penetrometer",
      content: "• Hold the penetrometer vertically above the point.\n• Press it into the soil slowly and steadily.",
      icon: <FaTools className={styles.stepIcon} />,
    },
    {
      title: "STEP 5: Read and Record the Measurement",
      content: "• Check the pressure reading on the penetrometer (usually in pal or kg/cm²).\n• Record the value for each point.",
      icon: <FaClipboardList className={styles.stepIcon} />,
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={styles.methodPage}>
      <Navbar />
      
      <section className={styles.section}>
        <h1 className={`${styles.mainTitle} ${isVisible ? styles.fadeIn : ''}`}>
          What is the Five-Point Method?
        </h1>
        
        <div className={styles.stepContainer}>
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`${styles.stepCard} ${isVisible ? styles.fadeIn : ''}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className={styles.stepHeader}>
                {step.icon}
                <h2 className={styles.stepTitle}>{step.title}</h2>
              </div>
              <div className={styles.stepContent}>
                {step.content.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}