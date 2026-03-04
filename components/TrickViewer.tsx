'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Grid } from '@react-three/drei';
import { Suspense } from 'react';

function Skateboard() {
  return (
    <group>
      {/* Deck */}
      <mesh position={[0, 0.1, 0]} castShadow>
        <boxGeometry args={[0.2, 0.02, 0.8]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* Front Truck */}
      <mesh position={[0, 0.05, 0.3]} castShadow>
        <boxGeometry args={[0.25, 0.02, 0.05]} />
        <meshStandardMaterial color="#444444" />
      </mesh>
      
      {/* Back Truck */}
      <mesh position={[0, 0.05, -0.3]} castShadow>
        <boxGeometry args={[0.25, 0.02, 0.05]} />
        <meshStandardMaterial color="#444444" />
      </mesh>
      
      {/* Wheels */}
      {[
        [-0.1, 0.03, 0.3],
        [0.1, 0.03, 0.3],
        [-0.1, 0.03, -0.3],
        [0.1, 0.03, -0.3],
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.03, 0.03, 0.04, 16]} />
          <meshStandardMaterial color="#222222" />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[2, 2, 2]} />
      <OrbitControls 
        enableZoom={true} 
        enablePan={true}
        minDistance={1}
        maxDistance={10}
      />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <pointLight position={[-5, 5, -5]} intensity={0.5} />
      
      <Skateboard />
      
      <Grid
        args={[10, 10]}
        cellSize={0.5}
        cellThickness={0.5}
        cellColor="#6e6e6e"
        sectionSize={1}
        sectionThickness={1}
        sectionColor="#9d4b4b"
        fadeDistance={10}
        fadeStrength={1}
        followCamera={false}
        infiniteGrid={true}
      />
    </>
  );
}

export default function TrickViewer() {
  return (
    <div className="w-full h-full bg-slate-900 rounded-lg overflow-hidden">
      <Canvas shadows>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
