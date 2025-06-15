"use client"
import { useEffect } from "react";
import { Parallax } from "@/app/(StudentsPage)/syazwani/components/parallax";
import { Secparallax } from "@/app/(StudentsPage)/syazwani/components/secparallax";
import { Thirdparallax } from "./components/thirdparallax";
import { ForthParallax } from "./components/forthparallax";
import { Hero } from "@/components/heroMain";
import { Map } from "@/components/ui/map";
import OverlapImage from "./components/overlapImage";
import Quiz from "./components/quiz";
import { Quizsection } from "./components/quizsection";

const Page = () => {
    useEffect(() => {
        // Only refresh if not already refreshed
        if (typeof window !== "undefined" && !localStorage.getItem("syazwaniRefreshed")) {
            localStorage.setItem("syazwaniRefreshed", "true");
            setTimeout(() => {
                window.location.reload();
            }, 2000); // 2 seconds
        }
    }, []);

    return (
        <>
            <div>
                <Parallax />
                <Secparallax />
                {/* <OverlapImage />  */}
                <ForthParallax />
                <Thirdparallax />
                <Quizsection />


            </div>
        </>
    );
};

export default Page;
