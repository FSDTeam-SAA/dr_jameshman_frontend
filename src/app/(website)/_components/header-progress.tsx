"use client"
import React, { useEffect, useRef } from "react";
import gsap from "gsap"
import { useScrollProgress } from "@/hooks/use-gsap-animations";

const HeaderProgress = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const scrollProgressRef = useScrollProgress()

    useEffect(() => {
        gsap.from(containerRef.current, {
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
        })
    }, [])
    return (
        <div>
            <div
                ref={scrollProgressRef}
                className="fixed top-0 left-0 h-1 bg-gradient-to-r from-accent to-primary z-50 origin-left"
                style={{ width: "0%" }}
            />
        </div>
    );
};

export default HeaderProgress;