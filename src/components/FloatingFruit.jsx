import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, useGLTF } from "@react-three/drei";

const FloatingFruit = ({ position, color = "#6f42c1", size = 0.2, modelPath }) => {
  const ref = useRef();

  // Animate float
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
      ref.current.position.y += Math.sin(clock.getElapsedTime() + position[0]) * 0.003;
    }
  });

  // OPTIONAL: load 3D model
  // const { scene } = useGLTF(modelPath); // if using GLTF model

  return (
    <mesh ref={ref} position={position}>
      {/* GLTF Version: */}
      {/* <primitive object={scene} scale={size} /> */}

      {/* Simple sphere fruit */}
      <Sphere args={[size, 32, 32]}>
        <meshStandardMaterial color={color} />
      </Sphere>
    </mesh>
  );
};

export default FloatingFruit;
