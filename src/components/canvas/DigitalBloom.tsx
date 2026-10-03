"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface HUDNode {
  id: string;
  name: string;
  sub: string;
  x: number;
  y: number;
  z: number;
  color: string;
  prominent: boolean;
}

const hudNodes: HUDNode[] = [
  { id: "react", name: "REACT", sub: "INTERFACES", x: 1.8, y: 0.9, z: 0.4, color: "#E64980", prominent: true },
  { id: "next", name: "NEXT.JS", sub: "PERFORMANCE", x: -1.7, y: 1.1, z: -0.2, color: "#845EF7", prominent: true },
  { id: "ts", name: "TYPESCRIPT", sub: "COMPONENTS", x: 1.4, y: -1.3, z: 0.6, color: "#7048E8", prominent: true },
  { id: "vue", name: "VUE", sub: "RESPONSIVE", x: -1.6, y: -1.0, z: 0.5, color: "#20C997", prominent: false },
  { id: "motion", name: "MOTION", sub: "ANIME.JS", x: 0.2, y: 1.9, z: 0.8, color: "#F06595", prominent: true },
  { id: "css", name: "CSS/CANVAS", sub: "CHOREOGRAPHY", x: -0.5, y: -1.8, z: -0.4, color: "#845EF7", prominent: false },
  { id: "api", name: "REST API", sub: "INTEGRATION", x: 2.1, y: -0.2, z: -0.5, color: "#F783AC", prominent: false },
];

