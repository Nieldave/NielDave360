import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const CursorFollowingRobot = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const headGroup = useRef<THREE.Group | null>(null);
  const leftEye = useRef<THREE.Mesh | null>(null);
  const rightEye = useRef<THREE.Mesh | null>(null);
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 6;
    camera.position.y = 0;

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00d9ff, 1.2, 100);
    pointLight1.position.set(3, 3, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x00d9ff, 0.8, 100);
    pointLight2.position.set(-3, 2, 5);
    scene.add(pointLight2);

    // Head Group
    const head = new THREE.Group();
    headGroup.current = head;
    scene.add(head);

    // Outer frame (light blue/gray)
    const outerFrameGeometry = new THREE.BoxGeometry(3.5, 2.2, 0.8);
    const outerFrameMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xb8c5d6,
      shininess: 60
    });
    const outerFrame = new THREE.Mesh(outerFrameGeometry, outerFrameMaterial);
    outerFrame.position.z = -0.2;
    head.add(outerFrame);

    // Round the outer frame edges
    const outerEdgeGeometry = new THREE.CylinderGeometry(0.4, 0.4, 2.2, 16);
    outerEdgeGeometry.rotateZ(Math.PI / 2);
    
    const leftEdge = new THREE.Mesh(outerEdgeGeometry, outerFrameMaterial);
    leftEdge.position.set(-1.75, 0, -0.2);
    head.add(leftEdge);

    const rightEdge = new THREE.Mesh(outerEdgeGeometry, outerFrameMaterial);
    rightEdge.position.set(1.75, 0, -0.2);
    head.add(rightEdge);

    // Top rounded part
    const topGeometry = new THREE.CylinderGeometry(0.4, 0.4, 3.5, 16);
    topGeometry.rotateZ(Math.PI / 2);
    const topEdge = new THREE.Mesh(topGeometry, outerFrameMaterial);
    topEdge.position.set(0, 1.1, -0.2);
    topEdge.rotation.z = Math.PI / 2;
    head.add(topEdge);

    // Bottom rounded part
    const bottomEdge = new THREE.Mesh(topGeometry, outerFrameMaterial);
    bottomEdge.position.set(0, -1.1, -0.2);
    bottomEdge.rotation.z = Math.PI / 2;
    head.add(bottomEdge);

    // Inner screen (dark blue)
    const screenGeometry = new THREE.BoxGeometry(3, 1.8, 0.3);
    const screenMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x1a3d5c,
      shininess: 100
    });
    const screen = new THREE.Mesh(screenGeometry, screenMaterial);
    screen.position.z = 0.1;
    head.add(screen);

    // Round the screen edges
    const screenEdgeGeometry = new THREE.CylinderGeometry(0.3, 0.3, 1.8, 16);
    screenEdgeGeometry.rotateZ(Math.PI / 2);
    
    const leftScreenEdge = new THREE.Mesh(screenEdgeGeometry, screenMaterial);
    leftScreenEdge.position.set(-1.5, 0, 0.1);
    head.add(leftScreenEdge);

    const rightScreenEdge = new THREE.Mesh(screenEdgeGeometry, screenMaterial);
    rightScreenEdge.position.set(1.5, 0, 0.1);
    head.add(rightScreenEdge);

    // Screen shine effect
    const shineGeometry = new THREE.BoxGeometry(1.5, 1.2, 0.31);
    const shineMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x2d5a7b,
      transparent: true,
      opacity: 0.6,
      shininess: 120
    });
    const shine = new THREE.Mesh(shineGeometry, shineMaterial);
    shine.position.set(-0.5, 0.3, 0.11);
    head.add(shine);

    // Eyes
    const eyeGeometry = new THREE.SphereGeometry(0.35, 32, 32);
    const eyeMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x00ffff,
      emissive: 0x00d9ff,
      emissiveIntensity: 0.8,
      shininess: 100
    });
    
    const leftEyeMesh = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEyeMesh.position.set(-0.7, 0.1, 0.35);
    leftEyeMesh.scale.set(1, 1, 0.3);
    leftEye.current = leftEyeMesh;
    head.add(leftEyeMesh);

    const rightEyeMesh = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEyeMesh.position.set(0.7, 0.1, 0.35);
    rightEyeMesh.scale.set(1, 1, 0.3);
    rightEye.current = rightEyeMesh;
    head.add(rightEyeMesh);

    // Side antennas/ears (darker blue)
    const antennaGeometry = new THREE.SphereGeometry(0.45, 32, 32);
    const antennaMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x1a3d5c,
      shininess: 80
    });

    const leftAntenna = new THREE.Mesh(antennaGeometry, antennaMaterial);
    leftAntenna.position.set(-2.1, 0, 0);
    leftAntenna.scale.set(1, 1, 0.5);
    head.add(leftAntenna);

    const rightAntenna = new THREE.Mesh(antennaGeometry, antennaMaterial);
    rightAntenna.position.set(2.1, 0, 0);
    rightAntenna.scale.set(1, 1, 0.5);
    head.add(rightAntenna);

    // Antenna inner cyan rings
    const ringGeometry = new THREE.TorusGeometry(0.25, 0.08, 16, 32);
    const ringMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x00ffff,
      emissive: 0x00d9ff,
      emissiveIntensity: 0.5
    });

    const leftRing = new THREE.Mesh(ringGeometry, ringMaterial);
    leftRing.position.set(-2.1, 0, 0.2);
    head.add(leftRing);

    const rightRing = new THREE.Mesh(ringGeometry, ringMaterial);
    rightRing.position.set(2.1, 0, 0.2);
    head.add(rightRing);

    // Top antenna
    const topAntennaGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.8, 16);
    const topAntennaMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x1a3d5c,
      shininess: 80
    });
    const topAntenna = new THREE.Mesh(topAntennaGeometry, topAntennaMaterial);
    topAntenna.position.set(0, 1.5, 0);
    head.add(topAntenna);

    // Top antenna cap
    const capGeometry = new THREE.BoxGeometry(0.4, 0.2, 0.4);
    const cap = new THREE.Mesh(capGeometry, topAntennaMaterial);
    cap.position.set(0, 1.95, 0);
    head.add(cap);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      mousePos.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mousePos.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Blink interval
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 5000);

    // Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Rotate head to follow cursor
      if (headGroup.current) {
        const targetRotationY = mousePos.current.x * 0.4;
        const targetRotationX = mousePos.current.y * 0.25;
        
        headGroup.current.rotation.y += (targetRotationY - headGroup.current.rotation.y) * 0.08;
        headGroup.current.rotation.x += (targetRotationX - headGroup.current.rotation.x) * 0.08;
      }

      // Gentle bobbing animation
      if (headGroup.current) {
        headGroup.current.position.y = Math.sin(Date.now() * 0.0015) * 0.08;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      clearInterval(blinkInterval);
      cancelAnimationFrame(animationId);
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, []);

  // Handle blinking animation
  useEffect(() => {
    if (!leftEye.current || !rightEye.current) return;

    if (isBlinking) {
      leftEye.current.scale.y = 0.1;
      rightEye.current.scale.y = 0.1;
    } else {
      leftEye.current.scale.y = 1;
      rightEye.current.scale.y = 1;
    }
  }, [isBlinking]);

  return (
    <div 
      ref={containerRef} 
      className="fixed top-16 left-1/2 transform -translate-x-1/2 w-80 h-48 pointer-events-none z-50"
      style={{ 
        filter: 'drop-shadow(0 0 40px rgba(0, 217, 255, 0.4))'
      }}
    />
  );
};

export default CursorFollowingRobot;