import * as THREE from 'three';
import { geometry } from './geometry';
import { material } from './material';

export const mesh = () => {
    return new THREE.Mesh(geometry(), material());
};
