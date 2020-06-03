import * as THREE from 'three';
import { STLLoader } from '../../../../node_modules/three/examples/jsm/loaders/STLLoader.js';
import WebpackCube from '../../../models/webpack-cube.stl';

export const geometry = () => {
    return new Promise((resolve) => {
        const loader = new STLLoader();
        loader.load(WebpackCube, (geometry) => {
            console.log(geometry);
            resolve(geometry);
        });
    });
};
