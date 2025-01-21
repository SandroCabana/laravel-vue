import { WebGLRenderer } from "three";

export const initRenderer = (canvas) => {

    const renderer = new WebGLRenderer({

        canvas: canvas,

    });

    return renderer;

};
export function updateRenderer(renderer, width, height) {

    if (!renderer) return;

    renderer.setSize(width, height);
    // configura nuestra escena con el tamaño enviado

    renderer.setPixelRatio(window.devicePixelRatio);
    // configura nuestra escena con el pixel Ratio del dispositivo

    }
