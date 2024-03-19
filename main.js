// // Importing the entire three.js library
// import { BoxGeometry, Color, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import './styles/main.scss'

// // Adding the OrbitControls
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
// // Adding the GLTFLoader

// // Creating a scene
// const scene = new Scene()
// scene.background = new Color('blueviolet')

// // Creating a camera
// const FOV = 45
// const ASPECT = window.innerWidth / window.innerHeight
// const NEAR = 0.1
// const FAR = 100

// const camera = new PerspectiveCamera(
//   FOV,
//   ASPECT,
//   NEAR,
//   FAR
// )

// // Creating a renderer
// const renderer = new WebGLRenderer()
// // Instantiate a loader
// const controls = new OrbitControls(camera, renderer.domElement)

// // Load image resource
// // const textureLoader = new TextureLoader()
// // const texture = textureLoader.load('assets/emily.jpg')

// // Setting the renderer size
// renderer.setSize(window.innerWidth, window.innerHeight)
// // Setting the pixel ratio
// renderer.setPixelRatio(window.devicePixelRatio)
// // Adding the renderer to the DOM
// document.body.appendChild(renderer.domElement)

// // Creating a cube
// const geometry = new BoxGeometry(1, 2, 1)
// // Creating a material
// const material = new MeshBasicMaterial(
//   {
//     color: 0x00ff00
//   }
// )
// // Creating a mesh
// const cube = new Mesh(geometry, material)

// // Adding the cube to the scene
// scene.add(cube)

// // Setting the camera position
// camera.position.set(0, 3, 4)
// camera.lookAt(0, 0, 0)

// // Animation loop
// function animate () {
//   requestAnimationFrame(animate)

//   // Animating the cube
//   // cube.rotation.x += 0.01
//   cube.rotation.y += 0.01

//   renderer.render(scene, camera)
// }

// // Calling the animate function to start the animation and render the scene
// animate()

import { World } from './src/World'

function main () {
  const container = document.querySelector('#scene-container')

  const world = new World(container)

  world.render()
}

main()
