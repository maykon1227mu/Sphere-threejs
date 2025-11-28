import * as THREE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";
import getStarfield from "./src/getStarfield.js";
import { getFresnelMat } from "./src/getFresnelMat.js";

const w = window.innerWidth;
const h = window.innerHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
camera.position.z = 3;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

const earthGroup = new THREE.Group();
earthGroup.rotation.z = -23.4 * Math.PI / 180;
scene.add(earthGroup);
new OrbitControls(camera, renderer.domElement);
const detail = 12;
const loader = new THREE.TextureLoader();
const geometry = new THREE.IcosahedronGeometry(1, detail);
const material = new THREE.MeshStandardMaterial({ 
    map: loader.load("./textures/earthmap1k.jpg"),
});
const earthMesh = new THREE.Mesh(geometry, material);
earthGroup.add(earthMesh);

const lightsMat = new THREE.MeshBasicMaterial({ 
    map: loader.load("./textures/earthlights1k.jpg"),
    blending: THREE.AdditiveBlending,
    opacity: 0.4,
});
const lightsMesh = new THREE.Mesh( geometry, lightsMat);
earthGroup.add(lightsMesh);


const cloudsMat = new THREE.MeshStandardMaterial({
    map: loader.load("./textures/earthcloudmaptrans.jpg"),
    transparent: true,
    blending: THREE.AdditiveBlending,
    opacity: 0.4,
});
const cloudsMesh = new THREE.Mesh( geometry, cloudsMat);
cloudsMesh.scale.setScalar(1.003);
earthGroup.add(cloudsMesh);

const fresnelMat = getFresnelMat();
const glowMesh = new THREE.Mesh( geometry, fresnelMat);
glowMesh.scale.setScalar(1.01);
earthGroup.add(glowMesh);

const stars = getStarfield();
scene.add(stars);

// const hemiLight = new THREE.HemisphereLight(0xffffff, 0x00000, 1.1);
// scene.add(hemiLight);
const sunLight = new THREE.DirectionalLight(0xffffff);
sunLight.position.set(-2, 0.5, 1.5);
scene.add(sunLight);

function animate( ) {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    lightsMesh.rotation.y += 0.002;
    earthMesh.rotation.y += 0.002;
    cloudsMesh.rotation.y += 0.0018;
    glowMesh.rotation.y += 0.0023;
}
animate();