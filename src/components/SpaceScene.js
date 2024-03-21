import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function SpaceScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scrollSpeed = 0.05;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const mount = mountRef.current;
    mount.appendChild(renderer.domElement);

    const starGeometry = new THREE.SphereGeometry(1, 24, 24); // Increase star size
    const starMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
    for (let i = 0; i < 500; i++) {
      const star = new THREE.Mesh(starGeometry, starMaterial);
      const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(1000));
      star.position.set(x, y, z);
      scene.add(star);
    }

    camera.position.z = 500;

    const animate = () => {
      requestAnimationFrame(animate);

      // Move stars to simulate scrolling
      scene.children.forEach((child) => {
        if (child instanceof THREE.Mesh) {
          // Move stars towards the camera
          child.position.z += scrollSpeed;

          // Reset star position when it gets too close
          if (child.position.z > camera.position.z) {
            child.position.z -= 200; // Adjust based on your scene's scale
          }
        }
      });

      renderer.render(scene, camera);
    };
    animate();
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
      }}
    />
  );
}

export default SpaceScene;
