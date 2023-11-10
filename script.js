// script.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // Establecer alpha en true para fondo transparente
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene-container').appendChild(renderer.domElement);

// Crea un cubo que representará tu cara
const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);

// Carga la textura de tu foto
const textureLoader = new THREE.TextureLoader();
const faceTexture = textureLoader.load('./img/Foto-Leo-.PNG'); // Reemplaza 'tu-foto.jpg' con la ruta de tu foto

// Crea un material básico sin iluminación para que no haya sombras ni efectos de luz
const cubeMaterial = new THREE.MeshBasicMaterial({ map: faceTexture, transparent: true, opacity: 1 });

const character = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(character);

// Posición de la cámara
camera.position.z = 5;

// Función para actualizar la posición de la cámara según el movimiento del mouse
const onMouseMove = (event) => {
    const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    const mouseY = (event.clientY / window.innerHeight) * 2 - 1;

    // Aplica la rotación a la cabeza (el cubo en este caso)
    character.rotation.x = mouseY;
    character.rotation.y = mouseX;
};

// Actualiza la cámara cuando se mueve el mouse
document.addEventListener('mousemove', onMouseMove);

// Animación
const animate = () => {
    requestAnimationFrame(animate);

    // Limpia el fondo para que sea transparente
    renderer.clear();

    // Renderiza solo el cubo en el contexto transparente
    renderer.render(scene, camera);
};

animate();
