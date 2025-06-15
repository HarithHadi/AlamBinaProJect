"use client"
import { useEffect } from "react";
import { Parallax } from "@/app/(StudentsPage)/syazwani/components/parallax";
import { Secparallax } from "@/app/(StudentsPage)/syazwani/components/secparallax";
import { Thirdparallax } from "./components/thirdparallax";
import { ForthParallax } from "./components/forthparallax";

import { Quizsection } from "./components/quizsection";

const Page = () => {
    useEffect(() => {
        if (typeof window !== "undefined" && !sessionStorage.getItem("syazwaniRefreshed")) {
          sessionStorage.setItem("syazwaniRefreshed", "true");
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
                <ForthParallax />
                <Thirdparallax />
                <Quizsection />


            </div>
        </>
    );
};

export default Page;
