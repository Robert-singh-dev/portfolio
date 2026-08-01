"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ThreeCube.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function ThreeCube() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    // Get full window sizes
    let width = window.innerWidth;
    let height = window.innerHeight;

    // 1. Scene Setup
    const scene = new THREE.Scene();

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6;

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 4. Create Group for nested animations
    const group = new THREE.Group();
    scene.add(group);

    // 5. Marvel Tesseract Cube Setup (Outer Cube: 1.2 x 1.2 x 1.2)
    const geometry = new THREE.BoxGeometry(1.2, 1.2, 1.2);
    
    // Hyper-translucent outer glass shell (Tesseract Blue)
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x00d2ff, // Bright cosmic cyan
      transparent: true,
      opacity: 0.15, // Keep low opacity so background text is 100% readable
      roughness: 0.6, // Initially frosted/blurry
      metalness: 0.1,
      transmission: 0.9,
      thickness: 1.5,
      side: THREE.DoubleSide,
    });
    
    const cubeMesh = new THREE.Mesh(geometry, material);
    cubeMesh.scale.set(0.01, 0.01, 0.01); // Start small for load animation
    group.add(cubeMesh);

    // Glowing cyan outer wireframe edges
    const edges = new THREE.EdgesGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      linewidth: 1.5,
      transparent: true,
      opacity: 0.65,
    });
    const lineSegments = new THREE.LineSegments(edges, lineMaterial);
    cubeMesh.add(lineSegments);

    // Second group and triangle (top left, 75% size)
    const group2 = new THREE.Group();
    scene.add(group2);

    const triangleGeometry = new THREE.TetrahedronGeometry(0.85);
    const triangleMesh = new THREE.Mesh(triangleGeometry, material);
    triangleMesh.scale.set(0.01, 0.01, 0.01); // Start small for load animation
    group2.add(triangleMesh);

    const triangleEdges = new THREE.EdgesGeometry(triangleGeometry);
    const triangleLineSegments = new THREE.LineSegments(triangleEdges, lineMaterial);
    triangleMesh.add(triangleLineSegments);



    // 6. Space Particles (Starfield) Setup with Custom Radial Gradient
    const createCircleTexture = () => {
      const matCanvas = document.createElement("canvas");
      matCanvas.width = 16;
      matCanvas.height = 16;
      const matContext = matCanvas.getContext("2d");
      if (matContext) {
        const gradient = matContext.createRadialGradient(8, 8, 0, 8, 8, 8);
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.3, "rgba(255, 255, 255, 0.8)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        matContext.fillStyle = gradient;
        matContext.fillRect(0, 0, 16, 16);
      }
      return new THREE.CanvasTexture(matCanvas);
    };

    const circleTexture = createCircleTexture();
    const particleCount = 1200;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 45;
      positions[i + 1] = (Math.random() - 0.5) * 45;
      positions[i + 2] = (Math.random() - 0.5) * 45;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.12,
      map: circleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0, // Start invisible for load animation
    });

    const starField = new THREE.Points(particleGeometry, particleMaterial);
    starField.scale.set(0.01, 0.01, 0.01); // Start collapsed at center
    
    const starFieldGroup = new THREE.Group();
    scene.add(starFieldGroup);
    starFieldGroup.add(starField);

    // Top-left cube is setup above, no additional setup needed here.

    // 7. Cosmic Tesseract Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    // Cyan glowing point light
    const pointLight1 = new THREE.PointLight(0x00f0ff, 3.5, 50);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    // Deep cosmic blue point light
    const pointLight2 = new THREE.PointLight(0x0055ff, 3.0, 50);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    const updateCubePosition = () => {
      const currentAspect = camera.aspect;
      const vFov = (camera.fov * Math.PI) / 180;
      const heightAtZ0 = 2 * Math.tan(vFov / 2) * camera.position.z;
      const widthAtZ0 = heightAtZ0 * currentAspect;

      const isMobile = window.innerWidth < 768;
      const marginX = isMobile ? 0.8 : 1.2;
      const marginY = isMobile ? 0.8 : 1.2;

      // Bottom Right cube
      group.position.x = widthAtZ0 / 2 - marginX;
      group.position.y = -heightAtZ0 / 2 + marginY;

      // Top Left cube
      group2.position.x = -widthAtZ0 / 2 + marginX;
      group2.position.y = heightAtZ0 / 2 - marginY;

      // Hide triangle on mobile, and soften glass/wireframe opacities to maximize readability
      triangleMesh.visible = !isMobile;
      material.opacity = isMobile ? 0.08 : 0.15;
      lineMaterial.opacity = isMobile ? 0.3 : 0.65;
    };
    updateCubePosition();

    // 8. GSAP Floating Animation (Smooth Y-axis float)
    const floatTween = gsap.to(cubeMesh.position, {
      y: 0.35,
      duration: 3.5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      delay: 1.5, // Delay float until load zoom completes
    });

    const floatTween2 = gsap.to(triangleMesh.position, {
      y: 0.25,
      duration: 3.0,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      delay: 1.8,
    });

    // Zoom-in shapes on load (responsive target scale)
    const scaleFactor = window.innerWidth < 768 ? 0.55 : 1.0;
    gsap.to(cubeMesh.scale, {
      x: scaleFactor,
      y: scaleFactor,
      z: scaleFactor,
      duration: 2.2,
      ease: "back.out(1.5)",
    });

    gsap.to(triangleMesh.scale, {
      x: 0.75 * scaleFactor,
      y: 0.75 * scaleFactor,
      z: 0.75 * scaleFactor,
      duration: 2.2,
      ease: "back.out(1.5)",
    });

    // Spread-out starfield particles on load
    gsap.to(starField.scale, {
      x: 1,
      y: 1,
      z: 1,
      duration: 2.8,
      ease: "power3.out",
    });

    // Match exact timing of content visibility for noise and blur (roughness) reduction
    gsap.to(material, {
      roughness: 0.0,
      duration: 1.2,
      delay: 2.2,
      ease: "power2.out",
    });


    gsap.to(particleMaterial, {
      opacity: 1,
      duration: 2.0,
      ease: "power2.inOut",
    });

    // Scroll-triggered starfield upward drift (parallax flight)
    gsap.to(starFieldGroup.position, {
      y: 8,
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      }
    });

    // 9. Mouse Movement Listener for Interactive Tilt & Star Parallax
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Animate the outer cubes' local rotation target based on mouse coords
      gsap.to(cubeMesh.rotation, {
        x: y * 0.45,
        y: x * 0.45,
        duration: 1.0,
        ease: "power1.out",
        overwrite: "auto",
      });

      gsap.to(triangleMesh.rotation, {
        x: y * 0.45,
        y: x * 0.45,
        duration: 1.0,
        ease: "power1.out",
        overwrite: "auto",
      });

      // Shift the starfield in the opposite direction to create depth parallax
      gsap.to(starField.position, {
        x: -x * 0.6,
        y: -y * 0.6,
        duration: 2.0,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 10. Animation Tick Loop
    let animationFrameId: number;
    const tick = () => {
      // Rotate the outer shells continuously
      group.rotation.x += 0.002;
      group.rotation.y += 0.003;

      group2.rotation.x += 0.0015;
      group2.rotation.y += 0.0025;



      // Rotate the starfield very slowly in the background
      starField.rotation.y += 0.0003;
      starField.rotation.x += 0.0001;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(tick);
    };
    tick();

    // 11. Handle Resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      updateCubePosition();

      // Update scales responsively
      const scaleFactor = width < 768 ? 0.55 : 1.0;
      cubeMesh.scale.set(scaleFactor, scaleFactor, scaleFactor);
      triangleMesh.scale.set(0.75 * scaleFactor, 0.75 * scaleFactor, 0.75 * scaleFactor);
    };
    window.addEventListener("resize", handleResize);

    // 12. Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      floatTween.kill();
      floatTween2.kill();
      
      geometry.dispose();
      triangleGeometry.dispose();
      material.dispose();
      lineMaterial.dispose();
      edges.dispose();
      triangleEdges.dispose();


      
      particleGeometry.dispose();
      particleMaterial.dispose();
      circleTexture.dispose();
      
      renderer.dispose();
      
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className={styles.canvasContainer} ref={containerRef} />
  );
}
