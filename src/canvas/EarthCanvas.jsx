import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, Stars } from '@react-three/drei';
import Earth from './Earth';
import Loader from '../components/Loader';

const EarthCanvas = () => (
  <Canvas shadows camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}>
    <Suspense fallback={<Loader />}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 3, 4]} intensity={1.4} />
      <OrbitControls autoRotate enableZoom={false} />
      <Earth />
      <Stars radius={60} depth={30} count={1200} factor={4} fade speed={1.2} />
    </Suspense>
    <Preload all />
  </Canvas>
);

export default EarthCanvas;
