import * as THREE from 'three';

export const camera = (width, height) => {
    return new THREE.PerspectiveCamera(70, width / height, 0.01, 10);
};

export const scene = () => {
    return new THREE.Scene();
};

export const renderer = () => {
    return new THREE.WebGLRenderer({ antialias: true });
};
