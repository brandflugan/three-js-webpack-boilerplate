import * as THREE from 'three';

export const camera = (window) => {
    return new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.01,
        10
    );
};

export const scene = () => {
    return new THREE.Scene();
};

export const renderer = () => {
    return new THREE.WebGLRenderer({ antialias: true });
};
