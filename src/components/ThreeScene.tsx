/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, OrbitControls, useCursor } from '@react-three/drei';
import * as THREE from 'three';

// Interactive node component
function InteractiveNode({ position, size = 0.5, color = "#ffffff", index }: 
  { position: [number, number, number], size?: number, color?: string, index: number }) {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);
  
  useCursor(hovered);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 0.5 + index) * 0.1;
      
      // Rotation when active
      if (active) {
        meshRef.current.rotation.y += 0.02;
        meshRef.current.rotation.x += 0.01;
      }
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={active ? 1.4 : hovered ? 1.2 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Use cylinder geometry for log-like shapes */}
      <cylinderGeometry args={[size, size, size * 2, 8]} />
      <meshStandardMaterial 
        color={hovered ? "#555555" : color} 
        roughness={0.8}
        metalness={0.2} 
        emissive={active ? "#ffffff" : "#000000"}
        emissiveIntensity={active ? 0.3 : 0}
      />
    </mesh>
  );
}

// Log component for beaver dam-like structure
function Log({ position, rotation, scale = [0.2, 1, 0.2] }: {
  position: [number, number, number],
  rotation: [number, number, number],
  scale?: [number, number, number]
}) {
  return (
    <mesh position={position} rotation={rotation} scale={scale}>
      <cylinderGeometry args={[1, 1, 1, 8]} />
      <meshStandardMaterial color="#3a3a3a" roughness={0.9} />
    </mesh>
  );
}

// Water ripple effect
function WaterRipple({ position = [0, -2, 0], color = "#333333" }: {
  position?: [number, number, number],
  color?: string
}) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  
  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = clock.getElapsedTime();
    }
  });
  
  // Simple shader for water ripple effect
  const rippleShader = {
    uniforms: {
      time: { value: 0 }
    },
    vertexShader: `
      uniform float time;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vec3 pos = position;
        pos.y += sin(time * 2.0 + pos.x * 4.0 + pos.z * 4.0) * 0.05;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,
    fragmentShader: `
      varying vec2 vUv;
      void main() {
        float alpha = 0.3 * (1.0 - vUv.y);
        gl_FragColor = vec4(vec3(0.2, 0.2, 0.2), alpha);
      }
    `
  };
  
  return (
    <mesh position={position} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[6, 6, 32, 32]} />
      <shaderMaterial ref={materialRef} 
        args={[rippleShader]} 
        transparent={true}
      />
    </mesh>
  );
}

function BeaverDamScene({ scrollY }: { scrollY: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const waterRef = useRef<THREE.Mesh>(null);
  
  // Generate log positions for beaver dam
  const logs = useRef<{position: [number, number, number], rotation: [number, number, number], scale: [number, number, number]}[]>([]);
  
  useEffect(() => {
    // Generate random logs for the dam
    logs.current = [];
    // Base logs
    for (let i = 0; i < 15; i++) {
      const angle = (i / 15) * Math.PI * 2;
      const radius = 3 + Math.random() * 0.5;
      const x = Math.sin(angle) * radius;
      const y = -1.5 + Math.random() * 0.5;
      const z = Math.cos(angle) * radius;
      
      logs.current.push({
        position: [x, y, z],
        rotation: [Math.random() * 0.5, angle, Math.PI / 2 + Math.random() * 0.5],
        scale: [0.1 + Math.random() * 0.1, 0.8 + Math.random() * 0.4, 0.1 + Math.random() * 0.1]
      });
    }
    
    // Vertical logs
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const radius = 2 + Math.random() * 0.5;
      const x = Math.sin(angle) * radius;
      const y = -1 + Math.random() * 1;
      const z = Math.cos(angle) * radius;
      
      logs.current.push({
        position: [x, y, z],
        rotation: [Math.random() * 0.2, Math.random() * Math.PI * 2, Math.random() * 0.2],
        scale: [0.08 + Math.random() * 0.08, 0.6 + Math.random() * 0.8, 0.08 + Math.random() * 0.08]
      });
    }
  }, []);
  
  useFrame((state) => {
    if (groupRef.current) {
      // Rotate the entire scene slowly based on scroll
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05 + scrollY * 0.001;
      // Subtle bobbing motion
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.05;
    }
    
    if (waterRef.current) {
      // Animate water ripples
      waterRef.current.material.opacity = 0.4 + Math.sin(state.clock.getElapsedTime()) * 0.1;
    }
  });

  // Create nodes for interactive elements
  const nodes = [];
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    const radius = 2.5;
    const x = Math.sin(angle) * radius;
    const y = Math.random() * 2 - 1;
    const z = Math.cos(angle) * radius;
    
    nodes.push({
      position: [x, y, z] as [number, number, number],
      size: 0.1 + Math.random() * 0.1,
      color: i % 2 === 0 ? "#333333" : "#444444",
      index: i
    });
  }

  return (
    <group ref={groupRef}>
      {/* Central beaver lodge */}
      <mesh position={[0, 0, 0]}>
        <dodecahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color="#222222"
          roughness={0.8}
          metalness={0.2}
        />
      </mesh>
      
      {/* Water surface */}
      <WaterRipple />
      
      {/* Dam logs */}
      {logs.current.map((log, i) => (
        <Log key={`log-${i}`} {...log} />
      ))}
      
      {/* Interactive nodes */}
      {nodes.map((node, i) => (
        <InteractiveNode 
          key={`node-${i}`} 
          position={node.position} 
          size={node.size} 
          color={node.color}
          index={i}
        />
      ))}
      
      {/* Center focal point - beaver lodge entrance */}
      <mesh position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.3, 16]} />
        <meshBasicMaterial color="#111111" />
      </mesh>
    </group>
  );
}

function Scene({ scrollY }: { scrollY: number }) {
  const { camera } = useThree();
  
  useEffect(() => {
    // Set initial camera position
    camera.position.set(0, 0, 8);
  }, [camera]);

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 10]} intensity={0.5} />
      <pointLight position={[-5, 5, 5]} intensity={0.5} color="#ffffff" />
      <BeaverDamScene scrollY={scrollY} />
      <Environment preset="studio" />
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2.3}
        dampingFactor={0.05}
        rotateSpeed={0.05}
        autoRotate={true}
        autoRotateSpeed={0.5}
      />
    </>
  );
}

const ThreeScene = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full h-[500px] md:h-[600px]">
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 45 }}>
        <Scene scrollY={scrollY} />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
