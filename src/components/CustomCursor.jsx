import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const outlineRef = useRef(null);

  // Using Refs for performant lerp without re-renders
  const mousePos = useRef({ x: -100, y: -100 });
  const outlinePos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    // Animation loop for the outer circle lag
    let animationFrameId;
    const render = () => {
      // Lerp (Linear Interpolation) for smooth trailing
      outlinePos.current.x += (mousePos.current.x - outlinePos.current.x) * 0.15;
      outlinePos.current.y += (mousePos.current.y - outlinePos.current.y) * 0.15;
      
      if (outlineRef.current) {
        outlineRef.current.style.transform = `translate3d(${outlinePos.current.x}px, ${outlinePos.current.y}px, 0) translate(-50%, -50%)`;
      }
      
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference">
      <div
        className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
      <div
        ref={outlineRef}
        className={`fixed pointer-events-none rounded-full border border-white/50 transition-all duration-300 ease-out origin-center ${isHovering ? 'w-[80px] h-[80px] bg-white/10' : 'w-[40px] h-[40px]'}`}
        style={{ top: 0, left: 0 }}
      ></div>
    </div>
  );
}
