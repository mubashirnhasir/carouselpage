"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Modal from './Modal';
import { motion, AnimatePresence } from 'framer-motion';

const carouselData = Array.from({ length: 32 }, (_, i) => ({
  id: i + 1,
  label: `Day ${i + 1}`,
  day: i + 1,
  image: `/images/Rectangle 135-${i + 1 === 32 ? '' : i + 1}.png`,
  title: `Archive Title ${i + 1}`,
  name: `Saxena ${i + 1}`,
  photographer: `Appurva Shah ${i + 1}`,
  archiveLabel: `From the archive ${i + 1}` // 👈 add this
}));

export default function CarouselWithPopup() {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [showModal, setShowModal] = useState(false);
  const [direction, setDirection] = useState(0);
  const [clicked, setClicked] = useState(false);

  const openModal = (id) => {
    if (id === carouselData[currentIndex].id) {
      setShowModal(true);
    }
  };

  const closeModal = () => setShowModal(false);

  const goToNext = () => {
    setClicked(true);
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % carouselData.length);
  };

  const goToPrev = () => {
    setClicked(true);
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  const handleModalNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % carouselData.length);
  };

  const handleModalPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  const getDisplayItems = () => {
    const prev = (currentIndex - 1 + carouselData.length) % carouselData.length;
    const next = (currentIndex + 1) % carouselData.length;
    const prev2 = (currentIndex - 2 + carouselData.length) % carouselData.length;
    const next2 = (currentIndex + 2) % carouselData.length;
    return [prev2, prev, currentIndex, next, next2].map((i) => carouselData[i]);
  };

  return (
    <div className="w-full py-4 flex flex-col items-center justify-center min-h-[70vh] relative overflow-hidden">
      <div className="flex items-center justify-center w-full gap-2 relative z-20">
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-30" />
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-30" />

        <button onClick={goToPrev} className="text-black text-2xl px-3 z-40">❮</button>

        <div className="flex -space-x-16 items-center justify-center relative z-20">
          {getDisplayItems().map((item, i) => {
            const isCenter = item.id === carouselData[currentIndex].id;
            const zIndex = isCenter ? 'z-30' : i === 1 || i === 3 ? 'z-20' : 'z-10';

            let animationProps = {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: { duration: 0.5 }
            };

            if (clicked && i === 0 && direction === 1) {
              animationProps = {
                initial: { opacity: 0, y: -60 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -60 },
                transition: { duration: 0.6 }
              };
            } else if (clicked && i === 4 && direction === -1) {
              animationProps = {
                initial: { opacity: 0, y: 60 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 60 },
                transition: { duration: 0.6 }
              };
            } else if (clicked && i === 2) {
              animationProps = {
                initial: { rotateY: 180, opacity: 0 },
                animate: { rotateY: 0, opacity: 1 },
                exit: { rotateY: 90, opacity: 0 },
                transition: { duration: 0.8 }
              };
            }

            return (
              <motion.div
                key={item.id}
                onClick={() => openModal(item.id)}
                {...animationProps}
                className={`relative rounded-xl overflow-hidden flex flex-col items-center justify-center ${isCenter ? 'scale-110' : 'scale-105'} ${zIndex}`}
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  width={isCenter ? 240 : 180}
                  height={isCenter ? 360 : 250}
                  className="rounded-xl shadow-md"
                />
                <p className={`text-center mt-2 font-paytone-custom font-extrabold text-center${isCenter ? 'text-blue-800' : 'text-white'}`}>{item.label}</p>
              </motion.div>
            );
          })}
        </div>

        <button onClick={goToNext} className="text-black text-2xl px-3 z-40">❯</button>
      </div>

      <AnimatePresence>
        {showModal && (
          <Modal
            data={carouselData[currentIndex]}
            onClose={closeModal}
            onNext={handleModalNext}
            onPrev={handleModalPrev}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
