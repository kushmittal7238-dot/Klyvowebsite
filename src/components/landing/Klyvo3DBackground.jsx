import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Klyvo3DBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0d1117, 0.0012);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 400;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Glowing Particle Field (180 Floating 3D Glowing Nodes)
    const particleCount = 180;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorPalette = [
      new THREE.Color('#c084fc'), // Purple-400
      new THREE.Color('#38bdf8'), // Sky-400
      new THREE.Color('#f472b6'), // Pink-400
      new THREE.Color('#a855f7'), // Purple-500
      new THREE.Color('#818cf8'), // Indigo-400
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 1100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 900;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 700;

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Glow Canvas Texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.3, 'rgba(192, 132, 252, 0.85)');
    grad.addColorStop(1, 'rgba(13, 17, 23, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(16, 16, 16, 0, Math.PI * 2);
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 14,
      vertexColors: true,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // 3. 3D Perspective Moving Synthwave Grid Mesh Floor
    const gridHelper = new THREE.GridHelper(1400, 44, 0xa855f7, 0x38bdf8);
    gridHelper.position.y = -240;
    gridHelper.position.z = -120;
    gridHelper.rotation.x = 0.25;
    if (gridHelper.material) {
      gridHelper.material.transparent = true;
      gridHelper.material.opacity = 0.38;
      gridHelper.material.blending = THREE.AdditiveBlending;
    }
    scene.add(gridHelper);

    // 4. Floating 3D Glowing Geometries
    const shapeGroup = new THREE.Group();
    const shapes = [];

    const geomTypes = [
      new THREE.IcosahedronGeometry(15, 0),
      new THREE.OctahedronGeometry(18, 0),
      new THREE.TetrahedronGeometry(14, 0),
    ];

    for (let i = 0; i < 14; i++) {
      const geom = geomTypes[i % geomTypes.length];
      const mat = new THREE.MeshBasicMaterial({
        color: colorPalette[i % colorPalette.length],
        wireframe: true,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending,
      });

      const mesh = new THREE.Mesh(geom, mat);
      mesh.position.set(
        (Math.random() - 0.5) * 900,
        (Math.random() - 0.5) * 600,
        (Math.random() - 0.5) * 500
      );
      mesh.userData = {
        rotSpeedX: (Math.random() - 0.5) * 0.018,
        rotSpeedY: (Math.random() - 0.5) * 0.018,
        floatSpeed: Math.random() * 0.012 + 0.006,
        initialY: mesh.position.y,
      };

      shapes.push(mesh);
      shapeGroup.add(mesh);
    }
    scene.add(shapeGroup);

    // 5. Constellation Dynamic Lines
    const linesMaterial = new THREE.LineBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
    });
    const linesGeometry = new THREE.BufferGeometry();
    const maxLines = 120;
    const linePositions = new Float32Array(maxLines * 6);
    linesGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(linesMesh);

    // 6. Interactive Mouse Depth & Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX - window.innerWidth / 2) * 0.18;
      targetMouseY = (e.clientY - window.innerHeight / 2) * 0.18;
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        targetMouseX = (e.touches[0].clientX - window.innerWidth / 2) * 0.18;
        targetMouseY = (e.touches[0].clientY - window.innerHeight / 2) * 0.18;
      }
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('resize', handleResize);

    // 7. Render Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth Camera Mouse Parallax Interpolation
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      camera.position.x = mouseX * 0.6;
      camera.position.y = -mouseY * 0.6;
      camera.lookAt(scene.position);

      // Rotate 3D Particle Constellation
      particles.rotation.y = elapsedTime * 0.035;
      particles.rotation.x = Math.sin(elapsedTime * 0.02) * 0.06;

      // Animate Moving Synthwave Grid Floor
      gridHelper.position.z = (elapsedTime * 45) % 32 - 120;

      // Animate Floating Geometries
      shapes.forEach((mesh) => {
        mesh.rotation.x += mesh.userData.rotSpeedX;
        mesh.rotation.y += mesh.userData.rotSpeedY;
        mesh.position.y = mesh.userData.initialY + Math.sin(elapsedTime * 2 + mesh.position.x) * 18;
      });

      // Update Dynamic Connecting Lines between nearby shapes
      let lineCount = 0;
      const positionsArr = linesGeometry.attributes.position.array;

      for (let i = 0; i < shapes.length && lineCount < maxLines; i++) {
        for (let j = i + 1; j < shapes.length && lineCount < maxLines; j++) {
          const dist = shapes[i].position.distanceTo(shapes[j].position);
          if (dist < 280) {
            positionsArr[lineCount * 6] = shapes[i].position.x;
            positionsArr[lineCount * 6 + 1] = shapes[i].position.y;
            positionsArr[lineCount * 6 + 2] = shapes[i].position.z;

            positionsArr[lineCount * 6 + 3] = shapes[j].position.x;
            positionsArr[lineCount * 6 + 4] = shapes[j].position.y;
            positionsArr[lineCount * 6 + 5] = shapes[j].position.z;

            lineCount++;
          }
        }
      }
      linesGeometry.setDrawRange(0, lineCount * 2);
      linesGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup Resources
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      geometry.dispose();
      material.dispose();
      texture.dispose();
      gridHelper.geometry.dispose();
      linesGeometry.dispose();
      linesMaterial.dispose();
      geomTypes.forEach((g) => g.dispose());
      shapes.forEach((s) => s.material.dispose());
      renderer.dispose();
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#0d1117]">
      {/* Pure 3D WebGL Particle, Geometric Nodes & Moving Grid Animation Canvas */}
      <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0 opacity-95" />
      {/* Ambient Vignette & Energy Core Lighting Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/20 via-transparent to-[#0d1117]/50 pointer-events-none" />
    </div>
  );
}
