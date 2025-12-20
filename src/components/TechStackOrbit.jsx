import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Center } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function TechIcon({ position, color, label }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.position.y = position[1] + Math.sin(t + position[0]) * 0.1;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
    </Float>
  );
}

function OrbitRing({ radius, icons }) {
  const groupRef = useRef();
  
  useFrame(() => {
    groupRef.current.rotation.y += 0.002;
  });

  return (
    <group ref={groupRef}>
      {icons.map((icon, idx) => {
        const angle = (idx / icons.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        return <TechIcon key={idx} position={[x, 0, z]} color={icon.color} label={icon.label} />;
      })}
    </group>
  );
}

export default function TechStackOrbit() {
  const techIcons = [
    { label: 'React', color: '#61DAFB' },
    { label: 'Node', color: '#68A063' },
    { label: 'MongoDB', color: '#47A248' },
    { label: 'Python', color: '#3776AB' },
    { label: 'Docker', color: '#2496ED' },
    { label: 'Git', color: '#F05032' },
  ];

  return (
    <div className="tech-orbit-container">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <OrbitRing radius={3} icons={techIcons} />
        
        <Center>
          <mesh>
            <sphereGeometry args={[0.8, 32, 32]} />
            <meshStandardMaterial
              color="#2563EB"
              metalness={0.9}
              roughness={0.1}
              emissive="#2563EB"
              emissiveIntensity={0.2}
            />
          </mesh>
        </Center>
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
