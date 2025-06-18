import { Button } from "./ui/button";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const cards = [
  {
    id: 1,
    title: "Sweethorn",
    description: "Measuring Soil Compaction Using Five-Point Pocket",
    image: "/images/Sweethorn1.png",
    link: "/sweethorn",
    quizlink: "/sweethorn/quiz"
  },
  {
    id: 2,
    title: "Syazwani",
    description: "The Impact Of Tourism Management On Customer Satisfaction: A Case Study Of Petronas Twin Towers, Kuala Lumpur",
    image: "/images/Syazwani1.png",
    link: "/syazwani",
    quizlink: "/syazwani/quiz"
  },
  {
    id: 3,
    title: "Hizran",
    description: "Land Use And Land Cover Change At Kampung Bagan Pasir, Tanjung Karang Using Satellite Imagery",
    image: "/images/Amir1.png",
    link: "/amir",
    quizlink: "/amir/quiz"
  },
];

// const parallaxRef = useRef(null);


export function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const vidback = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    const video = vidback.current;
    const container = parallaxRef.current;
  
    if (!video || !container) return;
  
    const ctx = gsap.context(() => {
      // Opacity decreases from 0.9 to 0.2 as user scrolls
      gsap.to(video, {
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
        opacity: 0.2,
        ease: "none",
      });
  
      // Y-axis movement (optional visual effect)
      gsap.to(video, {
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
        y: "100px", // move down slowly
        ease: "none",
      });
  
      // Sync currentTime for dynamic effect when paused
      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          if (video.paused && video.duration) {
            video.currentTime = video.duration * self.progress;
          }
        },
      });
  
      video.play();
    }, parallaxRef);
  
    return () => ctx.revert();
  }, []);
  

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <div
        ref={parallaxRef}
        style={{
          height: "100vh",
          overflowY: "auto",
          position: "relative",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: "0.9",
            zIndex: 0,
            pointerEvents: "none",
          }}
          ref={vidback}
        >
          <source src="/images/treesback.mp4" type="video/mp4" />
        </video>

        {/* Content Container */}
        <div style={{ position: "relative", zIndex: 1  }}>
          {/* 1. Landing Section */}
          <div
            style={{
              height: "100vh",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                color: "white",
                fontSize: "3rem",
                fontWeight: "bold",
                textAlign: "center",
                textShadow: "2px 2px 4px #000",
                padding: "0 20px",
              }}
            >
              Sustainable Development and Environmental Monitoring
              <br />
              through Technological and Managerial Approaches in Malaysia
            </div>
          </div>

          
          {/* 2. Contents Section - Modified with glass effect container */}
<div
  style={{
    minHeight: "100vh",
    padding: "100px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxSizing: "border-box",
    width: "100%",
    position: "relative",
  }}
>
  {/* Glass container for title and cards */}
  <div
    style={{
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(10px)",
      borderRadius: "20px",
      padding: "60px",
      width: "100%",
      maxWidth: "1500px",
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
      border: "1px solid rgba(255, 255, 255, 0.18)"
    }}
  >
    <h2
      style={{
        fontSize: "3rem",
        marginBottom: "40px",
        textAlign: "center",
        fontWeight: "bold",
        color: "white",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"
      }}
    >
      Contents
    </h2>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "60px",
      }}
    >
      {cards.map((card) => (
        <div
          key={card.id}
          style={{
            width: "400px",
            height: "550px",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            transition: "transform 0.3s ease",
          }}
        >
          <div style={{ width: "100%", height: "300px" }}>
            <img
              src={card.image}
              alt={card.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px",
              }}
            />
          </div>
          <div
            style={{
              padding: "16px",
              flex: "1",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "8px",
                fontWeight: "bold",
                color: "#2e4b29",
              }}
            >
              {card.title}
            </h3>
            <p
              style={{
                color: "#555",
                marginBottom: "16px",
                flex: "1",
                fontSize: "1.1rem",
                lineHeight: "1.6",
              }}
            >
              {card.description}
            </p>
            <Link href={card.link}>
              <button
                style={{
                  padding: "12px 24px",
                  backgroundColor: "#000000",
                  color: "#92CA6A",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "1rem",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Learn More
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

          {/* 3. About Section */}
          <div
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
              padding: "200px 20px",
              width: "100%",
              margin: "0 auto",
              boxSizing: "border-box",
            }}
          >
            
            <div style={{ flex: "1 1 30%", minWidth: "300px", backgroundColor: "#FAFFCA", borderRadius: "20px", padding: "40px", height: "600px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h2 style={{ paddingBottom: "20px", color: "#000", fontWeight: "bold", fontSize: "2rem", textAlign: "left" }}>About Ecostudy 🌳</h2>
            <h3 style={{ paddingBottom: "40px", color: "#000", fontWeight: "bold", fontSize: "1.5rem", textAlign: "left" }}>Exploring Sustainable Development in Malaysia</h3>
            <p style={{ color: "#000", fontSize: "1.2rem", lineHeight: "1.6", textAlign: "left" }}>
              EcoStudy is a collaborative platform dedicated to investigating sustainable development and environmental monitoring in Malaysia through technological and managerial approaches. Our team of researchers focuses on pressing ecological and socio-economic challenges, leveraging tools like remote sensing, field surveys, and data analytics to drive actionable insights for conservation and policy-making.
            </p>
            </div>

            <div style={{ flex: "1 1 70%", minWidth: "300px" }}>
              <img
                src="/images/EcoStudy.png"
                alt=""
                style={{
                  width: "100%",
                  height: "600px",
                  objectFit: "cover",
                  borderRadius: "16px",
                }}
              />
            </div>
          </div>

          {/* 4. Quiz Section */}
          {/* 4. Quiz Section with Glass Effect */}
<div
  style={{
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "100px 20px",
    position: "relative",
  }}
>
  {/* Glass container for entire quiz section */}
  <div
    style={{
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(12px)",
      borderRadius: "24px",
      padding: "60px 70px",
      width: "90%",
      maxWidth: "1300px",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
    }}
  >
    {/* Quiz title */}
    <h1
      style={{
        fontSize: "3.5rem",
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        marginBottom: "60px",
        textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)"
      }}
    >
      Take Quiz <span style={{ fontSize: "3rem" }}>💬</span>
    </h1>

    {/* Quiz cards container */}
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "40px",
      }}
    >
      {cards.map((card) => (
        <div
          key={card.id}
          style={{
            width: "350px",
            borderRadius: "16px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#92CA6A",
            backdropFilter: "blur(8px)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
            border: "1px solid rgba(255, 255, 255, 0.25)",
            transition: "all 0.3s ease",
          }}
        >
          <div
            style={{
              padding: "30px",
              flex: "1",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p
              style={{
                color: "rgba(255, 255, 255, 0.9)",
                marginBottom: "20px",
                flex: "1",
                fontSize: "1.2rem",
                lineHeight: "1.6",
              }}
            >
              {card.description}
            </p>
            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "8px",
                fontWeight: "bold",
                color: "white"
              }}
            >
              {card.title}
            </h3>
            <h5
              style={{
                marginBottom: "30px",
                color: "rgba(255, 255, 255, 0.7)",
                fontWeight: "lighter",
                fontSize: "1rem"
              }}
            >
              Alam Bina Student
            </h5>
            <Link href={card.quizlink}>
              <button
                style={{
                  padding: "14px 24px",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  color: "#92CA6A",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                  width: "100%",
                  backdropFilter: "blur(4px)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Start
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  );
}
