// Hook personnalisé pour drag-to-scroll
import React, { useRef, useState ,useEffect } from 'react';



const useDragToScroll = () => {
  const ref = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    if (!ref.current) return;
    setIsMouseDown(true);
    setStartX(e.pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
    ref.current.style.cursor = 'grabbing';
    ref.current.style.userSelect = 'none';
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
    if (ref.current) {
      ref.current.style.cursor = 'grab';
    }
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    if (ref.current) {
      ref.current.style.cursor = 'grab';
      ref.current.style.userSelect = 'auto';
    }
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown || !ref.current) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX) * 2; // Vitesse de scroll
    ref.current.scrollLeft = scrollLeft - walk;
  };

  // Touch events pour mobile
  const handleTouchStart = (e) => {
    if (!ref.current) return;
    setIsMouseDown(true);
    setStartX(e.touches[0].pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isMouseDown || !ref.current) return;
    const x = e.touches[0].pageX - ref.current.offsetLeft;
    const walk = (x - startX) * 2;
    ref.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsMouseDown(false);
  };

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Ajout des event listeners
    element.addEventListener('mousedown', handleMouseDown);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mouseup', handleMouseUp);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('touchstart', handleTouchStart);
    element.addEventListener('touchmove', handleTouchMove);
    element.addEventListener('touchend', handleTouchEnd);

    // Nettoyage
    return () => {
      element.removeEventListener('mousedown', handleMouseDown);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mouseup', handleMouseUp);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  });

  return ref;
};
export default useDragToScroll;