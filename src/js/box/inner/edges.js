import * as THREE from 'three';

export const edges = (geometry) => {
    const edges = new THREE.EdgesGeometry(geometry);
    return new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xffffff }));
};
