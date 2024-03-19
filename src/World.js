import { createBufferGeometry } from './components/buffer-geometry'
import { createCamera } from './components/camera'
import { createCube } from './components/cube'
import { createScene } from './components/scene'

import { createRenderer } from './systems/renderer'
import { Resizer } from './systems/Resizer'

let camera
let renderer
let scene

class World {
  constructor (container) {
    camera = createCamera()
    scene = createScene()
    renderer = createRenderer()

    container.append(renderer.domElement)

    // First cube
    const cube = createCube()
    scene.add(cube)
    cube.position.x = 0.5

    // Second cube
    const cube2 = createCube()
    scene.add(cube2)
    cube2.position.x = 2

    const bufferGeometry = createBufferGeometry()
    scene.add(bufferGeometry)
    bufferGeometry.position.set(-1.5, 0, -2)

    const resizer = new Resizer(container, camera, renderer)
  }

  render () {
    renderer.render(scene, camera)
  }
}

export { World }
