"use client"
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "@/app/(StudentsPage)/syazwani/components/parallax.module.css"

export function Parallax() {
  const [background, setBackground] = useState(20);

  const parallaxRef = useRef<HTMLDivElement>(null);
  const citysky3 = useRef<HTMLImageElement>(null);
  const citysky2 = useRef<HTMLImageElement>(null);
  const citysky1 = useRef<HTMLImageElement>(null);
  const shape1 = useRef<HTMLImageElement>(null);
  const shape2 = useRef<HTMLImageElement>(null);
  const copy = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top top",
          end: "+=3000",
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
      });

      tl.to(shape2.current, { y: "-=50" }, 0)
        .to(shape1.current, { y: "-=50" }, 0)
        .to(citysky1.current, { y: "+=10" }, 0)
        .to(citysky2.current, { y: "+=1000" }, 0)
        .to(citysky3.current, { y: "+=1000" }, 0)
        .to(copy.current, { y: "-250%", opacity: 1 }, 0);
      ScrollTrigger.refresh();
    });

    // Wait for all images in the parallax section to load before refreshing ScrollTrigger
    const images = parallaxRef.current?.querySelectorAll('img') as NodeListOf<HTMLImageElement>;
    let loaded = 0;
    const handleImagesLoaded = () => {
      ScrollTrigger.refresh();
    };
    if (images && images.length > 0) {
      images.forEach(img => {
        if (img.complete) {
          loaded++;
        } else {
          img.addEventListener('load', () => {
            loaded++;
            if (loaded === images.length) handleImagesLoaded();
          });
        }
      });
      if (loaded === images.length) handleImagesLoaded();
    } else {
      // If no images, just refresh
      handleImagesLoaded();
    }

    // Cleanup
    return () => {
      if (images && images.length > 0) {
        images.forEach(img => img.removeEventListener('load', handleImagesLoaded));
      }
      ctx.revert();
    };
  }, []);

  return (
    <section className={style.parallaxOuter}>
      <div
        ref={parallaxRef}
        className={style.parallax}
        style={{
          background: `linear-gradient(0deg, rgba(131, 58, 180, 1) ${background}%, rgba(253, 29, 29, 1) ${background + 20}%, rgba(252, 176, 69, 1) ${background + 40}%)`,
        }}
      >
        <img ref={citysky3} className={style.citsky3} src="images/Parallax/City_Skyline2.png" alt="City Skyline 3" />
        <img ref={citysky2} className={style.citsky2} src="images/Parallax/City_Skyline2.png" alt="City Skyline 2" />
        <img ref={citysky1} className={style.citysky1} src="images/Parallax/City_Skyline.png" alt="City Skyline 1" />
        <img ref={shape1} className={style.shape1} src="images/Parallax/Shape.png" alt="Shape 1" />
        <img ref={shape2} className={style.shape2} src="/images/Parallax/Shape2.png" alt="Shape 2" />
        {/* <img ref={shape1} className="shape3" src="images/Parallax/Shape.png" alt="Shape 1" /> */}

        <div ref={copy} className={style.copy}>
          <h1>Tourism Management and Visitor Satisfaction at Petronas Twin Towers</h1>
          <h2 style={{ marginTop: "20px", fontSize: "1rem" }}>A study By Syazwani</h2>
        </div>
      </div>
    </section>

  );
}