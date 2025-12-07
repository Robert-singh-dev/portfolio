"use client";
import { useEffect } from "react";
import * as THREE from "three";
import Header from "./components/home/Header";
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Skills from "./components/home/Skills";
import Experience from "./components/home/Experience";
import Projects from "./components/home/Projects";
import Footer from "./components/home/Footer";

export default function Home() {
  // useEffect(() => {
  //   const canvas = document.getElementById("particles-canvas");
  //   if (!canvas) return;
  
  //   const scene = new THREE.Scene();
  //   const camera = new THREE.PerspectiveCamera(
  //     75,
  //     window.innerWidth / window.innerHeight,
  //     0.1,
  //     1000
  //   );
  
  //   const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  
  //   const particlesCount = 3000;
  //   const geometry = new THREE.BufferGeometry();
  //   const positions = new Float32Array(particlesCount * 3);
  //   const radius = 6;
  
  //   for (let i = 0; i < particlesCount; i++) {
  //     const phi = Math.acos(2 * Math.random() - 1);
  //     const theta = Math.random() * Math.PI * 2;
  
  //     const x = radius * Math.sin(phi) * Math.cos(theta);
  //     const y = radius * Math.sin(phi) * Math.sin(theta);
  //     const z = radius * Math.cos(phi);
  
  //     positions.set([x, y, z], i * 3);
  //   }
  
  //   geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  
  //   // Create a circle canvas texture
  //   const size = 64;
  //   const circleCanvas = document.createElement("canvas");
  //   circleCanvas.width = size;
  //   circleCanvas.height = size;
  //   const ctx = circleCanvas.getContext("2d");
  
  //   ctx.beginPath();
  //   ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
  //   ctx.closePath();
  //   ctx.fillStyle = "white";
  //   ctx.fill();
  
  //   const circleTexture = new THREE.CanvasTexture(circleCanvas);
  
  //   const material = new THREE.PointsMaterial({
  //     color: "#FFDFAF",
  //     size: 0.05,
  //     map: circleTexture,
  //     transparent: true,
  //     alphaTest: 0.5,
  //     sizeAttenuation: true,
  //     opacity: 0.9,
  //   });
  
  //   const particles = new THREE.Points(geometry, material);
  //   scene.add(particles);
  
  //   // camera.position.z = 12;

  //   camera.position.set(-8, 1.5, 12);
  
  //   const animate = () => {
  //     requestAnimationFrame(animate);
  //     const time = Date.now() * 0.001;
  
  //     for (let i = 0; i < particlesCount; i++) {
  //       const i3 = i * 3;
  //       const x = positions[i3];
  //       const y = positions[i3 + 1];
  
  //       positions[i3 + 2] = Math.sin(time + i) * 0.15;
  //     }
  //     geometry.attributes.position.needsUpdate = true;
  
  //     particles.rotation.z += 0.0015;
  //     particles.rotation.x += 0.0007;
  //     renderer.render(scene, camera);
  //   };
  
  //   animate();
  
  //   const handleResize = () => {
  //     camera.aspect = window.innerWidth / window.innerHeight;
  //     camera.updateProjectionMatrix();
  //     renderer.setSize(window.innerWidth, window.innerHeight);
  //   };
  
  //   window.addEventListener("resize", handleResize);
  
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //     renderer.dispose();
  //   };
  // }, []);
  useEffect(() => {
    const canvas = document.getElementById("particles-canvas");
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const particlesCount = 2600;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    const radius = 5;

    // Original sphere positions
    for (let i = 0; i < particlesCount; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions.set([x, y, z], i * 3);
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Store original positions for reference
    const originalPositions = positions.slice();

    // Create scattered positions randomly in a bigger cube (e.g., radius*4)
    const scatteredPositions = new Float32Array(particlesCount * 3);
    const scatterRadius = radius * 4;
    for (let i = 0; i < particlesCount; i++) {
      scatteredPositions[i * 3] = (Math.random() - 0.5) * scatterRadius * 2;
      scatteredPositions[i * 3 + 1] = (Math.random() - 0.5) * scatterRadius * 2;
      scatteredPositions[i * 3 + 2] = (Math.random() - 0.5) * scatterRadius * 2;
    }

    // Circle texture as before
    const size = 64;
    const circleCanvas = document.createElement("canvas");
    circleCanvas.width = size;
    circleCanvas.height = size;
    const ctx = circleCanvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();

    const circleTexture = new THREE.CanvasTexture(circleCanvas);

    const material = new THREE.PointsMaterial({
      color: "#FFDFAF",
      size: 0.05,
      map: circleTexture,
      transparent: true,
      alphaTest: 0.5,
      sizeAttenuation: true,
      opacity: 0.9,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    camera.position.set(0, 1, 12);

    // Track scroll progress (0 to 1)
    let scrollProgress = 0;
    const speedFactor = 3; // Increase to make scattering faster

    const onScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress = Math.min((scrollTop / docHeight) * speedFactor, 1);
    };

    window.addEventListener("scroll", onScroll);

    const animate = () => {
      requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;

        // Animate z with sine wave as before on top of base position
        const oscillation = Math.sin(time + i) * 0.15;

        // Interpolate (lerp) between original and scattered positions based on scroll progress
        positions[i3] = THREE.MathUtils.lerp(originalPositions[i3], scatteredPositions[i3], scrollProgress);
        positions[i3 + 1] = THREE.MathUtils.lerp(originalPositions[i3 + 1], scatteredPositions[i3 + 1], scrollProgress);
        positions[i3 + 2] = THREE.MathUtils.lerp(originalPositions[i3 + 2], scatteredPositions[i3 + 2], scrollProgress) + oscillation;
      }

      geometry.attributes.position.needsUpdate = true;

      particles.rotation.z += 0.0015;
      particles.rotation.x += 0.0007;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", onScroll);
      renderer.dispose();
    };
  }, []);
  return (
    <>
      <div
        id="global-particles"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 9999,
          pointerEvents: "none"
        }}
      >
        <canvas id="particles-canvas"></canvas>
      </div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}