export function DigitalBloom() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<HUDNode | null>(null);
  const [webglSupported, setWebglSupported] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      setTimeout(() => setWebglSupported(false), 0);
      return;
    }

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6.2;

    const bloomGroup = new THREE.Group();
    scene.add(bloomGroup);

    // 7 Computational petals styled with chic soft rose and lavender iridescence
    const petalCount = 7;
    const petalMeshes: THREE.Mesh[] = [];
    const petalWireframes: THREE.LineSegments[] = [];

    for (let i = 0; i < petalCount; i++) {
      const angle = (i / petalCount) * Math.PI * 2;
      const petalGeo = new THREE.TorusKnotGeometry(0.9, 0.22, 64, 16, 2, 3);

      const petalMat = new THREE.MeshPhysicalMaterial({
        color: i % 2 === 0 ? 0xf06595 : 0x845ef7,
        roughness: 0.18,
        metalness: 0.15,
        transmission: 0.72,
        transparent: true,
        opacity: 0.65,
        wireframe: false,
      });

      const mesh = new THREE.Mesh(petalGeo, petalMat);
      mesh.scale.set(0.65, 1.25, 0.45);
      mesh.rotation.z = angle;
      mesh.rotation.x = Math.PI / 4 + (i * 0.15);
      mesh.position.x = Math.cos(angle) * 0.5;
      mesh.position.y = Math.sin(angle) * 0.5;

      const wireMat = new THREE.LineBasicMaterial({
        color: i % 2 === 0 ? 0xf783ac : 0xb197fc,
        transparent: true,
        opacity: 0.45,
      });
      const wire = new THREE.LineSegments(new THREE.WireframeGeometry(petalGeo), wireMat);
      wire.scale.copy(mesh.scale);
      wire.rotation.copy(mesh.rotation);
      wire.position.copy(mesh.position);

      bloomGroup.add(mesh);
      bloomGroup.add(wire);
      petalMeshes.push(mesh);
      petalWireframes.push(wire);
    }

    // Core nucleus
    const nucleusGeo = new THREE.IcosahedronGeometry(0.55, 2);
    const nucleusMat = new THREE.MeshStandardMaterial({
      color: 0xe64980,
      roughness: 0.2,
      metalness: 0.6,
      emissive: 0xffd6e7,
      wireframe: true,
    });
    const nucleus = new THREE.Mesh(nucleusGeo, nucleusMat);
    bloomGroup.add(nucleus);

    // Dynamic HUD nodes
    hudNodes.forEach((node) => {
      const nodeGeo = new THREE.SphereGeometry(node.prominent ? 0.08 : 0.05, 16, 16);
      const nodeMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(node.color),
      });
      const nodeSphere = new THREE.Mesh(nodeGeo, nodeMat);
      nodeSphere.position.set(node.x * 0.7, node.y * 0.7, node.z * 0.7);
      bloomGroup.add(nodeSphere);

      const lineMat = new THREE.LineBasicMaterial({
        color: new THREE.Color(node.color),
        transparent: true,
        opacity: 0.35,
      });
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(node.x * 0.7, node.y * 0.7, node.z * 0.7),
      ]);
      const line = new THREE.Line(lineGeo, lineMat);
      bloomGroup.add(line);
    });

    // Elegant soft lights
    const ambLight = new THREE.AmbientLight(0xfff0f6, 1.4);
    scene.add(ambLight);

    const dirLight1 = new THREE.DirectionalLight(0xf06595, 2.2);
    dirLight1.position.set(5, 5, 4);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x845ef7, 2.0);
    dirLight2.position.set(-5, -3, 3);
    scene.add(dirLight2);

    let targetRotX = 0;
    let targetRotY = 0;

    const onPointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotY = x * 0.55;
      targetRotX = y * 0.45;
    };

    container.addEventListener("mousemove", onPointerMove);

    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        bloomGroup.rotation.y += 0.004;
        bloomGroup.rotation.x = THREE.MathUtils.lerp(bloomGroup.rotation.x, targetRotX, 0.05);
        bloomGroup.rotation.y = THREE.MathUtils.lerp(bloomGroup.rotation.y, targetRotY + elapsed * 0.15, 0.05);

        petalMeshes.forEach((mesh, idx) => {
          const breath = Math.sin(elapsed * 1.5 + idx * 0.8) * 0.04;
          mesh.scale.set(0.65 + breath, 1.25 + breath, 0.45 + breath);
          if (petalWireframes[idx]) {
            petalWireframes[idx].scale.copy(mesh.scale);
          }
        });

        nucleus.rotation.y -= 0.008;
      }

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("resize", handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  if (!webglSupported) {
    return (
      <div className="relative w-full h-[450px] flex items-center justify-center">
        <div className="p-8 rounded-3xl bg-white border border-[#F06595]/30 text-center shadow-md">
          <div className="text-sm font-mono text-[#D6336C] font-bold">{"// COMPUTATIONAL CANVAS"}</div>
          <div className="text-xl font-bold text-[#1C1924] mt-1">Interactive UI Core Active</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[450px] sm:h-[500px] flex items-center justify-center select-none">
      {/* Soft chic ambient glow */}
      <div className="absolute inset-0 bg-radial from-[#F06595]/15 via-[#845EF7]/8 to-transparent blur-3xl pointer-events-none" />

      {/* Three.js Container */}
      <div ref={containerRef} className="relative w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating Interactive Architecture HUD Tags */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          {hudNodes.map((node) => (
            <button
              key={node.id}
              onClick={() => setActiveNode(node)}
              data-cursor="pointer"
              style={{
                transform: `translate(${node.x * 90}px, ${node.y * 90}px)`,
              }}
              className="pointer-events-auto absolute p-1.5 px-3 rounded-full bg-white/90 border border-[#F06595]/30 shadow-[0_4px_16px_rgba(240,101,149,0.14)] backdrop-blur-md text-[10px] font-mono font-bold tracking-wider hover:scale-110 hover:border-[#845EF7] transition-all flex items-center space-x-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: node.color }} />
              <span className="text-[#494454]">{node.name}</span>
            </button>
          ))}
        </div>
      )}

      {/* HUD Info Popup when clicked */}
      {activeNode && (
        <div className="absolute bottom-4 left-4 p-3 rounded-2xl bg-white/95 border border-[#F06595]/40 shadow-xl backdrop-blur-md max-w-xs animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="font-bold text-[#D6336C]">{activeNode.name}</span>
            <button onClick={() => setActiveNode(null)} className="text-[#867E91] hover:text-[#D6336C]">✕</button>
          </div>
          <div className="text-[11px] text-[#5E5568] mt-1 font-mono">
            {activeNode.sub} · Frontend architectural node verified in production
          </div>
        </div>
      )}

      {/* Bottom tag indicator */}
      <div className="absolute bottom-2 right-4 px-3 py-1 rounded-full bg-white/80 border border-[#F06595]/20 text-[10px] font-mono text-[#867E91] flex items-center space-x-1.5 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-[#20C997] animate-pulse" />
        <span>THREE.JS KINETIC MESH · 60FPS</span>
      </div>
    </div>
  );
}
