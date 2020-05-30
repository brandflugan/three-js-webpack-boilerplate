import WebpackLogo from './images/webpack-logo.svg';
import ThreeLogo from './images/three-icon.png';
import './styles/index.scss';
import * as SceneSetup from './js/sceneSetup';
import * as Mesh from './js/box/mesh';

/* Define DOM elements */
const rootElement = document.querySelector('#root');
const contentElement = document.querySelector('#content-wrapper');
/* Define Three variables */
let camera, scene, mesh, renderer, aspectHeight, aspectWidth;

const appendContent = () => {
    // Create Webpack SVG logo node
    const webpackLogo = document.createElement('img');
    webpackLogo.src = WebpackLogo;

    // Create Three.js PNG logo node
    const threeLogo = document.createElement('img');
    threeLogo.src = ThreeLogo;

    // Create heading node
    const greeting = document.createElement('h1');
    greeting.textContent = 'Three.js Webpack boilerplate';

    // Append logos and heading nodes to the content element
    contentElement.querySelector('#logo-wrapper').append(threeLogo, webpackLogo);
    contentElement.append(greeting);
};

const onResize = () => {
    aspectWidth = window.innerWidth;
    aspectHeight = window.innerHeight - contentElement.getBoundingClientRect().bottom;
    camera.aspect = aspectWidth / aspectHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(aspectWidth, aspectHeight);
};

const initThreeJS = () => {
    /* Define aspect */
    aspectWidth = window.innerWidth;
    aspectHeight = window.innerHeight - contentElement.getBoundingClientRect().bottom;

    /* Define camera */
    camera = SceneSetup.camera(aspectWidth, aspectHeight);

    /* Configurate camera */
    camera.position.z = 1;

    /* Define scene */
    scene = SceneSetup.scene();

    /* Define mesh */
    mesh = Mesh.mesh();

    /* Add mesh to scene */
    scene.add(mesh);

    /* Define renderer */
    renderer = SceneSetup.renderer();

    /* Configurate renderer */
    renderer.setSize(aspectWidth, aspectHeight);

    /* Append element */
    rootElement.appendChild(renderer.domElement);

    /* Add event listener on resize */
    window.addEventListener('resize', onResize, false);
};

const animate = () => {
    requestAnimationFrame(animate);

    /* Configurate rotation of mesh for each tick */
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;

    /* Render Three scene */
    renderer.render(scene, camera);
};

/* Run */
appendContent();
initThreeJS();
animate();
