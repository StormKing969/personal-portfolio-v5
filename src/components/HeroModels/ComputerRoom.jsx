/*
 * Auto-generated by: https://github.com/pmndrs/gltfjsx
 * Command: npx gltfjsx@6.5.3 .\optimized-room.glb
 */

import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { BlendFunction } from "postprocessing";
import { MeshPhongMaterial, MeshStandardMaterial } from "three";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";

/**
 * ComputerRoom component that renders a 3D model of a computer room.
 * Utilizes Three.js and React Three Fiber for rendering and postprocessing effects.
 *
 * @param {Object} props - The properties passed to the component.
 * @returns {JSX.Element} A group containing the 3D model and its materials.
 */
export function ComputerRoom(props) {
  // Load the GLTF model and its materials
  const { nodes, materials } = useGLTF("/models/optimized-room.glb");

  // Reference for the screens to apply selective bloom effect
  const screensRef = useRef();

  // Load texture for the body material
  const matcapTexture = useTexture("/images/textures/mat1.png");

  // Define custom materials for various parts of the model
  const curtainMaterial = new MeshPhongMaterial({
    color: "#d90429",
  });

  const bodyMaterial = new MeshPhongMaterial({
    map: matcapTexture,
  });

  const tableMaterial = new MeshPhongMaterial({
    color: "#582f0e",
  });

  const radiatorMaterial = new MeshPhongMaterial({
    color: "#fff",
  });

  const compMaterial = new MeshStandardMaterial({
    color: "#fff",
  });

  const pillowMaterial = new MeshPhongMaterial({
    color: "#8338ec",
  });

  const chairMaterial = new MeshPhongMaterial({
    color: "#000",
  });

  return (
    <group {...props} dispose={null}>
      {/* Postprocessing effect for selective bloom */}
      <EffectComposer>
        <SelectiveBloom
          selection={screensRef}
          intensity={1.5} // Strength of the bloom
          luminanceThreshold={0.2} // Minimum luminance needed
          luminanceSmoothing={0.9} // Smooth transition
          blendFunction={BlendFunction.ADD} // How it blends
        />
      </EffectComposer>

      {/* Render meshes with their respective materials */}
      <mesh
        geometry={nodes._________6_blinn1_0.geometry}
        material={curtainMaterial}
      />
      <mesh geometry={nodes.body1_blinn1_0.geometry} material={bodyMaterial} />
      <mesh geometry={nodes.cabin_blinn1_0.geometry} material={tableMaterial} />
      <mesh
        geometry={nodes.chair_body_blinn1_0.geometry}
        material={chairMaterial}
      />
      <mesh geometry={nodes.comp_blinn1_0.geometry} material={compMaterial} />
      <mesh
        ref={screensRef}
        geometry={nodes.emis_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh
        geometry={nodes.handls_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.keyboard_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.kovrik_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.lamp_bl_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.lamp_white_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.miuse_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.monitor2_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.monitor3_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.pCylinder5_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.pillows_blinn1_0.geometry}
        material={pillowMaterial}
      />
      <mesh
        geometry={nodes.polySurface53_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.radiator_blinn1_0.geometry}
        material={radiatorMaterial}
      />
      <mesh
        geometry={nodes.radiator_blinn1_0001.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.railing_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.red_bttns_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.red_vac_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.stylus_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh geometry={nodes.table_blinn1_0.geometry} material={tableMaterial} />
      <mesh
        geometry={nodes.tablet_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.triangle_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.vac_black_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.vacuum1_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.vacuumgrey_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.vires_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.window_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.window4_phong1_0.geometry}
        material={materials.phong1}
      />
    </group>
  );
}

// Preload the GLTF model for optimization
useGLTF.preload("/models/optimized-room.glb");