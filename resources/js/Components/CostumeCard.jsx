import React, { useEffect, useRef, useState } from "react";
export default function CostumeCard({ costume, handle }) {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(imgRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <button onClick={() => handle(costume.id)}>
      {isVisible ? (
        <img
          src={`/costumesImages/${costume.id}/${costume.images.cover}`}
          alt={costume.name}
          className="md:h-80 md:w-54 shadow-xl transition-transform transform hover:scale-105"
        />
      ) : (
        <div ref={imgRef} className="md:h-80 md:w-54" />
      )}
    </button>
  );
}
