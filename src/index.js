import './styles/index.scss';
import WebpackLogo from './images/logos/webpack-logo.svg';
import ThreeLogo from './images/logos/three-icon.png';
import * as SceneSetup from './js/sceneSetup';
import * as Box from './js/box/mesh';

/* Define DOM elements */
const rootElement = document.querySelector('#root');
const contentElement = document.querySelector('#content-wrapper');

/* Define Three variables */
let camera,
    controls,
    ambientLight,
    spotLight,
    scene,
    mesh,
    renderer,
    aspectHeight,
    aspectWidth,
    gridHelper;

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

    // Append logos and heading nodes to the content DOM element
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
    camera.position.set(0, 5, 10);

    /* Define scene */
    scene = SceneSetup.scene();

    /** Define ambient light **/
    ambientLight = SceneSetup.ambientLight(0x222222);

    /* Add ambient light to scene */
    scene.add(ambientLight);

    /* Define spot light */
    spotLight = SceneSetup.spotLight(0xffffff);

    /* Configure spot light */
    spotLight.position.set(-100, 100, 100);
    spotLight.castShadow = true;
    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;
    spotLight.shadow.camera.near = 500;
    spotLight.shadow.camera.far = 4000;
    spotLight.shadow.camera.fov = 30;

    /* Add spot light to scene */
    scene.add(spotLight);

    /* Define grid helper */
    gridHelper = SceneSetup.gridHelper(20);

    /* Configurate grid helper */
    gridHelper.material.opacity = 0.5;
    gridHelper.material.transparent = true;

    /* Add grid helper to scene */
    scene.add(gridHelper);

    /* Define mesh */
    mesh = Box.mesh();

    /* Configure mesh */
    mesh.position.setY(mesh.scale.x / 2);
    mesh.castShadow = true;

    /* Add mesh to scene */
    scene.add(mesh);

    /* Define renderer */
    renderer = SceneSetup.renderer({ antialias: true });

    /* Configure renderer */
    renderer.setSize(aspectWidth, aspectHeight);

    /* Define controls */
    controls = SceneSetup.controls(camera, renderer.domElement);

    /* Configurate controls */
    controls.maxPolarAngle = (0.9 * Math.PI) / 2;

    /* Add event listener on resize */
    window.addEventListener('resize', onResize, false);

    /* Append canvas to DOM */
    rootElement.appendChild(renderer.domElement);
};

const animate = () => {
    requestAnimationFrame(animate);

    /* Configurate rotation of mesh for each tick */
    mesh.rotation.y += 0.005;

    /* Render scene */
    renderer.render(scene, camera);
};

/* Run */
appendContent();
initThreeJS();
animate();
