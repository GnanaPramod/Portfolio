/// <reference types="vite/client" />

// Add React Three Fiber types to avoid TypeScript errors
declare namespace JSX {
  interface IntrinsicElements {
    group: any;
    geometry: any;
    lineBasicMaterial: any;
    mesh: any;
    octahedronGeometry: any;
    meshStandardMaterial: any;
    ambientLight: any;
    pointLight: any;
    directionalLight: any;
    spotLight: any;
    perspectiveCamera: any;
    boxGeometry: any;
    sphereGeometry: any;
    capsuleGeometry: any;
    cylinderGeometry: any;
    planeGeometry: any;
    torusGeometry: any;
    ellipsisGeometry: any;
  }
}