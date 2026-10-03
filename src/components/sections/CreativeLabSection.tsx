"use client";

import { useState, useRef, useEffect } from "react";
import { Sparkles, Type, Magnet, Sliders, Play, RotateCcw } from "lucide-react";
import { animate } from "animejs";
import { useDevNotifications } from "@/components/ui/DevNotificationHUD";

export function CreativeLabSection() {
  const [activeTab, setActiveTab] = useState<"bloom" | "gravity" | "type" | "motion">("bloom");
  const { notify } = useDevNotifications();

  return (
    <section id="lab" className="relative py-28 sm:py-36 px-6 sm:px-8 border-t border-[#F06595]/15 bg-[#FCFAFC]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#F06595]/15 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#D6336C] uppercase tracking-widest font-bold">
              <span className="w-2 h-2 rounded-full bg-[#D6336C] animate-ping" />
              <span>04 / CREATIVE LAB</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-[#1C1924]">
              Motion <span className="font-serif-accent italic font-normal text-gradient-rose-gold">&amp; Physics Lab</span>
            </h2>
          </div>

          <div className="max-w-md space-y-1 text-sm sm:text-base text-[#5E5568] font-light">
            <p>Experiments in kinetic anime.js choreographies, magnetic component physics, and code particle blooms.</p>
            <p className="text-xs font-mono text-[#845EF7]">{"// Front-end motion design & physics playground"}</p>
          </div>
        </div>

        {/* Experiment Navigation Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white border border-[#F06595]/20 shadow-xs w-fit">
          <button
            onClick={() => {
              setActiveTab("bloom");
              notify("inspect", "Lab 01", "Activated Code Bloom Particle Emitter");
            }}
            data-cursor="pointer"
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center space-x-2 ${
              activeTab === "bloom"
                ? "bg-gradient-to-r from-[#F06595] to-[#845EF7] text-white shadow-xs"
                : "text-[#5E5568] hover:text-[#1C1924] hover:bg-[#FAF8FB]"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 · Code Bloom</span>
          </button>

          <button
            onClick={() => {
              setActiveTab("gravity");
              notify("inspect", "Lab 02", "Activated Magnetic Component Gravity");
            }}
            data-cursor="pointer"
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center space-x-2 ${
              activeTab === "gravity"
                ? "bg-[#E64980] text-white shadow-xs"
                : "text-[#5E5568] hover:text-[#1C1924] hover:bg-[#FAF8FB]"
            }`}
          >
            <Magnet className="w-3.5 h-3.5" />
            <span>02 · Component Gravity</span>
          </button>

          <button
            onClick={() => {
              setActiveTab("type");
              notify("inspect", "Lab 03", "Activated Kinetic Typography Mechanics");
            }}
            data-cursor="pointer"
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center space-x-2 ${
              activeTab === "type"
                ? "bg-[#7048E8] text-white shadow-xs"
                : "text-[#5E5568] hover:text-[#1C1924] hover:bg-[#FAF8FB]"
            }`}
          >
            <Type className="w-3.5 h-3.5" />
            <span>03 · Type Motion</span>
          </button>

          <button
            onClick={() => {
              setActiveTab("motion");
              notify("inspect", "Lab 04", "Activated Anime.js Motion Playground");
            }}
            data-cursor="pointer"
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center space-x-2 ${
              activeTab === "motion"
                ? "bg-[#20C997] text-white shadow-xs"
                : "text-[#5E5568] hover:text-[#1C1924] hover:bg-[#FAF8FB]"
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>04 · Anime.js Stage</span>
          </button>
        </div>

        {/* Experiment Display Area */}
        <div className="relative rounded-3xl bg-white border border-[#F06595]/20 overflow-hidden shadow-[0_12px_40px_rgba(240,101,149,0.08)] p-6 sm:p-10 min-h-[460px] flex flex-col justify-between">
          {activeTab === "bloom" && <ExperimentCodeBloom />}
          {activeTab === "gravity" && <ExperimentComponentGravity />}
          {activeTab === "type" && <ExperimentTypeMotion />}
          {activeTab === "motion" && <ExperimentAnimeMotion />}
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// EXPERIMENT 01: CODE BLOOM (Light Canvas Particle Bloom)
// -------------------------------------------------------------
function ExperimentCodeBloom() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = (canvas.width = canvas.parentElement?.clientWidth || 800);
    const h = (canvas.height = 360);

    const labels = ["<React />", "TypeScript", "Anime.js", "CSS Flex", "Tailwind", "Next.js", "DOM"];
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      label?: string;
      alpha: number;
      decay: number;
    }[] = [];

    const colors = ["#F06595", "#845EF7", "#20C997", "#E64980", "#FCC2D7"];

    const addBloom = (cx: number, cy: number) => {
      const count = 18;
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const speed = 1.6 + Math.random() * 2.8;
        particles.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 3 + Math.random() * 3,
          color: colors[i % colors.length],
          label: i % 4 === 0 ? labels[Math.floor(Math.random() * labels.length)] : undefined,
          alpha: 1,
          decay: 0.016 + Math.random() * 0.01,
        });
      }
    };

    addBloom(w / 2, h / 2);

    const onPointerMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (Math.random() > 0.35) {
        addBloom(x, y);
      }
    };

    canvas.addEventListener("mousemove", onPointerMove);

    let animId: number;
    const render = () => {
      ctx.fillStyle = "rgba(252, 250, 252, 0.28)";
      ctx.fillRect(0, 0, w, h);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (p.label) {
          ctx.font = "bold 10px monospace";
          ctx.fillStyle = "#494454";
          ctx.fillText(p.label, p.x + 8, p.y + 3);
        }
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener("mousemove", onPointerMove);
    };
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-xs font-mono">
        <span className="text-[#D6336C] uppercase font-bold tracking-wider">{"// Lab 01 · Code Bloom"}</span>
        <span className="text-[#867E91]">Hover &amp; drag across canvas to sprout front-end token petals</span>
      </div>

      <div className="relative rounded-2xl overflow-hidden bg-[#FAF8FB] border border-[#F06595]/20 shadow-xs">
        <canvas ref={canvasRef} className="w-full h-[340px] cursor-crosshair block" />
        <div className="absolute bottom-3 left-4 text-[10px] font-mono text-[#867E91] pointer-events-none">
          Live Tokens: &lt;React /&gt; · TypeScript · Anime.js · CSS Flex
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// EXPERIMENT 02: COMPONENT GRAVITY (Magnetic Cursor Snapping)
// -------------------------------------------------------------
function ExperimentComponentGravity() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offsets, setOffsets] = useState<{ x: number; y: number }[]>([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);

  const cards = [
    { title: "ButtonPrimitive", sub: "variant='magnetic'", color: "#F06595", badge: "Interactive" },
    { title: "NavigationPill", sub: "active=true", color: "#845EF7", badge: "Chic Tab" },
    { title: "StatusBadge", sub: "status='online'", color: "#20C997", badge: "Reactive" },
    { title: "MetricTile", sub: "fps=60", color: "#E64980", badge: "Engineered" },
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const cardCenters = [
      { x: rect.width * 0.25, y: rect.height * 0.35 },
      { x: rect.width * 0.75, y: rect.height * 0.35 },
      { x: rect.width * 0.25, y: rect.height * 0.75 },
      { x: rect.width * 0.75, y: rect.height * 0.75 },
    ];

    const newOffsets = cardCenters.map((center) => {
      const dx = mouseX - center.x;
      const dy = mouseY - center.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 190) {
        const force = (1 - dist / 190) * 32;
        return {
          x: (dx / dist) * force,
          y: (dy / dist) * force,
        };
      }
      return { x: 0, y: 0 };
    });

    setOffsets(newOffsets);
  };

  const handleMouseLeave = () => {
    setOffsets([
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
    ]);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-xs font-mono">
        <span className="text-[#E64980] uppercase font-bold tracking-wider">{"// Lab 02 · Component Gravity"}</span>
        <span className="text-[#867E91]">Hover near blocks to witness magnetic attraction and spring recovery</span>
      </div>

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative h-[340px] rounded-2xl bg-[#FAF8FB] border border-[#F06595]/20 p-6 grid grid-cols-2 gap-4 items-center justify-center overflow-hidden"
      >
        {cards.map((card, idx) => (
          <div
            key={idx}
            style={{
              transform: `translate3d(${offsets[idx].x}px, ${offsets[idx].y}px, 0)`,
            }}
            className="p-5 rounded-2xl bg-white border border-[#F06595]/20 shadow-md transition-transform duration-150 ease-out select-none"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: card.color }} />
                <span className="text-xs font-mono font-bold text-[#1C1924]">{card.title}</span>
              </div>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#FFF0F6] text-[#D6336C]">
                {card.badge}
              </span>
            </div>
            <div className="text-[11px] font-mono text-[#5E5568]">{card.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// EXPERIMENT 03: TYPE MOTION (Kinetic Letter Mechanics)
// -------------------------------------------------------------
function ExperimentTypeMotion() {
  const [text, setText] = useState("Aisha Kotob UI");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between text-xs font-mono">
        <span className="text-[#7048E8] uppercase font-bold tracking-wider">{"// Lab 03 · Type Motion"}</span>
        <span className="text-[#867E91]">Type into the input to observe kinetic letter oscillations</span>
      </div>

      <div className="p-3.5 rounded-xl bg-[#FAF8FB] border border-[#F06595]/20">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something here..."
          className="w-full bg-transparent text-sm sm:text-base font-mono text-[#D6336C] font-bold placeholder-[#867E91] outline-none"
          maxLength={30}
        />
      </div>

      {/* Kinetic display canvas */}
      <div className="h-[220px] rounded-2xl bg-gradient-to-br from-[#FFF0F6] via-white to-[#F3F0FF] border border-[#F06595]/20 flex items-center justify-center px-4 overflow-hidden shadow-inner">
        <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
          {text.split("").map((char, idx) => (
            <span
              key={idx}
              className="inline-block text-2xl sm:text-4xl md:text-5xl font-black text-[#1C1924] hover:text-[#D6336C] hover:-translate-y-4 hover:scale-110 transition-transform duration-300 select-none cursor-pointer"
              style={{
                animation: `subtle-pulse 2.2s infinite ease-in-out ${idx * 0.08}s`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// EXPERIMENT 04: ANIME.JS STAGE (Live Motion Choreography)
// -------------------------------------------------------------
function ExperimentAnimeMotion() {
  const boxRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const runAnimeMotion = () => {
    setIsPlaying(true);

    if (boxRef.current) {
      animate(boxRef.current, {
        translateY: [-20, 0],
        rotate: [0, 360],
        scale: [0.8, 1.15, 1],
        duration: 900,
        ease: "outElastic(1, .6)",
      });
    }

    if (ringRef.current) {
      animate(ringRef.current, {
        scale: [0.6, 1.35, 1],
        opacity: [0.3, 0.9, 0.6],
        duration: 1100,
        ease: "outExpo",
      });
    }

    if (textRef.current) {
      animate(textRef.current, {
        opacity: [0, 1],
        translateY: [15, 0],
        duration: 600,
        ease: "outQuad",
      });
    }

    setTimeout(() => setIsPlaying(false), 1200);
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between text-xs font-mono">
        <span className="text-[#20C997] uppercase font-bold tracking-wider">{"// Lab 04 · Anime.js 4.5 Stage"}</span>
        <button
          onClick={runAnimeMotion}
          disabled={isPlaying}
          className="px-3.5 py-1.5 rounded-xl bg-[#20C997] hover:bg-[#12B886] text-white font-bold text-xs flex items-center space-x-1.5 shadow-sm transition-all"
        >
          <Play className="w-3 h-3" />
          <span>Play Animation</span>
        </button>
      </div>

      <div className="relative h-[270px] rounded-2xl bg-gradient-to-br from-[#E6FCF5] via-white to-[#FFF0F6] border border-[#20C997]/30 flex flex-col items-center justify-center overflow-hidden">
        {/* Animated ring */}
        <div
          ref={ringRef}
          className="absolute w-44 h-44 rounded-full border-2 border-dashed border-[#F06595]/40 pointer-events-none"
        />

        {/* Animated 3D geometric box card */}
        <div
          ref={boxRef}
          onClick={runAnimeMotion}
          data-cursor="PLAY"
          className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-[#F06595] via-[#845EF7] to-[#20C997] shadow-xl flex items-center justify-center text-white font-mono font-bold text-xl cursor-pointer"
        >
          AK
        </div>

        <div ref={textRef} className="mt-4 text-xs font-mono text-[#5E5568] font-semibold">
          Spring easing: <code>outElastic(1, .6)</code> · 60 FPS
        </div>
      </div>
    </div>
  );
}
