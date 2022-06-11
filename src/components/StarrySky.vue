<script setup>
import * as THREE from "three";
import { onMounted, toRefs } from "vue";
const props = defineProps({
    count: {
        type: Number,
        default: 3000,
    },
});
const { count } = toRefs(props);
const radius = 450;

const scene = new THREE.Scene();
const backgroundColor = new THREE.Color(0x21326a);
scene.background = backgroundColor;

const material = new THREE.LineBasicMaterial({
    color: 0xffffff,
});
let lines = new THREE.LineSegments( createLines(), material );
lines.updateMatrix();
console.log(lines.vertices);
scene.add(lines);

function createLines() {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    const vertex = new THREE.Vector3();

    for (let i = 0; i < count.value; i++) {
        vertex.x = Math.random() * 2 - 1;
        vertex.y = Math.random() * 2 - 1;
        vertex.z = Math.random() * 2 - 1;
        vertex.normalize();
        vertex.multiplyScalar(radius);

        vertices.push(vertex.x, vertex.y, vertex.z);

        vertex.multiplyScalar(Math.random() * 0.09 + 1);

        vertices.push(vertex.x, vertex.y, vertex.z);
    }

    geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(vertices, 3)
    );

    return geometry;
}

const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.set(0, 0, 100);
camera.lookAt(scene.position);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
function render(time) {
    let second = time * 0.001;
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

onMounted(() => {
    document.querySelector(".stars").appendChild(renderer.domElement);
    requestAnimationFrame(render);
});

function cameraMove(e) {
    const x = (e.clientX - window.innerWidth / 2) * 0.1;
    const y = -(e.clientY - window.innerHeight / 2) * 0.5;
    camera.lookAt(x, y, scene.position.z);
}
</script>
<template>
    <div class="stars" @pointermove="cameraMove"></div>
</template>
