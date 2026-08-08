import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function ContourShape({
  scale = 1,
  offsetX = 0,
  offsetY = 0,
  rotation = 0,
  mouseX,
  mouseY,
}) {
  const groupRef = useRef();

  const lines = Array.from(
    { length: 13 },
    (_, index) => index
  );

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (!groupRef.current) return;

    // =========================
    // FLOATING MOVEMENT
    // =========================

    const floatingY =
      Math.sin(time * 0.65) * 0.085;

    const floatingX =
      Math.cos(time * 0.45) * 0.045;

    // =========================
    // MOUSE PARALLAX
    // =========================

    const targetX = mouseX.current * 0.12;
    const targetY = mouseY.current * 0.08;

    // Smooth mouse movement
    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      offsetX + floatingX + targetX,
      0.05
    );

    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      offsetY + floatingY + targetY,
      0.05
    );

    // =========================
    // SLOW ROTATION
    // =========================

    const targetRotationZ =
      rotation +
      Math.sin(time * 0.18) * 0.045 +
      mouseX.current * 0.035;

    groupRef.current.rotation.z =
      THREE.MathUtils.lerp(
        groupRef.current.rotation.z,
        targetRotationZ,
        0.05
      );

    // =========================
    // 3D TILT
    // =========================

    const targetRotationX =
      Math.sin(time * 0.22) * 0.025 +
      mouseY.current * 0.035;

    const targetRotationY =
      Math.cos(time * 0.2) * 0.025 +
      mouseX.current * 0.04;

    groupRef.current.rotation.x =
      THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotationX,
        0.05
      );

    groupRef.current.rotation.y =
      THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotationY,
        0.05
      );
  });

  return (
    <group
      ref={groupRef}
      scale={scale}
      rotation={[0, 0, rotation]}
    >
      {lines.map((line) => {
        const points = [];

        const radius = 1.5 - line * 0.085;

        for (let i = 0; i <= 100; i++) {
          const angle =
            (i / 100) * Math.PI * 2;

          const distortion =
            Math.sin(
              angle * 3 + line * 0.4
            ) * 0.12 +
            Math.cos(
              angle * 2 - line * 0.3
            ) * 0.08;

          const x =
            Math.cos(angle) *
            (radius + distortion);

          const y =
            Math.sin(angle) *
            (radius + distortion);

          points.push(
            new THREE.Vector3(
              x,
              y,
              line * 0.015
            )
          );
        }

        const geometry =
          new THREE.BufferGeometry().setFromPoints(
            points
          );

        const material =
          new THREE.LineBasicMaterial({
            color: new THREE.Color(
              `hsl(${250 + line * 4}, 90%, ${
                55 + line * 2
              }%)`
            ),
            transparent: true,
            opacity:
              0.35 + line * 0.035,
          });

        return (
          <primitive
            key={line}
            object={
              new THREE.Line(
                geometry,
                material
              )
            }
          />
        );
      })}
    </group>
  );
}

function Scene({ mouseX, mouseY }) {
  return (
    <>
      {/* Main contour */}
      <ContourShape
        scale={0.9}
        offsetX={0}
        offsetY={0}
        rotation={0.2}
        mouseX={mouseX}
        mouseY={mouseY}
      />

      {/* Secondary contour */}
      <ContourShape
        scale={0.55}
        offsetX={1.2}
        offsetY={-0.7}
        rotation={-0.35}
        mouseX={mouseX}
        mouseY={mouseY}
      />
    </>
  );
}

function Hero3D() {
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  const handleMouseMove = (event) => {
    const { innerWidth, innerHeight } = window;

    // Convert cursor position to -1 → +1
    mouseX.current =
      (event.clientX / innerWidth) * 2 - 1;

    mouseY.current =
      -(event.clientY / innerHeight) * 2 + 1;
  };

  const handleMouseLeave = () => {
    mouseX.current = 0;
    mouseY.current = 0;
  };

  return (
    <div
      className="h-full w-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 45,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <Scene
          mouseX={mouseX}
          mouseY={mouseY}
        />
      </Canvas>
    </div>
  );
}

export default Hero3D;