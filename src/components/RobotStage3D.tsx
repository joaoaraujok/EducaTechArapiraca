import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCcw } from 'lucide-react';
import { MediaFrame } from './ui/MediaFrame';

export type KitModuleFilter = 'all' | 'M1' | 'M2' | 'M3' | 'M4';

interface RobotStage3DProps {
  activeModule: KitModuleFilter;
  exploded: boolean;
}

interface RobotAssembly {
  root: THREE.Group;
  m1: THREE.Group;
  m2: THREE.Group;
  m3: THREE.Group;
  m4Left: THREE.Group;
  m4Right: THREE.Group;
  wheels: THREE.Mesh[];
  emissiveMaterials: Record<'M1' | 'M2' | 'M3' | 'M4', THREE.MeshStandardMaterial[]>;
}

function buildRobotAssembly(): RobotAssembly {
  const root = new THREE.Group();

  const chassisMat = new THREE.MeshStandardMaterial({
    color: 0x1e1b2e,
    metalness: 0.72,
    roughness: 0.34,
  });
  const alloyMat = new THREE.MeshStandardMaterial({
    color: 0x423e5c,
    metalness: 0.8,
    roughness: 0.25,
  });
  const pcbMat = new THREE.MeshStandardMaterial({
    color: 0x16112b,
    metalness: 0.35,
    roughness: 0.45,
  });
  const tireMat = new THREE.MeshStandardMaterial({
    color: 0x0b0b10,
    metalness: 0.12,
    roughness: 0.86,
  });

  const makeAccentMat = (color: number, intensity: number) =>
    new THREE.MeshStandardMaterial({
      color,
      emissive: new THREE.Color(color),
      emissiveIntensity: intensity,
      metalness: 0.25,
      roughness: 0.3,
    });

  const m1AccentMat = makeAccentMat(0x7c3aed, 0.55);
  const m2AccentMat = makeAccentMat(0xc4b5fd, 0.85);
  const m3AccentMat = makeAccentMat(0xddf542, 0.75);
  const m4AccentMat = makeAccentMat(0x7c3aed, 0.6);

  // M1: Chassi Estrutural & Robô Zero
  const m1 = new THREE.Group();
  const basePlate = new THREE.Mesh(new THREE.BoxGeometry(1.78, 0.12, 2.28), chassisMat);
  m1.add(basePlate);

  [-0.86, 0.86].forEach((x) => {
    const rail = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.2, 2.08), alloyMat);
    rail.position.set(x, 0.04, 0);
    m1.add(rail);
  });

  const topDeck = new THREE.Mesh(new THREE.BoxGeometry(1.62, 0.07, 1.9), chassisMat);
  topDeck.position.set(0, 0.46, -0.05);
  m1.add(topDeck);

  [
    [-0.68, -0.82],
    [0.68, -0.82],
    [-0.68, 0.72],
    [0.68, 0.72],
  ].forEach(([x, z]) => {
    const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.42, 16), alloyMat);
    pillar.position.set(x, 0.24, z);
    m1.add(pillar);
  });

  const batteryPack = new THREE.Mesh(new THREE.BoxGeometry(0.84, 0.22, 1.06), alloyMat);
  batteryPack.position.set(0, 0.18, -0.1);
  m1.add(batteryPack);

  const batteryStrap = new THREE.Mesh(new THREE.BoxGeometry(0.88, 0.05, 0.16), m1AccentMat);
  batteryStrap.position.set(0, 0.3, -0.1);
  m1.add(batteryStrap);

  // M2: Placa Controladora Lógica
  const m2 = new THREE.Group();
  const pcbBoard = new THREE.Mesh(new THREE.BoxGeometry(1.08, 0.05, 1.18), pcbMat);
  pcbBoard.position.set(0, 0.58, -0.08);
  m2.add(pcbBoard);

  [
    [-0.45, -0.56],
    [0.45, -0.56],
    [-0.45, 0.4],
    [0.45, 0.4],
  ].forEach(([x, z]) => {
    const standoff = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.032, 0.08, 12), alloyMat);
    standoff.position.set(x, 0.53, z);
    m2.add(standoff);
  });

  const mcuChip = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.06, 0.36), alloyMat);
  mcuChip.position.set(0, 0.63, -0.08);
  m2.add(mcuChip);

  [-0.4, 0.4].forEach((x) => {
    const header = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.09, 0.86), chassisMat);
    header.position.set(x, 0.64, -0.08);
    m2.add(header);
  });

  [-0.22, 0, 0.22].forEach((x) => {
    const led = new THREE.Mesh(new THREE.SphereGeometry(0.032, 12, 12), m2AccentMat);
    led.position.set(x, 0.63, 0.36);
    m2.add(led);
  });

  // M3: Sensores Ópticos e de Presença
  const m3 = new THREE.Group();
  const sensorBracket = new THREE.Mesh(new THREE.BoxGeometry(1.04, 0.22, 0.12), alloyMat);
  sensorBracket.position.set(0, 0.26, 1.14);
  m3.add(sensorBracket);

  const ultrasonicBoard = new THREE.Mesh(new THREE.BoxGeometry(0.92, 0.3, 0.05), pcbMat);
  ultrasonicBoard.position.set(0, 0.3, 1.22);
  m3.add(ultrasonicBoard);

  [-0.23, 0.23].forEach((x) => {
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.145, 0.145, 0.15, 24), alloyMat);
    barrel.rotation.x = Math.PI / 2;
    barrel.position.set(x, 0.3, 1.3);
    m3.add(barrel);

    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.018, 12, 24), m3AccentMat);
    ring.position.set(x, 0.3, 1.38);
    m3.add(ring);
  });

  const lineBar = new THREE.Mesh(new THREE.BoxGeometry(0.94, 0.05, 0.2), chassisMat);
  lineBar.position.set(0, -0.1, 1.12);
  m3.add(lineBar);

  [-0.28, 0, 0.28].forEach((x) => {
    const optPoint = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.03, 12), m3AccentMat);
    optPoint.position.set(x, -0.14, 1.12);
    m3.add(optPoint);
  });

  // M4: Motores, Rodas e Tração
  const m4Left = new THREE.Group();
  const m4Right = new THREE.Group();
  const wheels: THREE.Mesh[] = [];

  const addWheelAssembly = (group: THREE.Group, side: -1 | 1, z: number) => {
    const motorBox = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.18, 0.34), alloyMat);
    motorBox.position.set(side * 0.68, -0.06, z);
    group.add(motorBox);

    const axle = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.28, 12), alloyMat);
    axle.rotation.z = Math.PI / 2;
    axle.position.set(side * 0.92, -0.06, z);
    group.add(axle);

    const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.22, 32), tireMat);
    wheel.rotation.z = Math.PI / 2;
    wheel.position.set(side * 1.06, -0.06, z);

    const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.23, 24), alloyMat);
    wheel.add(rim);

    const spoke = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.24, 0.06), m4AccentMat);
    wheel.add(spoke);

    group.add(wheel);
    wheels.push(wheel);
  };

  [-0.74, 0.72].forEach((z) => {
    addWheelAssembly(m4Left, -1, z);
    addWheelAssembly(m4Right, 1, z);
  });

  root.add(m1, m2, m3, m4Left, m4Right);

  return {
    root,
    m1,
    m2,
    m3,
    m4Left,
    m4Right,
    wheels,
    emissiveMaterials: {
      M1: [m1AccentMat],
      M2: [m2AccentMat],
      M3: [m3AccentMat],
      M4: [m4AccentMat],
    },
  };
}

