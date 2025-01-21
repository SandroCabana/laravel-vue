//camera.js
import { PerspectiveCamera } from "three";

export const initCamera = () => {

    const camera = new PerspectiveCamera(
        75, window.width / window.height, 0.1, 100
    );
    camera.position.z = 5;
return camera;

// la position de la cámara por defecto es x:0, y:0 z:0
// recordemos que trabajamos con 3 dimensiones, el orden por defecto es XYZ
};
export const updateCamera = (camera, aspectRatio) => {

    if (!camera) return;

    camera.aspect = aspectRatio;

    // configura nuestra escena con el aspectRatio enviado

    camera.updateProjectionMatrix();

    // actualiza la projection de la cámara
    };
