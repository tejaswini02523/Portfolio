import { useEffect, useRef } from "react";

export default function Background() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame,
      width,
      height,
      points = [],
      running = false;
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const scale = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = width * scale;
      canvas.height = height * scale;
      context.setTransform(scale, 0, 0, scale, 0, 0);
      points = Array.from({ length: width < 600 ? 18 : 42 }, (_, i) => ({
        x: (i * 173.37) % width,
        y: (i * 91.73) % height,
        radius: i % 7 === 0 ? 1.6 : 0.7,
        speed: 0.07 + (i % 4) * 0.03,
      }));
      draw();
    };
    const draw = () => {
      context.clearRect(0, 0, width, height);
      points.forEach((point, i) => {
        context.fillStyle =
          i % 4 === 0 ? "rgba(146,122,255,.5)" : "rgba(126,170,255,.24)";
        context.beginPath();
        context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        context.fill();
      });
    };
    const animate = () => {
      if (!running) return;
      points.forEach((p) => {
        p.y = (p.y - p.speed + height) % height;
      });
      draw();
      frame = requestAnimationFrame(animate);
    };
    const update = () => {
      cancelAnimationFrame(frame);
      running = !media.matches && !document.hidden;
      if (running) animate();
      else draw();
    };
    resize();
    update();
    window.addEventListener("resize", resize);
    media.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    return () => {
      running = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      media.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);
  return (
    <div className="ambient-background" aria-hidden="true">
      <canvas ref={canvasRef} />
      <div className="ambient-top" />
      <svg
        className="silk-waves"
        viewBox="0 0 1440 600"
        fill="none"
        preserveAspectRatio="none"
      >
        {Array.from({ length: 9 }, (_, i) => (
          <path
            key={i}
            d={`M-100 ${400 + i * 9} C180 ${80 + i * 15}, 300 ${610 - i * 8}, 670 ${320 + i * 8} S1050 ${190 + i * 13}, 1540 ${60 + i * 14}`}
            stroke={i % 2 === 0 ? "#7645ef" : "#377cf0"}
            strokeOpacity={0.12 + i * 0.02}
            strokeWidth={i === 4 ? 2 : 0.7}
          />
        ))}
      </svg>
      <div className="ambient-floor" />
    </div>
  );
}
