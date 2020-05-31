import * as THREE from 'three';
import { geometry } from './geometry';
import { material } from './material';
import { edges } from './edges';

export const mesh = () => {
    const mesh = new THREE.Mesh(geometry(), material());
    mesh.add(edges(mesh.geometry));

    return mesh;
};
