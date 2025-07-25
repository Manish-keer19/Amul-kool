import { Canvas } from "@react-three/fiber";
import "./style.css";
import Cyl from "./Cyl";
import FloatingCan from "./FloatingCan";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

// Define positions and images
const floatingCans = [
  { position: [1.5, 0.5, 0], image: "/images/blue-drink.webp" },
  { position: [-1.2, 1, -0.5], image: "/images/orange-drink.webp" },
  { position: [0.8, -0.3, 1], image: "/images/blue-drink.webp" },
  { position: [-1, -0.5, -1], image: "/images/orange-drink.webp" },
];

const ProductDetails = () => {
  return (
    <>
      <div className="w-full h-[500px] md:h-[600px] lg:h-[700px]">
        <Canvas flat camera={{ fov: 25 }} style={{ width: "100%", height: "100%" }}>
          <ambientLight intensity={1} />
          <Cyl />

          {/* Floating Cans around the center can */}
          {floatingCans.map((can, i) => (
            <FloatingCan
              key={i}
              position={can.position}
              image={can.image}
              size={[0.25, 0.4]} // Adjust size as needed
            />
          ))}

          <EffectComposer>
            <Bloom
              mipmapBlur
              intensity={7.0}
              luminanceThreshold={0}
              luminanceSmoothing={0}
            />
          </EffectComposer>
        </Canvas>
      </div>

      <div className="w-full bg-[#FFFFF4] py-8 px-4 md:px-10 text-center">
        <h1 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight">
          Taste the Coolness, <br className="block sm:hidden" />
          Feel the Refreshment.
        </h1>
      </div>
    </>
  );
};

export default ProductDetails;
