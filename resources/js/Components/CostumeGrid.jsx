import { useState, useEffect, useRef } from "react";
import { Costumes } from "@/Lib/costumes";
import CostumeDetails from "./CostumeDetails";
import CostumeCard from "./CostumeCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TextPlugin } from "gsap/all";
import Modal from "./Modal";

export default function CostumeGrid() {
    const [costumeSelected, setCostumeSelected] = useState(null);
    const costumeDetailsRef = useRef(null);

    // useEffect(() => {
    //     if (costumeSelected && costumeDetailsRef.current) {
    //         const targetPosition = costumeDetailsRef.current.offsetTop - 68;
    //         window.scrollTo({
    //             top: targetPosition,
    //             behavior: "smooth",
    //         });
    //     }
    // }, [costumeSelected]);

    const costume = Costumes.find((costume) => costume.id === costumeSelected);

    const handleCostumeClick = (id) => {
        setCostumeSelected(id);
    };

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);

    useGSAP(() => {
        gsap.to("#header", {
            scrollTrigger: {
                id: "header",
                trigger: "#header",
                start: "top center",
                // end: " bottom",
                toggleActions: "play none restart reverse",
                // markers: true,
                // duration: 3,
            },
            text: {
                value: "Costumes",
                speed: 1,
                rtl: true,
                preserveSpaces: true,
            },
        });
    });

    return (
        <div className="">
            <div className="w-full mt-14">
                <h1
                    id="header"
                    className="tracking-widest text-4xl sm:text-6xl h-[48px] text-white/95 font-medium mt-4 mb-12 px-4 text-right"
                ></h1>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-[400px]">
                {Costumes.map((costume) => (
                    <CostumeCard
                        costume={costume}
                        key={costume.id}
                        handle={handleCostumeClick}
                    />
                ))}
                {costumeSelected && (
                    <Modal
                        show={true}
                        onClose={() => setCostumeSelected(null)}
                        className="max-w-5xl "
                    >
                        <CostumeDetails
                            costume={costume}
                            handle={() => setCostumeSelected(null)}
                        />
                    </Modal>
                )}
            </div>
        </div>
    );
}
