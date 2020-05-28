import WebpackLogo from './images/webpack-logo.svg';
import './styles/index.scss';
import * as SceneSetup from './js/sceneSetup';
import * as Mesh from './js/box/mesh';

/* Define DOM elements */
const rootElement = document.querySelector('#root');
const contentElement = document.querySelector('#content-wrapper');
/* Define Three variables */
let camera, scene, mesh, renderer;

// Create SVG logo node
const logo = document.createElement('img');
logo.src = WebpackLogo;

// Create heading node
const greeting = document.createElement('h1');
greeting.textContent = 'Hello world!';

// Append SVG and heading nodes to the root element
contentElement.append(logo, greeting);

/* define onResize event */
const onResize = () => {
    camera.aspect =
        window.innerWidth / (window.innerHeight - contentElement.offsetHeight);
    camera.updateProjectionMatrix();
    renderer.setSize(
        window.innerWidth,
        window.innerHeight - contentElement.offsetHeight
    );
};

const initThreeJS = () => {
    /* Define camera */
    camera = SceneSetup.camera(window);

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
    renderer.setSize(
        window.innerWidth,
        window.innerHeight - contentElement.offsetHeight
    );

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

initThreeJS();
animate();
