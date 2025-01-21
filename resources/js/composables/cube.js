import { BoxGeometry, MeshBasicMaterial, Mesh } from "three";

export const createCube = () => {
    const geometry = new BoxGeometry(1, 1, 1);
// la BoxGeometry necesita los parámetros de width, height y depth

    const material = new MeshBasicMaterial({ color: 0x00ff00 });
// el MeshBasicMaterial es el material más básico, no necesita luz

    return new Mesh(geometry, material);
};