export function RobotStage3D({ activeModule, exploded }: RobotStage3DProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [webglUnavailable, setWebglUnavailable] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  const activeModuleRef = useRef(activeModule);
  const explodedRef = useRef(exploded);
  const resetViewRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    activeModuleRef.current = activeModule;
  }, [activeModule]);

  useEffect(() => {
    explodedRef.current = exploded;
  }, [exploded]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return undefined;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      setWebglUnavailable(true);
      return undefined;
    }

    const scene = new THREE.Scene();
    const initialWidth = Math.max(container.clientWidth, 300);
    const initialHeight = Math.max(container.clientHeight, 220);

    const camera = new THREE.PerspectiveCamera(36, initialWidth / initialHeight, 0.1, 100);
    camera.position.set(3.5, 2.25, 4.25);
    camera.lookAt(0, 0.25, 0);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(initialWidth, initialHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.22;

    container.innerHTML = '';
    renderer.domElement.className = 'block h-full w-full select-none';
    renderer.domElement.setAttribute('aria-hidden', 'true');
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xd8d6eb, 0.95);
    const keyLight = new THREE.DirectionalLight(0xf8f8ff, 2.4);
    keyLight.position.set(4, 6, 4);
    const rimLight = new THREE.DirectionalLight(0xc4b5fd, 1.4);
    rimLight.position.set(-4, 3, -3);
    const violetSpot = new THREE.PointLight(0x7c3aed, 4.4, 12);
    violetSpot.position.set(-2.3, 2.1, 2.2);
    const fillSpot = new THREE.PointLight(0xc4b5fd, 2.6, 10);
    fillSpot.position.set(2.4, -0.4, 2.5);
    scene.add(ambientLight, keyLight, rimLight, violetSpot, fillSpot);

    const innerRingMat = new THREE.MeshBasicMaterial({
      color: 0xc4b5fd,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide,
    });
    const outerRingMat = new THREE.MeshBasicMaterial({
      color: 0xddf542,
      transparent: true,
      opacity: 0.14,
      side: THREE.DoubleSide,
    });
    const innerRing = new THREE.Mesh(new THREE.RingGeometry(1.72, 1.75, 72), innerRingMat);
    innerRing.rotation.x = Math.PI / 2;
    innerRing.position.y = -0.54;
    const outerRing = new THREE.Mesh(new THREE.RingGeometry(2.26, 2.28, 72), outerRingMat);
    outerRing.rotation.x = Math.PI / 2;
    outerRing.position.y = -0.54;
    scene.add(innerRing, outerRing);

    const assembly = buildRobotAssembly();
    scene.add(assembly.root);

    let isVisible = true;
    let isDragging = false;
    let lastPointerX = 0;
    let lastPointerY = 0;
    let targetRotY = -0.48;
    let targetRotX = 0.06;
    let currentRotY = targetRotY;
    let currentRotX = targetRotX;
    let dragVelocityY = 0;
    let rafId = 0;
    let lastTime = performance.now();

    resetViewRef.current = () => {
      targetRotY = -0.48;
      targetRotX = 0.06;
      dragVelocityY = 0;
      setUserInteracted(false);
    };

    const handlePointerDown = (event: PointerEvent) => {
      isDragging = true;
      lastPointerX = event.clientX;
      lastPointerY = event.clientY;
      dragVelocityY = 0;
      setUserInteracted(true);
      renderer.domElement.setPointerCapture(event.pointerId);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!isDragging) return;
      const dx = event.clientX - lastPointerX;
      const dy = event.clientY - lastPointerY;
      lastPointerX = event.clientX;
      lastPointerY = event.clientY;

      targetRotY += dx * 0.011;
      targetRotX = THREE.MathUtils.clamp(targetRotX + dy * 0.006, -0.35, 0.45);
      dragVelocityY = dx * 0.0022;
    };

    const handlePointerUp = (event: PointerEvent) => {
      if (!isDragging) return;
      isDragging = false;
      if (renderer.domElement.hasPointerCapture(event.pointerId)) {
        renderer.domElement.releasePointerCapture(event.pointerId);
      }
    };

    renderer.domElement.addEventListener('pointerdown', handlePointerDown);
    renderer.domElement.addEventListener('pointermove', handlePointerMove);
    renderer.domElement.addEventListener('pointerup', handlePointerUp);
    renderer.domElement.addEventListener('pointercancel', handlePointerUp);

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const { width, height } = entry.contentRect;
      if (width <= 0 || height <= 0) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    });
    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        isVisible = Boolean(entries[0]?.isIntersecting);
      },
      { threshold: 0.05 },
    );
    intersectionObserver.observe(container);

    const animate = (now: number) => {
      rafId = requestAnimationFrame(animate);
      if (!isVisible) {
        lastTime = now;
        return;
      }

      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      if (!isDragging) {
        if (Math.abs(dragVelocityY) > 0.0002) {
          targetRotY += dragVelocityY;
          dragVelocityY *= 0.92;
        } else {
          targetRotY += dt * 0.24;
        }
      }

      currentRotY = THREE.MathUtils.lerp(currentRotY, targetRotY, 0.1);
      currentRotX = THREE.MathUtils.lerp(currentRotX, targetRotX, 0.1);
      assembly.root.rotation.y = currentRotY;
      assembly.root.rotation.x = currentRotX;

      const isExploded = explodedRef.current;
      const activeMod = activeModuleRef.current;

      const m1Y = isExploded ? -0.22 : activeMod === 'M1' ? -0.08 : 0;
      const m2Y = isExploded ? 0.56 : activeMod === 'M2' ? 0.24 : 0;
      const m3Y = isExploded ? 0.22 : activeMod === 'M3' ? 0.08 : 0;
      const m3Z = isExploded ? 0.58 : activeMod === 'M3' ? 0.24 : 0;
      const m4X = isExploded ? 0.44 : activeMod === 'M4' ? 0.16 : 0;
      const m4Y = isExploded ? -0.14 : 0;

      const lerpFactor = 0.1;
      assembly.m1.position.y = THREE.MathUtils.lerp(assembly.m1.position.y, m1Y, lerpFactor);
      assembly.m2.position.y = THREE.MathUtils.lerp(assembly.m2.position.y, m2Y, lerpFactor);
      assembly.m3.position.y = THREE.MathUtils.lerp(assembly.m3.position.y, m3Y, lerpFactor);
      assembly.m3.position.z = THREE.MathUtils.lerp(assembly.m3.position.z, m3Z, lerpFactor);
      assembly.m4Left.position.x = THREE.MathUtils.lerp(assembly.m4Left.position.x, -m4X, lerpFactor);
      assembly.m4Right.position.x = THREE.MathUtils.lerp(assembly.m4Right.position.x, m4X, lerpFactor);
      assembly.m4Left.position.y = THREE.MathUtils.lerp(assembly.m4Left.position.y, m4Y, lerpFactor);
      assembly.m4Right.position.y = THREE.MathUtils.lerp(assembly.m4Right.position.y, m4Y, lerpFactor);

      const wheelSpeed = activeMod === 'M4' ? 2.2 : 0.65;
      assembly.wheels.forEach((wheel) => {
        wheel.rotation.x += dt * wheelSpeed;
      });

      (['M1', 'M2', 'M3', 'M4'] as const).forEach((key) => {
        const targetIntensity =
          activeMod === 'all' ? 0.72 : activeMod === key ? 1.85 : 0.16;
        assembly.emissiveMaterials[key].forEach((mat) => {
          mat.emissiveIntensity = THREE.MathUtils.lerp(mat.emissiveIntensity, targetIntensity, 0.12);
        });
      });

      renderer.render(scene, camera);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      renderer.domElement.removeEventListener('pointerdown', handlePointerDown);
      renderer.domElement.removeEventListener('pointermove', handlePointerMove);
      renderer.domElement.removeEventListener('pointerup', handlePointerUp);
      renderer.domElement.removeEventListener('pointercancel', handlePointerUp);

      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });

      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (webglUnavailable) {
    return (
      <MediaFrame
        src="/images/hero-stage.jpg"
        alt="Protótipo de robótica educacional Robô Zero"
        priority
        tilt={false}
        frameTone="dark"
      />
    );
  }

  return (
    <div className="relative overflow-hidden rounded-[24px] border border-white/12 bg-gradient-to-b from-[#1A1728] via-[#13111D] to-[#0B0A11]">
      <div
        ref={mountRef}
        style={{ touchAction: 'pan-y' }}
        className="aspect-[16/10] w-full cursor-grab active:cursor-grabbing"
        role="img"
        aria-label="Modelo 3D interativo do Robô Zero"
      />

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-black/35 px-5 py-3 text-xs text-ink-light-muted sm:px-6">
        <span>Arraste horizontalmente para girar em 360°</span>
        {userInteracted && (
          <button
            type="button"
            onClick={() => resetViewRef.current?.()}
            className="inline-flex min-h-[32px] items-center gap-1.5 font-semibold text-poster-lime transition-colors hover:text-ink-light"
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Resetar ângulo</span>
          </button>
        )}
      </div>
    </div>
  );
}
