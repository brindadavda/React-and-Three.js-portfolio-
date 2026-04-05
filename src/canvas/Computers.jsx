import { Float } from '@react-three/drei';

const Computers = () => (
  <Float speed={2} rotationIntensity={1.2} floatIntensity={1.8}>
    <mesh castShadow receiveShadow scale={1.5}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial color="#915EFF" roughness={0.25} metalness={0.6} />
    </mesh>
  </Float>
);

export default Computers;
