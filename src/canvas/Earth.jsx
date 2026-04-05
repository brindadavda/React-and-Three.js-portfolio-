import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Earth = () => {
  const meshRef = useRef();

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.35;
    }
  });

  return (
    <mesh ref={meshRef} scale={2.4}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial color="#2d8eff" roughness={0.7} metalness={0.1} />
    </mesh>
  );
};

export default Earth;
