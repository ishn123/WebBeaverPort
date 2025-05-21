/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, OrbitControls, useCursor } from '@react-three/drei';
import * as THREE from 'three';

// Interactive node component with cleanup
function InteractiveNode({ position, size = 0.5, color = "#ffffff", index }) {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const meshRef = useRef(null);

  useCursor(hovered);

  useFrame((state) => {
    if (!meshRef.current) return;

    // Gentle floating animation
    meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 0.5 + index) * 0.1;

    // Rotation when active
    if (active) {
      meshRef.current.rotation.y += 0.02;
      meshRef.current.rotation.x += 0.01;
    }
  });

  // Cleanup resources
  useEffect(() => {
    return () => {
      if (meshRef.current) {
        meshRef.current.geometry?.dispose();
        if (Array.isArray(meshRef.current.material)) {
          meshRef.current.material.forEach(m => m.dispose());
        } else {
          meshRef.current.material?.dispose();
        }
      }
    };
  }, []);

  return (
      <mesh
          ref={meshRef}
          position={position}
          scale={active ? 1.4 : hovered ? 1.2 : 1}
          onClick={() => setActive(!active)}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
      >
        <cylinderGeometry args={[size, size, size * 2, 6]} /> {/* Reduced segments */}
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

// Log component with cleanup
function Log({ position, rotation, scale = [0.2, 1, 0.2] }) {
  const meshRef = useRef(null);

  useEffect(() => {
    return () => {
      if (meshRef.current) {
        meshRef.current.geometry?.dispose();
        if (Array.isArray(meshRef.current.material)) {
          meshRef.current.material.forEach(m => m.dispose());
        } else {
          meshRef.current.material?.dispose();
        }
      }
    };
  }, []);

  return (
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
        <cylinderGeometry args={[1, 1, 1, 6]} /> {/* Reduced segments */}
        <meshStandardMaterial color="#3a3a3a" roughness={0.9} />
      </mesh>
  );
}

// Water ripple effect with cleanup
function WaterRipple({ position = [0, -2, 0] }) {
  const materialRef = useRef(null);
  const meshRef = useRef(null);

  useFrame(({ clock }) => {
    if (materialRef.current && document.visibilityState === 'visible') {
      materialRef.current.uniforms.time.value = clock.getElapsedTime();
    }
  });

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

  useEffect(() => {
    return () => {
      if (materialRef.current) {
        materialRef.current.dispose();
      }
      if (meshRef.current?.geometry) {
        meshRef.current.geometry.dispose();
      }
    };
  }, []);

  return (
      <mesh ref={meshRef} position={position} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[6, 6, 16, 16]} /> {/* Reduced segments */}
        <shaderMaterial
            ref={materialRef}
            args={[rippleShader]}
            transparent={true}
        />
      </mesh>
  );
}

function BeaverDamScene({ scrollY }) {
  const groupRef = useRef(null);
  const logs = useRef([]);

  // Generate log positions (runs once)
  useEffect(() => {
    const newLogs = [];

    // Base logs
    for (let i = 0; i < 12; i++) { // Reduced count
      const angle = (i / 12) * Math.PI * 2;
      const radius = 3 + Math.random() * 0.5;
      const x = Math.sin(angle) * radius;
      const y = -1.5 + Math.random() * 0.5;
      const z = Math.cos(angle) * radius;

      newLogs.push({
        position: [x, y, z],
        rotation: [Math.random() * 0.5, angle, Math.PI / 2 + Math.random() * 0.5],
        scale: [0.1 + Math.random() * 0.1, 0.8 + Math.random() * 0.4, 0.1 + Math.random() * 0.1]
      });
    }

    // Vertical logs
    for (let i = 0; i < 6; i++) { // Reduced count
      const angle = (i / 6) * Math.PI * 2;
      const radius = 2 + Math.random() * 0.5;
      const x = Math.sin(angle) * radius;
      const y = -1 + Math.random();
      const z = Math.cos(angle) * radius;

      newLogs.push({
        position: [x, y, z],
        rotation: [Math.random() * 0.2, Math.random() * Math.PI * 2, Math.random() * 0.2],
        scale: [0.08 + Math.random() * 0.08, 0.6 + Math.random() * 0.8, 0.08 + Math.random() * 0.08]
      });
    }

    logs.current = newLogs;
  }, []);

  useFrame((state) => {
    if (!groupRef.current || document.visibilityState !== 'visible') return;

    // Only animate when visible
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05 + scrollY * 0.001;
    groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.05;
  });

  // Create nodes for interactive elements
  const nodes = [];
  for (let i = 0; i < 6; i++) { // Reduced count
    const angle = (i / 6) * Math.PI * 2;
    const radius = 2.5;
    const x = Math.sin(angle) * radius;
    const y = Math.random() * 2 - 1;
    const z = Math.cos(angle) * radius;

    nodes.push({
      position: [x, y, z],
      size: 0.1 + Math.random() * 0.1,
      color: i % 2 === 0 ? "#333333" : "#444444",
      index: i
    });
  }

  return (
      <group ref={groupRef}>
        {/* Central beaver lodge */}
        <mesh position={[0, 0, 0]}>
          <dodecahedronGeometry args={[1, 0]} /> {/* Simplified */}
          <meshStandardMaterial
              color="#222222"
              roughness={0.8}
              metalness={0.2}
          />
        </mesh>

        <WaterRipple />

        {logs.current.map((log, i) => (
            <Log key={`log-${i}`} {...log} />
        ))}

        {nodes.map((node, i) => (
            <InteractiveNode
                key={`node-${i}`}
                position={node.position}
                size={node.size}
                color={node.color}
                index={i}
            />
        ))}

        {/* Center focal point */}
        <mesh position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.3, 12]} /> {/* Reduced segments */}
          <meshBasicMaterial color="#111111" />
        </mesh>
      </group>
  );
}

function Scene({ scrollY }) {
  const { camera } = useThree();
  const controlsRef = useRef(null);

  useEffect(() => {
    camera.position.set(0, 0, 8);
  }, [camera]);

  return (
      <>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 10]} intensity={0.5} />
        <pointLight position={[-5, 5, 5]} intensity={0.5} color="#ffffff" />
        <BeaverDamScene scrollY={scrollY} />
        <Environment preset="sunset" /> {/* Lighter preset */}
        <OrbitControls
            ref={controlsRef}
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2.3}
            dampingFactor={0.05}
            rotateSpeed={0.05}
            autoRotate={true}
            autoRotateSpeed={0.5}
            onPointerOver={() => controlsRef.current?.reset()}
        />
      </>
  );
}

const ThreeScene = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleVisibilityChange = () => {
      setIsVisible(document.visibilityState === 'visible');
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
      <div className="w-full h-[500px] md:h-[600px] relative">
        <Canvas
            shadows
            camera={{ position: [0, 0, 8], fov: 45 }}
            onCreated={({ gl }) => {
              gl.domElement.addEventListener('webglcontextlost', (e) => {
                e.preventDefault();
                console.warn('WebGL context lost. Attempting recovery...');
                setTimeout(() => window.location.reload(), 1000);
              });
            }}
            frameloop={isVisible ? 'always' : 'demand'} // Pause when tab is inactive
        >
          {isVisible && <Scene scrollY={scrollY} />}
        </Canvas>

        {/* Loading fallback */}
        {!isVisible && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <p>Scene paused (tab inactive)</p>
            </div>
        )}
      </div>
  );
};

export default ThreeScene;