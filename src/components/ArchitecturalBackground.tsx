import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Eye, EyeOff, Radio, Cpu, Compass, Layers, ShieldCheck, Zap } from 'lucide-react';

interface BackgroundProps {
  interactive?: boolean;
}

export const ArchitecturalBackground: React.FC<BackgroundProps> = ({ interactive = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [wireframeMode, setWireframeMode] = useState<'wireframe' | 'holo' | 'stress'>('wireframe');
  const [scanActive, setScanActive] = useState<boolean>(true);
  const [flySpeed, setFlySpeed] = useState<number>(1);
  const [telemetry, setTelemetry] = useState({
    fps: 60,
    structures: 54,
    seismicResist: '9.5 MSK',
    gridCoord: 'X: 42.87 // Y: 74.59 // Z: +1420M',
    laserAltitude: '640m'
  });

  // Keep references to Three.js objects for real-time mode changes
  const materialsRef = useRef<{
    wireframe: THREE.LineBasicMaterial;
    holo: THREE.MeshBasicMaterial;
    stress: THREE.MeshBasicMaterial;
    activeMode: 'wireframe' | 'holo' | 'stress';
  }>({
    wireframe: new THREE.LineBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.35 }),
    holo: new THREE.MeshBasicMaterial({ color: 0x0a2a4a, wireframe: true }),
    stress: new THREE.MeshBasicMaterial({ color: 0x00ff88, wireframe: true }),
    activeMode: 'wireframe'
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030407, 0.0035);

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 3000);
    camera.position.set(0, 240, 520);
    camera.lookAt(0, 100, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x030407, 0);
    container.appendChild(renderer.domElement);

    // Groups
    const cityGroup = new THREE.Group();
    scene.add(cityGroup);

    // Dynamic ground grid
    const gridHelper = new THREE.GridHelper(1600, 40, 0x00f0ff, 0x002b44);
    gridHelper.position.y = 0;
    (gridHelper.material as THREE.Material).transparent = true;
    (gridHelper.material as THREE.Material).opacity = 0.45;
    scene.add(gridHelper);

    // Sub-grid with higher frequency
    const subGrid = new THREE.GridHelper(1600, 120, 0x00ff88, 0x05131f);
    subGrid.position.y = -1;
    (subGrid.material as THREE.Material).transparent = true;
    (subGrid.material as THREE.Material).opacity = 0.2;
    scene.add(subGrid);

    // Building Data & Geometries (Futuristic Megacity Architecture)
    const buildingMeshes: {
      mesh: THREE.Object3D;
      baseY: number;
      height: number;
      speed: number;
      wireframeLines: THREE.LineSegments;
      solidMesh: THREE.Mesh;
    }[] = [];

    const cityLayout = [
      // Central Megastructure Arcology
      { x: 0, z: 0, w: 110, h: 460, d: 110, type: 'arcology' },
      { x: -160, z: -40, w: 75, h: 360, d: 75, type: 'diagrid_spire' },
      { x: 170, z: -30, w: 80, h: 390, d: 80, type: 'quantum_spire' },
      { x: 0, z: -180, w: 90, h: 320, d: 90, type: 'stepped_pyramid' },
      // Mid-tier Cyber-Towers
      { x: -120, z: 140, w: 60, h: 260, d: 60, type: 'box_tower' },
      { x: 130, z: 150, w: 65, h: 280, d: 65, type: 'box_tower' },
      { x: -280, z: -80, w: 70, h: 290, d: 70, type: 'octagonal' },
      { x: 290, z: -70, w: 70, h: 310, d: 70, type: 'octagonal' },
      { x: -260, z: 120, w: 50, h: 210, d: 50, type: 'box_tower' },
      { x: 270, z: 110, w: 55, h: 230, d: 55, type: 'box_tower' },
      // Perimeter Arcologies & Sky-Domes
      { x: -380, z: -200, w: 90, h: 180, d: 90, type: 'dome_hub' },
      { x: 380, z: -210, w: 90, h: 190, d: 90, type: 'dome_hub' },
      { x: -390, z: 80, w: 60, h: 200, d: 60, type: 'box_tower' },
      { x: 400, z: 90, w: 60, h: 190, d: 60, type: 'box_tower' },
      { x: 0, z: 280, w: 85, h: 160, d: 85, type: 'maglev_terminal' },
      { x: -180, z: 310, w: 50, h: 150, d: 50, type: 'box_tower' },
      { x: 180, z: 320, w: 50, h: 140, d: 50, type: 'box_tower' },
      // Background Horizon Towers
      { x: -500, z: -350, w: 90, h: 380, d: 90, type: 'diagrid_spire' },
      { x: 520, z: -360, w: 95, h: 410, d: 95, type: 'quantum_spire' },
      { x: -200, z: -420, w: 80, h: 330, d: 80, type: 'box_tower' },
      { x: 220, z: -430, w: 85, h: 350, d: 85, type: 'box_tower' },
      { x: 0, z: -480, w: 130, h: 480, d: 130, type: 'arcology' }
    ];

    // Generate building structures
    cityLayout.forEach((b, idx) => {
      let geom: THREE.BufferGeometry;

      if (b.type === 'diagrid_spire' || b.type === 'quantum_spire') {
        geom = new THREE.CylinderGeometry(b.w * 0.25, b.w * 0.6, b.h, 8, 16);
      } else if (b.type === 'dome_hub') {
        geom = new THREE.SphereGeometry(b.w * 0.7, 14, 12, 0, Math.PI * 2, 0, Math.PI / 2);
      } else if (b.type === 'octagonal') {
        geom = new THREE.CylinderGeometry(b.w * 0.5, b.w * 0.5, b.h, 8, 12);
      } else {
        geom = new THREE.BoxGeometry(b.w, b.h, b.d, 3, Math.floor(b.h / 30), 3);
      }

      // Wireframe Edges
      const edges = new THREE.EdgesGeometry(geom);
      const wireframeColor = idx % 3 === 0 ? 0x00f0ff : idx % 3 === 1 ? 0x00ff88 : 0x00a8ff;
      const lineMat = new THREE.LineBasicMaterial({
        color: wireframeColor,
        transparent: true,
        opacity: 0.45
      });
      const wireframeLines = new THREE.LineSegments(edges, lineMat);

      // Solid Semi-transparent Hull
      const solidMat = new THREE.MeshBasicMaterial({
        color: 0x04111d,
        transparent: true,
        opacity: 0.35,
        wireframe: false
      });
      const solidMesh = new THREE.Mesh(geom, solidMat);

      // Building container
      const buildingObj = new THREE.Group();
      buildingObj.add(solidMesh);
      buildingObj.add(wireframeLines);

      // Internal luminous core floor plates
      const floorCount = Math.floor(b.h / 40);
      for (let f = 1; f < floorCount; f++) {
        const floorY = -b.h / 2 + f * 40;
        const floorGeom = new THREE.RingGeometry(2, b.w * 0.35, 8);
        const floorMat = new THREE.MeshBasicMaterial({
          color: 0x00f0ff,
          transparent: true,
          opacity: 0.15,
          side: THREE.DoubleSide
        });
        const floorMesh = new THREE.Mesh(floorGeom, floorMat);
        floorMesh.rotation.x = Math.PI / 2;
        floorMesh.position.y = floorY;
        buildingObj.add(floorMesh);
      }

      // Antenna / spire beacon
      if (b.h > 240) {
        const spireGeom = new THREE.CylinderGeometry(1, 2, 50, 6);
        const spireMat = new THREE.MeshBasicMaterial({ color: 0x00ff88 });
        const spireMesh = new THREE.Mesh(spireGeom, spireMat);
        spireMesh.position.y = b.h / 2 + 25;
        buildingObj.add(spireMesh);

        // Pulsing point light beacon
        const beaconLight = new THREE.PointLight(0x00ff88, 0.4, 180);
        beaconLight.position.y = b.h / 2 + 50;
        buildingObj.add(beaconLight);
      }

      const posY = b.h / 2;
      buildingObj.position.set(b.x, posY, b.z);
      cityGroup.add(buildingObj);

      buildingMeshes.push({
        mesh: buildingObj,
        baseY: posY,
        height: b.h,
        speed: 0.0005 + Math.random() * 0.001,
        wireframeLines,
        solidMesh
      });
    });

    // Elevated Connecting Sky-Bridges between towers
    const bridges = [
      { from: cityLayout[0], to: cityLayout[1], yRatio: 0.65 },
      { from: cityLayout[0], to: cityLayout[2], yRatio: 0.7 },
      { from: cityLayout[0], to: cityLayout[3], yRatio: 0.55 },
      { from: cityLayout[1], to: cityLayout[6], yRatio: 0.5 },
      { from: cityLayout[2], to: cityLayout[7], yRatio: 0.5 }
    ];

    bridges.forEach((br) => {
      const p1 = new THREE.Vector3(br.from.x, br.from.h * br.yRatio, br.from.z);
      const p2 = new THREE.Vector3(br.to.x, br.to.h * br.yRatio, br.to.z);
      const distance = p1.distanceTo(p2);
      const bridgeGeom = new THREE.CylinderGeometry(4, 4, distance, 6);
      const bridgeMat = new THREE.MeshBasicMaterial({
        color: 0x00f0ff,
        wireframe: true,
        transparent: true,
        opacity: 0.4
      });
      const bridgeMesh = new THREE.Mesh(bridgeGeom, bridgeMat);

      // Orient cylinder between p1 and p2
      const midpoint = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
      bridgeMesh.position.copy(midpoint);
      bridgeMesh.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        p2.clone().sub(p1).normalize()
      );
      cityGroup.add(bridgeMesh);
    });

    // Laser Radar Scan Plane (Moving Architectural LiDAR Elevation Plane)
    const scanPlaneGeom = new THREE.PlaneGeometry(1200, 1200, 20, 20);
    const scanPlaneMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
      side: THREE.DoubleSide
    });
    const scanPlane = new THREE.Mesh(scanPlaneGeom, scanPlaneMat);
    scanPlane.rotation.x = Math.PI / 2;
    scanPlane.position.y = 80;
    scene.add(scanPlane);

    // Ambient floating quantum structural nodes (Particle Constellation)
    const particleCount = 280;
    const particleGeom = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 1200;
      positions[i + 1] = Math.random() * 500;
      positions[i + 2] = (Math.random() - 0.5) * 1200;
    }

    particleGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 3,
      transparent: true,
      opacity: 0.75
    });
    const particleSystem = new THREE.Points(particleGeom, particleMat);
    scene.add(particleSystem);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetCameraX = 0;
    let targetCameraY = 240;

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      targetCameraX = mouseX * 260;
      targetCameraY = 240 - mouseY * 90;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Observer
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
    let scanY = 40;
    let scanDirection = 1;
    let frameCounter = 0;
    let lastFpsUpdate = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Slow orbital flight rotation of city
      cityGroup.rotation.y += 0.0008 * flySpeed;

      // Smooth camera interpolation
      camera.position.x += (targetCameraX - camera.position.x) * 0.03;
      camera.position.y += (targetCameraY - camera.position.y) * 0.03;
      camera.lookAt(0, 120, 0);

      // LiDAR Laser Scan Elevation
      if (scanActive) {
        scanY += scanDirection * 70 * delta * flySpeed;
        if (scanY > 440) {
          scanY = 440;
          scanDirection = -1;
        } else if (scanY < 20) {
          scanY = 20;
          scanDirection = 1;
        }
        scanPlane.position.y = scanY;
        scanPlane.rotation.z = Math.sin(elapsedTime * 0.2) * 0.05;
      }

      // Slight pulsing glow on particles
      const posAttr = particleGeom.attributes.position as THREE.BufferAttribute;
      for (let p = 1; p < particleCount * 3; p += 3) {
        posAttr.array[p] += Math.sin(elapsedTime + p) * 0.15;
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);

      // Telemetry updates
      frameCounter++;
      const now = performance.now();
      if (now - lastFpsUpdate >= 1000) {
        setTelemetry((prev) => ({
          ...prev,
          fps: frameCounter,
          laserAltitude: `${Math.round(scanY * 2.5)}m`
        }));
        frameCounter = 0;
        lastFpsUpdate = now;
      }
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
  }, [interactive, flySpeed, scanActive]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#030407]">
      {/* Three.js Canvas Container */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-auto" />

      {/* Cyber-Grid Scanline Overlay */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

      {/* Vignette & Contrast Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030407] via-transparent to-[#030407]/80 pointer-events-none" />
      <div className="absolute inset-0 bg-radial from-transparent via-[#030407]/40 to-[#030407] pointer-events-none" />

      {/* Top HUD Telemetry Coordinates Bar */}
      <div className="absolute top-20 left-4 sm:left-8 z-10 pointer-events-none hidden md:flex items-center gap-6 font-mono text-[10px] text-cyan-400/80 tracking-widest uppercase">
        <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-[#030407]/80 border border-cyan-500/20 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>CYBER-ARCH 3D SIMULATOR // 60 FPS</span>
        </div>
        <div className="hidden lg:block text-neutral-400">
          GEO: <span className="text-white">{telemetry.gridCoord}</span>
        </div>
        <div className="hidden xl:block text-neutral-400">
          SEISMIC SHIELD: <span className="text-emerald-400">{telemetry.seismicResist}</span>
        </div>
      </div>

      {/* Bottom Interactive Flight & Scan Controls */}
      <div className="absolute bottom-6 right-4 sm:right-8 z-10 pointer-events-auto hidden sm:flex items-center gap-3 font-mono text-xs">
        <div className="hud-panel px-3 py-2 rounded-xl flex items-center gap-4 text-neutral-300">
          <div className="flex items-center gap-1.5 text-[11px] text-cyan-400">
            <Radio className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
            <span>LiDAR СКАН: {telemetry.laserAltitude}</span>
          </div>

          <button
            onClick={() => setScanActive(!scanActive)}
            className={`px-2 py-1 rounded text-[10px] uppercase tracking-wider transition-colors border ${
              scanActive
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                : 'bg-neutral-800 text-neutral-400 border-neutral-700'
            }`}
          >
            {scanActive ? 'Лазер ON' : 'Лазер OFF'}
          </button>

          <div className="h-3 w-px bg-white/10" />

          <button
            onClick={() => setFlySpeed((s) => (s === 1 ? 2 : s === 2 ? 0.5 : 1))}
            className="px-2 py-1 rounded bg-white/[0.05] hover:bg-white/10 text-[10px] text-neutral-200 border border-white/10 transition-colors uppercase"
            title="Скорость орбитальной камеры"
          >
            Скорость: {flySpeed}x
          </button>
        </div>
      </div>

      {/* Crosshair target telemetry overlay */}
      <div className="absolute top-1/2 left-8 -translate-y-1/2 pointer-events-none hidden lg:block font-mono text-[9px] text-neutral-400 space-y-1">
        <div className="text-cyan-400/90 font-bold">ALTITUDE AXIS</div>
        <div>+480M // TOWER_ALPHA</div>
        <div>+360M // QUANTUM_CORE</div>
        <div>+240M // MAGLEV_CONNECTOR</div>
        <div>+000M // TECTONIC_BED</div>
      </div>
    </div>
  );
};
