import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface CursorFollowingRobotProps {
  isScrolled?: boolean;
}

const CursorFollowingRobot = ({ isScrolled = false }: CursorFollowingRobotProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<THREE.Group | null>(null);
  const eyesRef = useRef<THREE.Group | null>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const [blink, setBlink] = useState(false);
  const [navPos, setNavPos] = useState({ top: 12, left: '50%' });
  const [isMobile, setIsMobile] = useState(false);
  const [showHello, setShowHello] = useState(true);
  const [hasShownHello, setHasShownHello] = useState(false);

  // Show HELLO for 2.5 seconds on initial load
  useEffect(() => {
    if (!hasShownHello) {
      setShowHello(true);
      const timer = setTimeout(() => {
        setShowHello(false);
        setHasShownHello(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [hasShownHello]);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Measure actual navbar position
  useEffect(() => {
    const nav = document.getElementById('navbar');
    if (!nav) return;

    const updateNavPos = () => {
      const rect = nav.getBoundingClientRect();
      // Position at the vertical center of navbar, shifted left
      setNavPos({
        top: rect.top + rect.height / 2,
        left: `${rect.left + rect.width / 2 - 600}px`, // Shifted 600px to the left
      });
    };

    updateNavPos();
    window.addEventListener('resize', updateNavPos);
    window.addEventListener('scroll', updateNavPos);
    return () => {
      window.removeEventListener('resize', updateNavPos);
      window.removeEventListener('scroll', updateNavPos);
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      25,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 12);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    /* ---------------- Lighting ---------------- */
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 0.8);
    keyLight.position.set(5, 8, 10);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.4);
    fillLight.position.set(-5, 2, 5);
    scene.add(fillLight);

    /* ---------------- Materials ---------------- */
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0xe8edf2,
      roughness: 0.25,
      metalness: 0.1,
    });

    const screenMat = new THREE.MeshStandardMaterial({
      color: 0x0a0a0a,
      roughness: 0.1,
      metalness: 0.9,
    });

    const screenBorderMat = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      roughness: 0.2,
      metalness: 0.7,
    });

    const eyeMat = new THREE.MeshStandardMaterial({
      color: 0x4fa8ff,
      emissive: 0x4fa8ff,
      emissiveIntensity: 0.9,
    });

    const pinkMat = new THREE.MeshStandardMaterial({
      color: 0xffc0e5,
      roughness: 0.3,
      metalness: 0.1,
    });

    const whiteEarMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.25,
      metalness: 0.1,
    });

    /* ---------------- Robot Head ---------------- */
    const robotHead = new THREE.Group();
    headRef.current = robotHead;
    scene.add(robotHead);

    // Main body - horizontal rounded rectangle
    const bodyWidth = 3.5;
    const bodyHeight = 2.2;
    const bodyDepth = 1.6;
    const radius = 0.65;

    // Center box
    const centerBox = new THREE.Mesh(
      new THREE.BoxGeometry(bodyWidth - radius * 2, bodyHeight - radius * 2, bodyDepth - radius * 2),
      bodyMat
    );
    robotHead.add(centerBox);

    // Corner spheres
    const cornerGeo = new THREE.SphereGeometry(radius, 32, 32);
    for (let x = -1; x <= 1; x += 2) {
      for (let y = -1; y <= 1; y += 2) {
        for (let z = -1; z <= 1; z += 2) {
          const sphere = new THREE.Mesh(cornerGeo, bodyMat);
          sphere.position.set(
            x * (bodyWidth / 2 - radius),
            y * (bodyHeight / 2 - radius),
            z * (bodyDepth / 2 - radius)
          );
          robotHead.add(sphere);
        }
      }
    }

    // Edge cylinders - X axis
    const xCylGeo = new THREE.CylinderGeometry(radius, radius, bodyWidth - radius * 2, 32);
    for (let y = -1; y <= 1; y += 2) {
      for (let z = -1; z <= 1; z += 2) {
        const cyl = new THREE.Mesh(xCylGeo, bodyMat);
        cyl.rotation.z = Math.PI / 2;
        cyl.position.set(0, y * (bodyHeight / 2 - radius), z * (bodyDepth / 2 - radius));
        robotHead.add(cyl);
      }
    }

    // Edge cylinders - Y axis
    const yCylGeo = new THREE.CylinderGeometry(radius, radius, bodyHeight - radius * 2, 32);
    for (let x = -1; x <= 1; x += 2) {
      for (let z = -1; z <= 1; z += 2) {
        const cyl = new THREE.Mesh(yCylGeo, bodyMat);
        cyl.position.set(x * (bodyWidth / 2 - radius), 0, z * (bodyDepth / 2 - radius));
        robotHead.add(cyl);
      }
    }

    // Edge cylinders - Z axis
    const zCylGeo = new THREE.CylinderGeometry(radius, radius, bodyDepth - radius * 2, 32);
    for (let x = -1; x <= 1; x += 2) {
      for (let y = -1; y <= 1; y += 2) {
        const cyl = new THREE.Mesh(zCylGeo, bodyMat);
        cyl.rotation.x = Math.PI / 2;
        cyl.position.set(x * (bodyWidth / 2 - radius), y * (bodyHeight / 2 - radius), 0);
        robotHead.add(cyl);
      }
    }

    /* ---------------- Screen with Rounded Corners ---------------- */
    const screenWidth = 2.6;
    const screenHeight = 1.5;
    const screenRadius = 0.25;

    // Screen border (lighter)
    const borderGroup = new THREE.Group();
    const borderThickness = 0.08;
    
    const borderCenter = new THREE.Mesh(
      new THREE.BoxGeometry(screenWidth - screenRadius * 2, screenHeight - screenRadius * 2, borderThickness),
      screenBorderMat
    );
    borderGroup.add(borderCenter);

    // Border corners
    const borderCornerGeo = new THREE.CylinderGeometry(screenRadius, screenRadius, borderThickness, 32);
    for (let x = -1; x <= 1; x += 2) {
      for (let y = -1; y <= 1; y += 2) {
        const corner = new THREE.Mesh(borderCornerGeo, screenBorderMat);
        corner.rotation.x = Math.PI / 2;
        corner.position.set(
          x * (screenWidth / 2 - screenRadius),
          y * (screenHeight / 2 - screenRadius),
          0
        );
        borderGroup.add(corner);
      }
    }

    // Border edges
    const borderXGeo = new THREE.BoxGeometry(screenWidth - screenRadius * 2, screenRadius * 2, borderThickness);
    for (let y = -1; y <= 1; y += 2) {
      const edge = new THREE.Mesh(borderXGeo, screenBorderMat);
      edge.position.set(0, y * (screenHeight / 2 - screenRadius), 0);
      borderGroup.add(edge);
    }

    const borderYGeo = new THREE.BoxGeometry(screenRadius * 2, screenHeight - screenRadius * 2, borderThickness);
    for (let x = -1; x <= 1; x += 2) {
      const edge = new THREE.Mesh(borderYGeo, screenBorderMat);
      edge.position.set(x * (screenWidth / 2 - screenRadius), 0, 0);
      borderGroup.add(edge);
    }

    borderGroup.position.set(0, 0.05, bodyDepth / 2 + 0.02);
    robotHead.add(borderGroup);

    // Main screen (darker, slightly smaller and forward)
    const screenGroup = new THREE.Group();
    const screenInset = 0.12;
    const actualScreenW = screenWidth - screenInset * 2;
    const actualScreenH = screenHeight - screenInset * 2;
    const actualScreenR = screenRadius - screenInset;

    const screenCenter = new THREE.Mesh(
      new THREE.BoxGeometry(actualScreenW - actualScreenR * 2, actualScreenH - actualScreenR * 2, 0.1),
      screenMat
    );
    screenGroup.add(screenCenter);

    // Screen corners
    const screenCornerGeo = new THREE.CylinderGeometry(actualScreenR, actualScreenR, 0.1, 32);
    for (let x = -1; x <= 1; x += 2) {
      for (let y = -1; y <= 1; y += 2) {
        const corner = new THREE.Mesh(screenCornerGeo, screenMat);
        corner.rotation.x = Math.PI / 2;
        corner.position.set(
          x * (actualScreenW / 2 - actualScreenR),
          y * (actualScreenH / 2 - actualScreenR),
          0
        );
        screenGroup.add(corner);
      }
    }

    // Screen edges
    const screenXGeo = new THREE.BoxGeometry(actualScreenW - actualScreenR * 2, actualScreenR * 2, 0.1);
    for (let y = -1; y <= 1; y += 2) {
      const edge = new THREE.Mesh(screenXGeo, screenMat);
      edge.position.set(0, y * (actualScreenH / 2 - actualScreenR), 0);
      screenGroup.add(edge);
    }

    const screenYGeo = new THREE.BoxGeometry(actualScreenR * 2, actualScreenH - actualScreenR * 2, 0.1);
    for (let x = -1; x <= 1; x += 2) {
      const edge = new THREE.Mesh(screenYGeo, screenMat);
      edge.position.set(x * (actualScreenW / 2 - actualScreenR), 0, 0);
      screenGroup.add(edge);
    }

    screenGroup.position.set(0, 0.05, bodyDepth / 2 + 0.08);
    robotHead.add(screenGroup);

    /* ---------------- Eyes (Two Chevrons ^^) ---------------- */
    const eyesGroup = new THREE.Group();
    eyesRef.current = eyesGroup;

    const createChevron = (xOffset: number) => {
      const shape = new THREE.Shape();
      shape.moveTo(xOffset - 0.35, 0.05);
      shape.lineTo(xOffset, 0.38);
      shape.lineTo(xOffset + 0.35, 0.05);
      shape.lineTo(xOffset + 0.22, 0.05);
      shape.lineTo(xOffset, 0.22);
      shape.lineTo(xOffset - 0.22, 0.05);
      shape.closePath();

      return new THREE.Mesh(new THREE.ShapeGeometry(shape), eyeMat);
    };

    // Create chevron eyes
    const leftChevron = createChevron(-0.6);
    const rightChevron = createChevron(0.6);
    eyesGroup.add(leftChevron);
    eyesGroup.add(rightChevron);
    eyesGroup.position.set(0, 0.05, bodyDepth / 2 + 0.13);
    eyesGroup.visible = false; // Start hidden during HELLO
    robotHead.add(eyesGroup);

    /* ---------------- V-Shaped Ears on Top ---------------- */
    // Left ear (white outside, pink inside)
    const leftEarGroup = new THREE.Group();
    
    // White outer part
    const leftEarOuter = new THREE.Mesh(
      new THREE.ConeGeometry(0.35, 1.2, 32),
      whiteEarMat
    );
    leftEarOuter.position.set(0, 0, 0);
    leftEarGroup.add(leftEarOuter);
    
    // Pink inner part
    const leftEarInner = new THREE.Mesh(
      new THREE.ConeGeometry(0.22, 0.9, 32),
      pinkMat
    );
    leftEarInner.position.set(0, 0.05, 0);
    leftEarGroup.add(leftEarInner);
    
    leftEarGroup.rotation.z = Math.PI * 0.15;
    leftEarGroup.position.set(-0.8, bodyHeight / 2 + 0.3, 0);
    robotHead.add(leftEarGroup);

    // Right ear (white outside, pink inside)
    const rightEarGroup = new THREE.Group();
    
    // White outer part
    const rightEarOuter = new THREE.Mesh(
      new THREE.ConeGeometry(0.35, 1.2, 32),
      whiteEarMat
    );
    rightEarOuter.position.set(0, 0, 0);
    rightEarGroup.add(rightEarOuter);
    
    // Pink inner part
    const rightEarInner = new THREE.Mesh(
      new THREE.ConeGeometry(0.22, 0.9, 32),
      pinkMat
    );
    rightEarInner.position.set(0, 0.05, 0);
    rightEarGroup.add(rightEarInner);
    
    rightEarGroup.rotation.z = -Math.PI * 0.15;
    rightEarGroup.position.set(0.8, bodyHeight / 2 + 0.3, 0);
    robotHead.add(rightEarGroup);

    /* ---------------- Mouse Tracking ---------------- */
    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    /* ---------------- Blink ---------------- */
    const blinkInterval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 100);
    }, 2800);

    /* ---------------- Animation ---------------- */
    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      if (headRef.current) {
        const targetY = mouse.current.x * 0.4;
        const targetX = mouse.current.y * 0.3;
        
        headRef.current.rotation.y += (targetY - headRef.current.rotation.y) * 0.1;
        headRef.current.rotation.x += (targetX - headRef.current.rotation.x) * 0.1;
        headRef.current.position.y = Math.sin(t * 1.3) * 0.06;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      clearInterval(blinkInterval);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
      renderer.dispose();
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  useEffect(() => {
    if (!eyesRef.current) return;
    eyesRef.current.scale.y = blink ? 0.08 : 1;
  }, [blink]);

  // Control eye visibility based on showHello
  useEffect(() => {
    if (!eyesRef.current) return;
    eyesRef.current.visible = !showHello;
  }, [showHello]);

  return (
    <div 
      className="fixed pointer-events-none z-50 transition-all duration-700 ease-in-out"
      style={{
        top: showHello ? '50%' : `${navPos.top}px`,
        left: showHello ? '50%' : navPos.left,
        transform: showHello 
          ? 'translate(-50%, -50%) scale(0.8)' 
          : 'translate(-50%, -50%) scale(0.35)',
        width: isMobile ? '120px' : '200px',
        height: isMobile ? '120px' : '200px',
      }}
    >
      <div ref={containerRef} className="w-full h-full" />
      
      {/* HELLO Text Overlay */}
      {showHello && (
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ 
            fontSize: isMobile ? '14px' : '20px',
            fontWeight: 'bold',
            color: '#4fa8ff',
            textShadow: '0 0 10px #4fa8ff, 0 0 20px #4fa8ff',
            letterSpacing: '2px',
            animation: 'pulse 1s ease-in-out infinite'
          }}
        >
          HELLO
        </div>
      )}
    </div>
  );
};

export default CursorFollowingRobot;