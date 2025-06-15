"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Map } from "@/components/ui/map";
import { Parallax } from "./parallax";
import style from "@/app/(StudentsPage)/syazwani/components/secparallax.module.css"

export function Secparallax() {

    const [background, setBackground] = useState(20)

    const parallaxRef = useRef(null);
    const city = useRef(null);
    const stars = useRef(null);
    const cloud1 = useRef(null);
    const cloud2 = useRef(null);
    const cloud3 = useRef(null);
    const cloud4 = useRef(null);
    const image = useRef(null);
    const title = useRef(null);
    const p1 = useRef(null);
    const objective = useRef(null);
    const d1 = useRef(null);
    const d2 = useRef(null);
    const d3 = useRef(null);

    const shapered = useRef(null);
    const shapeblue = useRef(null);
    const cityfoot = useRef(null);
    const cityfoot2 = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            const tl = gsap.timeline({
                defaults: { duration: 1 },

                scrollTrigger: {
                    trigger: parallaxRef.current,
                    start: "top top", // when top of section hits top of screen
                    end: "+=3000",
                    scrub: 1,
                    pin: true,
                    pinSpacing: false,


                },

            });
            tl.to(
                city.current,
                {
                    y: "+=100",
                },
                0
            );
            tl.to(
                stars.current,
                {
                    opacity: 0.75,
                },
                0
            );
            tl.to(
                image.current,
                {
                    y: "-=80",
                    opacity: 1,
                },
                0
            );
            tl.to(
                title.current,
                {
                    opacity: 1,
                    duration: 0.5
                },
                0.5
            );
            tl.to(
                p1.current,
                {
                    opacity: 1,
                    duration: 0.5
                },
                0.5
            );
            tl.to(
                objective.current,
                {
                    opacity: 1,
                    duration: 0.5,
                },
                0.55
            );

            tl.to(
                d1.current,
                {
                    opacity: 1,
                    duration: 0.5,
                },
                0.55
            );
            tl.to(
                d2.current,
                {
                    opacity: 1,
                    duration: 0.5,
                },
                0.65
            );
            tl.to(
                d3.current,
                {
                    opacity: 1,
                    duration: 0.5,
                },
                0.75
            );
            tl.to(
                cloud1.current,
                {
                    x: "+=1000"
                },
                0
            );
            tl.to(
                cloud2.current,
                {
                    x: "-=1000"
                },
                0
            ); tl.to(
                cloud3.current,
                {
                    x: "-=2000"
                },
                0
            );
            tl.to(
                cloud4.current,
                {
                    x: "-=2000"
                },
                0
            );

            tl.to(
                shapeblue.current,
                {
                    y: "-=10"
                },
                0
            );
            tl.to(
                shapered.current,
                {
                    y: "-=90"
                },
                0.99
            );
            tl.to(
                cityfoot.current,
                {
                    y: "-=50"
                },
                0
            );
            tl.to(
                cityfoot2.current,
                {
                    y: "-=50"
                },
                0
            );


            ScrollTrigger.refresh();
        });

        return () => ctx.revert();
    }, []);


    return (
        <>
            <section className={style.parallaxOuter}>
                <div
                    ref={parallaxRef}
                    className={style.parallax}
                    style={{
                        background:
                            "linear-gradient(180deg,rgba(0, 67, 198, 1) 0%, rgba(1, 22, 69, 1) 100%)",
                    }}
                >

                    <img ref={city} className={style.city} src="/images/Parallax/City_Skyline2.png" alt="City Skyline 2" />
                    <img ref={cloud1} style={{top: "-31px", left: "642px"}}className={style.cloud1} src="/images/Parallax/cloud.png" alt="" />
                    <img ref={cloud2} style={{top: "-90px"}} className={style.cloud2} src="/images/Parallax/cloud.png" alt="" />
                    <img ref={stars} className={style.stars} src="/images/Parallax/stars.png" alt="City Skyline 2" />
                    <img ref={cloud3} className="" src="/images/Parallax/cloud.png" alt="" />
                    <img ref={cityfoot} className={style.cityfooter} src="/images/Parallax/City_Skyline2.png" alt="City Skyline 2" />
                    <img ref={cityfoot2} className={style.cityfootertwo} src="/images/Parallax/City_Skyline2.png" alt="City Skyline 2" />
                    <img ref={cloud3} style={{top: "100px", right: "500px"}}className={style.cloud4} src="/images/Parallax/cloud.png" alt="" />
                    <img style={{bottom: "-400px", right: "-800px"}} className={style.cloud5}src="/images/Parallax/cloud.png" alt="" />
                    <img ref={shapered} className={style.shapesec} src="/images/Parallax/Shape2full.png" alt="" />
                    <img ref={shapeblue} className={style.shapefirst} src="/images/Parallax/Shape.png" alt="" />


                    <div className={style.cardcontainer}>
                        <div className={style.descriptioncard}>
                            <h1 ref={title}>  Background of Study</h1>
                            <div className={style.parentcardies}>

                                <div className={style.cardiessec} ref={p1}>
                                    <p>Welcome to a research-based exploration into how tourism management practices shape customer satisfaction at one of Malaysia&apos;s most iconic landmarks — the PETRONAS Twin Towers. This website summarizes a comprehensive study that highlights key factors influencing the visitor experience, and suggests improvements for sustainable tourism growth.</p></div>
                                <div className={style.cardiesthird}></div>
                            </div>

                            <h2 ref={objective} style={{ opacity: 0, fontWeight: "bolder", fontSize: "2rem" }}>Objective</h2>
                            <div className={style.parentCard}>
                                <div className={style.card} ref={d1}>
                                    <p>Evaluate the effectiveness of current tourism management at the Twin Towers.
                                    </p>
                                </div>
                                <div className={style.card} ref={d2}>
                                    <p>Assess visitor satisfaction levels.
                                    </p>
                                </div>
                                <div className={style.card} ref={d3}>
                                    <p>Identify key tourism management factors influencing satisfaction.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className={style.imageCard}>
                            <img ref={image} src="images/Parallax/City_Skyline.png" alt="" />
                        </div>

                    </div>

                </div>
            </section>

            <div style={{ height: "200vh" }}></div>

        </>
    );
}