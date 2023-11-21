import * as THREE from 'https://threejs.org/build/three.module.js';

// Configuración básica
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene-containe').appendChild(renderer.domElement);

// Fondo con textura de la Tierra
const textureLoader = new THREE.TextureLoader();
const backgroundTexture = textureLoader.load('body');
scene.background = backgroundTexture;

// Ejemplo de objeto 3D (esfera con textura)
const geometry = new THREE.SphereGeometry(2, 32, 32);
const material = new THREE.MeshBasicMaterial({ map: textureLoader.load('./img/globo2.jpg') });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Configuración de la cámara
camera.position.z = 5;

// Luces
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
camera.add(pointLight);
scene.add(camera);

// Animación
const animate = () => {
    requestAnimationFrame(animate);
    sphere.rotation.x += 0.005;
    sphere.rotation.y += 0.005;
    renderer.render(scene, camera);
};

animate();
