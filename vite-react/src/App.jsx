import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sparkles } from '@react-three/drei'
import { useRef } from 'react'

const RotatingObject = () => {
  const meshRef = useRef()
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={'#468585'} emissive={'#468585'} />

      <Sparkles count={100} scale={2} size={6} speed={0.0005} noise={0.05} color="orange" />
    </mesh>
  )

}

/**
 * The main application component, rendering a 3D scene with a rotating object and orbit controls.
 *
 * @return {JSX.Element} The JSX element representing the application.
 */
const App = () => {
  return (
    <>
      <Canvas style={{ width: '100vw', height: '100vh', display: "flex", justifyContent: "center", alignItems: "center" }}>
        <OrbitControls enableZoom enablePan enableRotate />

        <directionalLight position={[1, 1, 1]} intensity={10} color={'0x9CDBA6'} />

        <color attach="background" args={['#F0F0F0']} />
        <RotatingObject />
      </Canvas>
    </>
  )
}

export default App