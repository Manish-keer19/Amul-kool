import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Plane } from "@react-three/drei";

const FloatingCan = ({ position, image, size = [0.3, 0.5] }) => {
  const ref = useRef();
  const texture = useLoader(TextureLoader, image);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
      ref.current.rotation.z += 0.005;
      ref.current.position.y += Math.sin(clock.getElapsedTime() + position[0]) * 0.003;
    }
  });

  return (
    <Plane
      ref={ref}
      position={position}
      args={size} // width, height
    >
      <meshStandardMaterial map={texture} transparent />
    </Plane>
  );
};

export default FloatingCan;
