import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Compass, Sparkles } from 'lucide-react';

interface BackgroundProps {
  interactive?: boolean;
}

export const ArchitecturalBackground: React.FC<BackgroundProps> = ({ interactive = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [modelMode, setModelMode] = useState<'ratio' | 'colonnade' | 'pantheon'>('colonnade');
  const [rotationActive, setRotationActive] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x121315, 0.0018);

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(50, width / height, 1, 2000);
    camera.position.set(0, 80, 360);
    camera.lookAt(0, 40, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x121315, 0);
    container.appendChild(renderer.domElement);

    // Group for classical architectural wireframe elements
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Warm bronze/brass line materials
    const warmGoldMat = new THREE.LineBasicMaterial({
      color: 0xc5a880,
      transparent: true,
      opacity: 0.28
    });

    const subtleStoneMat = new THREE.LineBasicMaterial({
      color: 0x8a7f72,
      transparent: true,
      opacity: 0.16
    });

    // 1. Classical Drafting Base Grid (Subtle, elegant)
    const draftingGrid = new THREE.GridHelper(600, 30, 0xc5a880, 0x2c2925);
    draftingGrid.position.y = -40;
    (draftingGrid.material as THREE.Material).transparent = true;
    (draftingGrid.material as THREE.Material).opacity = 0.12;
    scene.add(draftingGrid);

    // 2. Vitruvian & Golden Ratio Concentric Circles
    const circleGroup = new THREE.Group();
    const radii = [40, 64.7, 104.7, 169.4]; // Golden ratio progression (x 1.618)
    radii.forEach((r, idx) => {
      const circleGeom = new THREE.BufferGeometry();
      const points: THREE.Vector3[] = [];
      const segments = 64;
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(theta) * r, 0, Math.sin(theta) * r));
      }
      circleGeom.setFromPoints(points);
      const circleLine = new THREE.Line(circleGeom, idx % 2 === 0 ? warmGoldMat : subtleStoneMat);
      circleGroup.add(circleLine);
    });
    circleGroup.position.y = -39;
    scene.add(circleGroup);

    // 3. Classical Temple Portico Wireframe (Columns + Entablature + Pediment / Фронтон)
    const porticoGroup = new THREE.Group();

    // 8 Corinthian / Classical Columns
    const columnCount = 6;
    const porticoWidth = 220;
    const columnHeight = 90;
    const spacing = porticoWidth / (columnCount - 1);

    for (let c = 0; c < columnCount; c++) {
      const colX = -porticoWidth / 2 + c * spacing;
      
      // Column shaft (fluted cylinder wireframe)
      const colGeom = new THREE.CylinderGeometry(4.2, 5.2, columnHeight, 12, 6);
      const colEdges = new THREE.EdgesGeometry(colGeom);
      const colLines = new THREE.LineSegments(colEdges, warmGoldMat);
      colLines.position.set(colX, columnHeight / 2 - 40, 0);
      porticoGroup.add(colLines);

      // Capital / База
      const baseGeom = new THREE.BoxGeometry(13, 4, 13);
      const baseEdges = new THREE.EdgesGeometry(baseGeom);
      const baseLines = new THREE.LineSegments(baseEdges, warmGoldMat);
      baseLines.position.set(colX, -38, 0);
      porticoGroup.add(baseLines);

      // Capital / Капитель
      const capGeom = new THREE.BoxGeometry(14, 5, 14);
      const capEdges = new THREE.EdgesGeometry(capGeom);
      const capLines = new THREE.LineSegments(capEdges, warmGoldMat);
      capLines.position.set(colX, columnHeight - 38, 0);
      porticoGroup.add(capLines);
    }

    // Entablature (Антаблемент: Архитрав + Фриз + Карниз)
    const entablatureGeom = new THREE.BoxGeometry(porticoWidth + 28, 14, 28);
    const entablatureEdges = new THREE.EdgesGeometry(entablatureGeom);
    const entablatureLines = new THREE.LineSegments(entablatureEdges, warmGoldMat);
    entablatureLines.position.set(0, columnHeight - 30, 0);
    porticoGroup.add(entablatureLines);

    // Triangular Pediment / Тимпан фронтона
    const pedimentHeight = 35;
    const pedimentGeom = new THREE.ConeGeometry(porticoWidth * 0.55, pedimentHeight, 4);
    const pedimentEdges = new THREE.EdgesGeometry(pedimentGeom);
    const pedimentLines = new THREE.LineSegments(pedimentEdges, warmGoldMat);
    pedimentLines.position.set(0, columnHeight - 20 + pedimentHeight / 2, 0);
    pedimentLines.rotation.y = Math.PI / 4;
    porticoGroup.add(pedimentLines);

    // Dome wireframe behind portico
    const domeGeom = new THREE.SphereGeometry(65, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2);
    const domeEdges = new THREE.EdgesGeometry(domeGeom);
    const domeLines = new THREE.LineSegments(domeEdges, subtleStoneMat);
    domeLines.position.set(0, columnHeight - 20, -50);
    porticoGroup.add(domeLines);

    mainGroup.add(porticoGroup);

    // Delicate floating golden particles (architectural dust / light motes)
    const particleCount = 120;
    const particleGeom = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 600;
      positions[i + 1] = Math.random() * 250 - 40;
      positions[i + 2] = (Math.random() - 0.5) * 400;
    }

    particleGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xc5a880,
      size: 2,
      transparent: true,
      opacity: 0.4
    });
    const particleSystem = new THREE.Points(particleGeom, particleMat);
    scene.add(particleSystem);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetCameraX = 0;
    let targetCameraY = 80;

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      targetCameraX = mouseX * 90;
      targetCameraY = 80 - mouseY * 40;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (rotationActive) {
        mainGroup.rotation.y += 0.0012;
        circleGroup.rotation.y -= 0.0006;
      }

      // Smooth camera interpolation
      camera.position.x += (targetCameraX - camera.position.x) * 0.04;
      camera.position.y += (targetCameraY - camera.position.y) * 0.04;
      camera.lookAt(0, 30, 0);

      // Subtle particle float
      const posAttr = particleGeom.attributes.position as THREE.BufferAttribute;
      for (let p = 1; p < particleCount * 3; p += 3) {
        posAttr.array[p] += Math.sin(clock.getElapsedTime() + p) * 0.04;
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [interactive, rotationActive]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#121315]">
      {/* Three.js Canvas Container */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-auto opacity-70" />

      {/* Subtle classical architectural grid overlay */}
      <div className="absolute inset-0 classic-grid opacity-60 pointer-events-none" />

      {/* Vignette & Soft Gradient for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#121315] via-transparent to-[#121315]/80 pointer-events-none" />
      <div className="absolute inset-0 bg-radial from-transparent via-[#121315]/40 to-[#121315] pointer-events-none" />

      {/* Classical Vitruvian Proportions Badge (Minimalist) */}
      <div className="absolute top-20 left-6 sm:left-10 z-10 pointer-events-none hidden md:flex items-center gap-4 text-[11px] text-[#c5a880]/80 tracking-[0.25em] uppercase font-serif">
        <span className="inline-block w-2 h-2 rounded-full border border-[#c5a880]/60" />
        <span>FIRMITAS • UTILITAS • VENUSTAS // Ф = 1.618</span>
      </div>

      {/* Minimalist Rotation Control */}
      <div className="absolute bottom-6 right-6 sm:right-10 z-10 pointer-events-auto hidden sm:flex items-center gap-3 text-xs">
        <button
          onClick={() => setRotationActive(!rotationActive)}
          className="px-3 py-1.5 rounded-sm bg-[#1a1b1f]/80 hover:bg-[#222429] text-[11px] text-[#c5a880] border border-[#c5a880]/30 transition-colors uppercase tracking-widest font-serif flex items-center gap-1.5"
          title="Вращение архитектурной модели"
        >
          <Compass className="w-3.5 h-3.5" />
          <span>{rotationActive ? 'Вращение: Вкл' : 'Вращение: Пауза'}</span>
        </button>
      </div>
    </div>
  );
};
