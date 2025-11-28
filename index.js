import * as TRHEE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";

const w = window.innerWidth;
const h = window.innerHeight;

const renderer = new TRHEE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);


const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 10;
const camera = new TRHEE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;
const scene = new TRHEE.Scene();

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

const geo = new TRHEE.IcosahedronGeometry(1.0, 2);
const mat = new TRHEE.MeshStandardMaterial({ 
    color: 0xffffff,
    flatShading: true
});
const mesh = new TRHEE.Mesh(geo, mat);
scene.add(mesh);

const wireMat = new TRHEE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true
});
const wireMesh = new TRHEE.Mesh(geo, wireMat);
wireMesh.scale.setScalar(1.001);
mesh.add(wireMesh);

const hemiLight = new TRHEE.HemisphereLight(0x0099ff, 0xaa5500, 1.1);
scene.add(hemiLight);

function animate( t = 0) {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    mesh.rotation.y = t * 0.0001;
    controls.update();
}
animate();