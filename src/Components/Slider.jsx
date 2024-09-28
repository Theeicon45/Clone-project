import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { maleImg, psyImg, seniorImg } from '../utils';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const imgRef = useRef([]);
  const textRef = useRef([]);
  const smallTextRef = useRef([]);
  const buttonRef = useRef([]);

  const slides = [
    {
      image: psyImg,
      bigText: 'Welcome\nto\nUnited Care Homes',
      smallText: 'Care for everyday situations',
      textPosition: 'absolute top-64 left-20',
    },
    {
      image: maleImg,
      bigText: 'Care for Every\nSituation',
      smallText: 'Taking care of relatives',
      textPosition: 'absolute top-64 left-1/2 transform -translate-x-1/2',
    },
    {
      image: seniorImg,
      bigText: 'Care for Every\nSituation',
      smallText: 'Providing the best senior care',
      textPosition: 'absolute top-64 right-64',
    },
  ];

  useEffect(() => {
    // Set initial animation for the first slide
    gsap.to(imgRef.current[0], { scale: 1.5, duration: 2, ease: 'power2.inOut' });
    gsap.set([textRef.current[0], smallTextRef.current[0], buttonRef.current[0]], {
      opacity: 1,
      y: 0,
    });

    const interval = setInterval(() => {
      const previousSlide = currentSlide;
      const nextSlide = (previousSlide + 1) % slides.length;
      setCurrentSlide(nextSlide);

      // Animate the previous slide out
      gsap.to(imgRef.current[previousSlide], { scale: 1.5, duration: 2, opacity: 0 });
      gsap.to([textRef.current[previousSlide], smallTextRef.current[previousSlide], buttonRef.current[previousSlide]], {
        opacity: 0,
        y: 50,
        duration: 1,
      });

      // Animate the next slide in
      gsap.fromTo(
        imgRef.current[nextSlide],
        { scale: 1, opacity: 0 },
        { scale: 1.2, duration: 4, opacity: 1, ease: 'power2.inOut' }
      );
      gsap.fromTo(
        [textRef.current[nextSlide], smallTextRef.current[nextSlide], buttonRef.current[nextSlide]],
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1 }
      );
    }, 9000); // 5 seconds for the display + 4 seconds for scaling

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  return (
    <div className="relative w-full min-h-screen mb-8 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full min-h-screen transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ zIndex: index === currentSlide ? 1 : 0 }}
        >
          <img
            ref={(el) => (imgRef.current[index] = el)} // Store references for GSAP
            src={slide.image}
            alt="slider image"
            className="w-full min-h-screen object-cover"
          />
          <div className={`${slide.textPosition} z-20`}>
            <p
              ref={(el) => (textRef.current[index] = el)}
              id="bigtxt"
              className="z-10 text-slate-50 text-5xl font-semibold leading-normal whitespace-pre-line text-center"
            >
              {slide.bigText}
            </p>
            <p
              ref={(el) => (smallTextRef.current[index] = el)}
              id="smalltxt"
              className="text-2xl text-cyan-500 text-center"
            >
              {slide.smallText}
            </p>
            <div className="flex justify-center mt-5">
              <button
                ref={(el) => (buttonRef.current[index] = el)}
                type="button"
                className="bg-Orange-300 active:bg-tahiti-200 hover:bg-tahiti-200 w-44 h-16 rounded-full text-slate-100 md:uppercase font-semibold"
              >
                Contact us
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
