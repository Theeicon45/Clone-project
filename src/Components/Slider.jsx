import React, { useState, useEffect } from 'react';
import { maleImg, psyImg, seniorImg } from '../utils';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: psyImg,
      bigText: 'Welcome\nto\nUnited Care Homes', 
      smallText: 'Care for everyday situations',
      textPosition: 'absolute top-64 left-20',  // Adjusted left position for the first slide
    },
    {
      image: maleImg,
      bigText: 'Care for Every\nSituation',
      smallText: 'Taking care of relatives',
      textPosition: 'absolute top-72 left-1/2 transform -translate-x-1/2',  // Centering the text for the second slide
    },
    {
      image: seniorImg,
      bigText: 'Care for Every\nSituation',
      smallText: 'Providing the best senior care',
      textPosition: 'absolute top-64 right-96',  // Adjusted right position for the third slide
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, [slides.length]);

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
            src={slide.image}
            alt="slider image"
            className="w-full min-h-screen object-cover transition-transform duration-1000 ease-in-out"
            style={{ transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)' }}
          />
          <div className={`${slide.textPosition} z-20`}>
            <p
              id="bigtxt"
              className="z-10 text-slate-50 text-5xl font-semibold leading-normal transition-all duration-1000 ease-in-out whitespace-pre-line text-center" 
              style={{
                transform: index === currentSlide ? 'scale(1)' : 'scale(0.9)',
                opacity: index === currentSlide ? 1 : 0,
              }}
            >
              {slide.bigText}
            </p>
            <p
              id="smalltxt"
              className="text-2xl text-cyan-500 transition-all duration-1000 ease-in-out text-center"
              style={{
                transform: index === currentSlide ? 'scale(1)' : 'scale(0.9)',
                opacity: index === currentSlide ? 1 : 0,
              }}
            >
              {slide.smallText}
            </p>
            <div className="flex justify-center mt-5"> {/* Flexbox for centering the button */}
              <button
                type="button"
                className="bg-Orange-300 active:bg-tahiti-200 hover:bg-tahiti-200 w-44 h-16 rounded-full text-slate-100 md:uppercase font-semibold transition-all duration-1000 ease-in-out"
                style={{
                  transform: index === currentSlide ? 'scale(1)' : 'scale(0.9)',
                  opacity: index === currentSlide ? 1 : 0,
                }}
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
