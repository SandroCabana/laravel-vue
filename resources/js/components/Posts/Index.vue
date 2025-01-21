<template>
    <canvas ref="canvas" />
</template>

<script setup>
    import { ref, onMounted, computed, watchEffect } from "vue";
import { Scene } from "three";
import { useWindowSize, useMouse  } from "@vueuse/core";
import { initRenderer, updateRenderer } from "../../composables/renderer";
import { initCamera, updateCamera } from "../../composables/camera";

const { x, y } = useMouse();
const canvas = ref(null);

const scene = new Scene();

let renderer = null;

let camera = null;

const { width, height } = useWindowSize();
const aspectRatio = computed(() => width.value / height.value);

const cameraX = computed(() => x.value / width.value -0.5);
const cameraY = computed(() => -(y.value / height.value -0.5));



camera = initCamera();

scene.add(camera);
import { createCube } from "../../composables/cube";

const cube = createCube()

scene.add(cube);

watchEffect(() => {
    updateRenderer(renderer, width.value, height.value);
    updateCamera(camera, aspectRatio.value);
});

onMounted(() => {
    renderer = initRenderer(canvas.value);
    updateRenderer(renderer, width.value, height.value);
    updateCamera(camera, aspectRatio.value);

    const tick = () => {
        //render
        camera.position.x = cameraX.value;
        camera.position.y = cameraY.value;
        renderer.render(scene, camera);
        window.requestAnimationFrame(tick);

        cube.rotation.y += 0.01
        cube.rotation.x += 0.01
    };

    tick();
});
</script>
<style>
canvas {
position: absolute;
touch-action: none;
}
</style>
