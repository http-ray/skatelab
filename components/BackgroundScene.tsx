'use client';

import { Canvas, useThree } from '@react-three/fiber';
import { useGLTF, PerspectiveCamera } from '@react-three/drei';
import { Suspense, useEffect } from 'react';
import * as THREE from 'three';

function SkateShopScene() {
  const gltf = useGLTF('/models/skateshop.glb');
  const { size, set } = useThree();
  
  useEffect(() => {
    console.log('=== GLB FILE LOADED ===');
    console.log('Cameras found:', gltf.cameras);
    
    if (gltf.cameras && gltf.cameras.length > 0) {
      const cam = gltf.cameras[0] as THREE.PerspectiveCamera;
      
      // FIX: Update aspect ratio to match canvas
      const aspect = size.width / size.height;
      cam.aspect = aspect;
      cam.updateProjectionMatrix();
      
      // Set as the active camera
      set({ camera: cam });
      
      console.log('✅ Using Blender camera:');
      console.log('  Position:', cam.position);
      console.log('  Rotation:', cam.rotation);
      console.log('  FOV:', cam.fov);
      console.log('  Aspect (updated):', cam.aspect);
    } else {
      console.log('⚠️ No camera found in GLB - using fallback');
    }
  }, [gltf, size, set]);
  
  return (
    <group>
      <primitive object={gltf.scene} />
    </group>
  );
}

function Scene() {
  const gltf = useGLTF('/models/skateshop.glb');
  const hasBlenderCamera = gltf.cameras && gltf.cameras.length > 0;
  
  return (
    <>
      {/* Fallback camera - only used if no Blender camera exists */}
      {!hasBlenderCamera && (
        <PerspectiveCamera 
          makeDefault 
          position={[10, 15, -30]} 
          fov={60}
        />
      )}
      
      {/* Lighting */}
      <ambientLight intensity={2} />
      <directionalLight position={[10, 10, 10]} intensity={2} />
      <directionalLight position={[-10, 10, -10]} intensity={2} />
      <hemisphereLight intensity={1} />
      
      <Suspense fallback={null}>
        <SkateShopScene />
      </Suspense>
    </>
  );
}

export default function BackgroundScene() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas style={{ background: '#1a1a1a' }}>
        <Scene />
      </Canvas>
    </div>
  );
}

if (typeof window !== 'undefined') {
  useGLTF.preload('/models/skateshop.glb');
}
