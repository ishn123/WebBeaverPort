"use client";
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Beaver-inspired procedural model
function ProceduralBeaverModel({ scrollProgress = 0 }: { scrollProgress?: number }) {
  const modelRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (modelRef.current) {
      // Rotate based on time
      modelRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
      
      // Apply scroll-based transformations
      modelRef.current.position.y = Math.sin(scrollProgress * Math.PI) * 0.1;
      
      // Additional subtle animation based on time
      const t = state.clock.getElapsedTime();
      modelRef.current.children.forEach((child, index) => {
        if (child instanceof THREE.Mesh) {
          // Create breathing effect on each component
          child.position.y = Math.sin(t * 0.5 + index) * 0.03;
          child.rotation.z = Math.sin(t * 0.3 + index) * 0.03;
        }
      });
    }
  });

  // Create a beaver-inspired abstract shape
  const createBeaverModel = () => {
    const elements = [];
    
    // Base - stylized beaver dam
    elements.push(
      <mesh position={[0, -0.5, 0]} receiveShadow castShadow>
        <cylinderGeometry args={[1.2, 1.5, 0.15, 8]} />
        <meshStandardMaterial 
          color="#333333" 
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>
    );
    
    // Body - main beaver body form
    elements.push(
      <mesh position={[0, 0, 0]} castShadow>
        <ellipsoidGeometry args={[0.5, 0.3, 0.7]} />
        <meshStandardMaterial 
          color="#222222" 
          metalness={0.2} 
          roughness={0.8}
        />
      </mesh>
    );
    
    // Head
    elements.push(
      <mesh position={[0, 0.2, 0.4]} castShadow>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial 
          color="#1a1a1a"
          roughness={0.7}
        />
      </mesh>
    );
    
    // Tail
    elements.push(
      <mesh position={[0, 0, -0.6]} rotation={[0.2, 0, 0]} castShadow>
        <boxGeometry args={[0.3, 0.05, 0.5]} />
        <meshStandardMaterial 
          color="#222222"
          roughness={0.9}
        />
      </mesh>
    );
    
    // Teeth (abstracted)
    elements.push(
      <mesh position={[0, 0.1, 0.65]} castShadow>
        <boxGeometry args={[0.08, 0.04, 0.04]} />
        <meshStandardMaterial 
          color="#f5f5f5"
          roughness={0.3}
        />
      </mesh>
    );
    
    // Stylized logs around the dam
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const radius = 1;
      const x = Math.sin(angle) * radius;
      const z = Math.cos(angle) * radius;
      
      elements.push(
        <mesh 
          key={`log-${i}`}
          position={[x, -0.4, z]} 
          rotation={[0, angle, Math.PI / 2]} 
          castShadow
        >
          <cylinderGeometry args={[0.06, 0.06, 0.8, 6]} />
          <meshStandardMaterial 
            color={i % 2 === 0 ? "#3a3a3a" : "#292929"} 
            roughness={0.9}
          />
        </mesh>
      );
    }
    
    // Water ripples (abstract circles)
    for (let i = 0; i < 3; i++) {
      elements.push(
        <mesh
          key={`ripple-${i}`}
          position={[0, -0.48, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <ringGeometry args={[(i+1) * 0.4, (i+1) * 0.4 + 0.05, 16]} />
          <meshBasicMaterial color="#444" transparent opacity={0.3 - i * 0.1} />
        </mesh>
      );
    }
    
    return elements;
  };

  return (
    <group ref={modelRef}>
      {createBeaverModel()}
    </group>
  );
}

function InteractiveModelScene({ scrollProgress = 0 }: { scrollProgress?: number }) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 3]} />
      <ambientLight intensity={0.4} />
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={0.8} 
        castShadow 
        shadow-mapSize-width={1024} 
        shadow-mapSize-height={1024} 
      />
      <spotLight 
        position={[0, 5, 0]} 
        intensity={0.5} 
        castShadow 
        angle={0.5}
        penumbra={1}
      />
      <ProceduralBeaverModel scrollProgress={scrollProgress} />
    </>
  );
}

export default InteractiveModelScene;
