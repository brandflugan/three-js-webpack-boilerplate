import './styles/index.scss';
import WebpackLogo from './images/logos/webpack-logo.svg';
import ThreeLogo from './images/logos/three-icon.png';
import * as SceneSetup from './js/sceneSetup';
import * as InnerBox from './js/box/inner/mesh';
import * as OuterBox from './js/box/outer/mesh';
import * as Utils from './js/utils/utils';

/* Define DOM elements */
const rootElement = document.querySelector('#root');
const contentElement = document.querySelector('#content-wrapper');

/* Define Three variables */
let camera, controls, scene, innerBox, outerBox, renderer, aspectHeight, aspectWidth, gridHelper;

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
    camera.position.set(0, 5, 5.65);

    /* Define scene */
    scene = SceneSetup.scene();

    /* Define grid helper */
    gridHelper = SceneSetup.gridHelper(20);

    /* Configurate grid helper */
    gridHelper.material.opacity = 0.5;
    gridHelper.material.transparent = true;

    /* Add grid helper to scene */
    scene.add(gridHelper);

    /* Define inner box */
    innerBox = InnerBox.mesh();

    /* Configure inner box */
    innerBox.position.setY(1);

    innerBox.rotation.y = Utils.convertRadToDeg(45);

    /* Add inner mesh to box */
    scene.add(innerBox);

    /* Define outer box */
    outerBox = OuterBox.mesh();

    /* Configure outer box */
    outerBox.position.setY(Utils.calculateMeshYPositionOnFloor(outerBox, gridHelper));
    outerBox.material.side = 1;
    outerBox.rotation.y = Utils.convertRadToDeg(45);

    /* Configure outer box */
    scene.add(outerBox);

    /* Define renderer */
    renderer = SceneSetup.renderer({ antialias: true });

    /* Configure renderer */
    renderer.setSize(aspectWidth, aspectHeight);

    /* Define controls */
    controls = SceneSetup.controls(camera, renderer.domElement);

    /* Configurate controls */
    controls.maxPolarAngle = (0.9 * Math.PI) / 2;
    controls.enableDamping = true;
    controls.dampingFactor = 0.15;

    /* Add event listener on resize */
    window.addEventListener('resize', onResize, false);

    /* Append canvas to DOM */
    rootElement.appendChild(renderer.domElement);
};

const animate = () => {
    requestAnimationFrame(animate);

    /* Update controls when damping */
    controls.update();

    /* Render scene */
    renderer.render(scene, camera);
};

/* Run */
appendContent();
initThreeJS();
animate();
